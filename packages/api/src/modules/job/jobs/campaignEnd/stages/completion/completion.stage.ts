import { Logger } from 'winston';
import { Channel, Replies } from 'amqplib';
import { DataSource } from 'typeorm';
import { StageHandler } from '../../../../types';
import { JobStatus } from '../../../../constants';
import { Job } from '../../../../../../entities/job.entity';
import { mainLogger } from '../../../../../winston';
import { CompletionMessage } from './types';

export class CompletionStage implements StageHandler {
  readonly queueName: string;

  private readonly logger: Logger;

  private consumer: Replies.Consume;

  constructor(
    readonly channel: Channel,
    readonly completionExchange: string,
    readonly job: Job,
    readonly stageHandlers: StageHandler[],
    private readonly dataSource: DataSource,
  ) {
    this.logger = mainLogger.child({
      scope: `job ${job.id} marketAccounts.stage`,
    });
    this.queueName = `${this.job.type}_completion_stage_${this.job.id}`;
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
      this.completionExchange,
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
      return;
    }
    const result: CompletionMessage = JSON.parse(msg.content.toString());
    this.job.status = JobStatus.FINISHING;
    if (result.error) {
      this.job.error = result.error;
    }
    await this.dataSource.manager.save(this.job);

    // eslint-disable-next-line no-restricted-syntax
    for (const stageHandler of this.stageHandlers) {
      await stageHandler.unregisterHandler();
    }
    await this.unregisterHandler();

    this.job.status = this.job.error ? JobStatus.FAILED : JobStatus.COMPLETED;
    await this.dataSource.manager.save(this.job);
    this.logger.info(
      `Job ${this.job.id} completed. status: ${this.job.status}`,
    );
  }
}
