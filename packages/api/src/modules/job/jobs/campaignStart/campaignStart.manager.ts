import { Logger } from 'winston';
import { Channel } from 'amqplib';
import { DataSource } from 'typeorm';

import { Job } from '../../../../entities/job.entity';
import { JobManager, MessageHeaders, StageHandler } from '../../types';
import { SubgraphAccountStage } from './stages/subgraphAccount';
import {
  COMPLETION_EXCHANGE,
  JobStatus,
  ResultExchanges,
  TaskQueues,
} from '../../constants';
import {
  SubgraphTaskMessage,
  SubgraphTaskTypes,
} from '../../tasks/subgraph/types';
import { CompletionStage } from './stages/completion/completion.stage';

export class CampaignStartManager implements JobManager {
  private readonly logger: Logger;

  job: Job;

  stageHandlers: StageHandler[] = [];

  completionHandler: StageHandler;

  constructor(
    private readonly channel: Channel,
    private readonly dataSource: DataSource,
    mainLogger: Logger,
    job: Job,
  ) {
    this.logger = mainLogger.child({
      scope: `job ${job.id} campaignStart.manager`,
    });
    this.job = job;
  }

  async startJob(): Promise<Job> {
    await this.registerCompletionHandler();

    if (this.job.status !== JobStatus.FINISHING) {
      // assign stage handlers
      await this.registerStageHandlers();
    }

    if (this.job.status === JobStatus.REGISTERED) {
      const message: SubgraphTaskMessage = {
        type: SubgraphTaskTypes.MARKET_ACCOUNTS,
        networkId: this.job.args.networkId,
        market: this.job.args.market,
        blockNumber: this.job.args.blockNumber,
      };
      const headers: MessageHeaders = { jobId: this.job.id };

      this.channel.sendToQueue(
        TaskQueues.SUBGRAPH,
        Buffer.from(JSON.stringify(message)),
        { headers },
      );

      this.job.status = JobStatus.RUNNING;
      await this.dataSource.manager.save(this.job);
    }

    return this.job;
  }

  private async registerStageHandlers() {
    const subgraphAccountStage = new SubgraphAccountStage(
      this.channel,
      ResultExchanges.SUBGRAPH,
      this.job,
    );
    this.stageHandlers.push(subgraphAccountStage);
    await subgraphAccountStage.registerHandler();
  }

  private async registerCompletionHandler() {
    await this.channel.assertExchange(COMPLETION_EXCHANGE, 'headers', {
      durable: true,
    });

    this.completionHandler = new CompletionStage(
      this.channel,
      COMPLETION_EXCHANGE,
      this.job,
      this.stageHandlers,
      this.dataSource,
    );
    await this.completionHandler.registerHandler();
  }
}
