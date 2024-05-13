import { Logger } from 'winston';
import { Channel, Replies } from 'amqplib';
import { DataSource } from 'typeorm';

import { MessageHeaders, StageHandler } from '../../../../types';
import { JobEntity } from '../../../../../../entities/job.entity';
import { mainLogger } from '../../../../../winston';
import { CompletionMessage } from '../completion/types';
import { exchanges } from '../../../../../amqp/constants';
import { CampaignEntity } from '../../../../../../entities';
import { MerkleTaskResult } from '../../../../tasks/merkle/types';

export class MerkleStage implements StageHandler {
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
      scope: `job ${job.id} merkle.stage`,
    });
    this.queueName = `${this.job.type}_merkle_stage_${this.job.id}`;
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
    const result: MerkleTaskResult = JSON.parse(msg.content.toString());
    const { headers }: { headers: MessageHeaders } = msg.properties;
    if (result.error) {
      this.error(result.error, headers);
      return this.channel.ack(msg);
    }

    try {
      const campaign = await this.dataSource.manager.findOne(CampaignEntity, {
        where: {
          id: this.job.args.campaignId,
          networkId: this.job.args.networkId,
        },
      });
      campaign.treeRootEnd = result.root;
      await this.dataSource.manager.save(campaign);

      this.channel.publish(
        exchanges.COMPLETION,
        '',
        Buffer.from(JSON.stringify({})),
        { headers },
      );
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
