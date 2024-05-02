import { Logger } from 'winston';
import { DataSource } from 'typeorm';
import { Channel } from 'amqplib';

import { Handler, JobManager, StageHandler } from '../../types';
import { Job } from '../../../../entities';
import { CampaignStartArgs } from './types';

export class CampaignStartManager implements JobManager {
  private readonly logger: Logger;

  job: Job;

  stageHandlers: StageHandler[] = [];

  completionHandler: Handler;

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
    // assign stage handlers

    return this.job;
  }

  private async registerStageHandlers() {
    console.log();
  }

  private async registerCompletionHandlers() {
    console.log();
  }

  static getKey(args: CampaignStartArgs): string {
    return `campaign_start_${args.campaignId}_${args.networkId}`;
  }
}
