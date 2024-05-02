import { Logger } from 'winston';
import { Channel, Replies } from 'amqplib';
import { StageHandler } from '../../types';
import { Job } from '../../../../entities/job.entity';
import { ResultExchanges } from '../../constants';

export class MarketAccountStage implements StageHandler {
  readonly queueName: string;

  private readonly logger: Logger;

  private consumer: Replies.Consume;

  constructor(
    readonly channel: Channel,
    readonly resultExchange: ResultExchanges,
    readonly job: Job,
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({
      scope: `job ${job.id} marketAccounts.stage`,
    });
    this.queueName = job.type + job.id;
  }

  registerHandler = async () => {
    const bindingArgs = {
      jobId: this.job.id,
    };
    // have unique queue without
    const queueName = this.job.type + this.job.id;

    await this.channel.assertQueue(queueName, {
      durable: true,
    });
    await this.channel.bindQueue(
      queueName,
      this.resultExchange,
      '',
      bindingArgs,
    );
    await this.channel.consume(queueName, this.handler, { noAck: false });
  };

  async unregisterHandler() {
    await this.channel.deleteQueue(this.queueName);
    await this.channel.cancel(this.consumer.consumerTag);
    delete this.consumer;
  }

  handler(msg) {
    console.log(msg);
  }

  async next() {
    console.log();
  }
}
