import { Logger } from 'winston';
import { Channel, Replies } from 'amqplib';
import { DataSource, IsNull, Not } from 'typeorm';
import { MessageHeaders, StageHandler } from '../../../../types';
import { JobEntity } from '../../../../../../entities/job.entity';
import { mainLogger } from '../../../../../winston';
import { CompletionMessage } from '../completion/types';
import { ChainDataTaskResult } from '../../../../tasks/chainData/types';
import { exchanges, queues } from '../../../../../amqp/constants';
import { ParticipantEntity } from '../../../../../../entities';
import { TaskParserAddressesEntity } from '../../../../../../entities/taskParserAddresses.entity';
import { MerkleTaskMessage } from '../../../../tasks/merkle/types';

export class AccountAccruedStage implements StageHandler {
  readonly queueName: string;

  private readonly logger: Logger;

  private consumer: Replies.Consume;

  constructor(
    readonly channel: Channel,
    readonly resultExchange: string,
    readonly job: JobEntity,
    private readonly dataSource: DataSource,
  ) {
    this.logger = mainLogger.child({
      scope: `job ${job.id} accountAccrued.stage`,
    });
    this.queueName = `${this.job.type}_account_accrued_stage_${this.job.id}`;
  }

  registerHandler = async () => {
    const bindingArgs = {
      jobId: this.job.id,
    };
    await this.channel.assertQueue(this.queueName, {
      durable: true,
    });
    await this.channel.bindQueue(
      this.queueName,
      this.resultExchange,
      '',
      bindingArgs,
    );
    this.consumer = await this.channel.consume(
      this.queueName,
      this.handler.bind(this),
      { noAck: false },
    );
  };

  async unregisterHandler() {
    await this.channel.deleteQueue(this.queueName);
    await this.channel.cancel(this.consumer.consumerTag);
    delete this.consumer;
  }

  async handler(msg) {
    if (!msg) {
      return null;
    }
    const result: ChainDataTaskResult = JSON.parse(msg.content.toString());
    const { headers }: { headers: MessageHeaders } = msg.properties;
    if (result.error) {
      this.error(result.error, headers);
      return this.channel.ack(msg);
    }

    try {
      const participant = new ParticipantEntity();
      participant.networkId = this.job.args.networkId;
      participant.campaignId = this.job.args.campaignId;
      participant.address = result.address;
      participant.accruedEnd = result.accrued;

      await this.dataSource.manager.upsert(ParticipantEntity, participant, [
        'campaignId',
        'networkId',
        'address',
      ]);
      const taskHelper = await this.dataSource.manager.findOne(
        TaskParserAddressesEntity,
        {
          where: { jobId: this.job.id },
        },
      );
      const participantCount = await this.dataSource.manager.count(
        ParticipantEntity,
        {
          where: {
            networkId: this.job.args.networkId,
            campaignId: this.job.args.campaignId,
            accruedEnd: Not(IsNull()),
          },
        },
      );

      if (participantCount === taskHelper.count) {
        const message: MerkleTaskMessage = {
          networkId: this.job.args.networkId,
          campaignId: this.job.args.campaignId,
          type: 'end',
        };

        this.channel.sendToQueue(
          queues.task.MERKLE,
          Buffer.from(JSON.stringify(message)),
          { headers },
        );
      }
    } catch (err) {
      this.logger.error(err.message);
      this.error(err.message, headers);
    }

    return this.channel.ack(msg);
  }

  error(error: string, headers: MessageHeaders) {
    const message: CompletionMessage = {
      error,
    };
    this.channel.publish(
      exchanges.COMPLETION,
      '',
      Buffer.from(JSON.stringify(message)),
      { headers },
    );
  }
}
