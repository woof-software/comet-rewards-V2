import { Logger } from 'winston';
import { Channel, Replies } from 'amqplib';
import { MessageHeaders, StageHandler } from '../../../../types';
import { Job } from '../../../../../../entities/job.entity';
import { COMPLETION_EXCHANGE, ResultExchanges } from '../../../../constants';
import { mainLogger } from '../../../../../winston';
import { SubgraphTaskResult } from '../../../../tasks/subgraph/types';
import { CompletionMessage } from '../completion/types';

export class SubgraphAccountStage implements StageHandler {
  readonly queueName: string;

  private readonly logger: Logger;

  private consumer: Replies.Consume;

  constructor(
    readonly channel: Channel,
    readonly resultExchange: ResultExchanges,
    readonly job: Job,
  ) {
    this.logger = mainLogger.child({
      scope: `job ${job.id} marketAccounts.stage`,
    });
    this.queueName = `${this.job.type}_subgraph_account_stage_${this.job.id}`;
  }

  registerHandler = async () => {
    const bindingArgs = {
      jobId: this.job.id,
    };
    // have unique queue without

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
    const result: SubgraphTaskResult = JSON.parse(msg.content.toString());
    const { headers } = msg.properties;
    if (result.error) {
      this.error(result.error, headers);
      return this.channel.ack(msg);
    }

    return this.channel.ack(msg);
  }

  error(error: string, headers: MessageHeaders) {
    const message: CompletionMessage = {
      error,
    };
    this.channel.publish(
      COMPLETION_EXCHANGE,
      '',
      Buffer.from(JSON.stringify(message)),
      { headers },
    );
  }
}
