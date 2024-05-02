import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Logger } from 'winston';
import { Job } from '../../entities';
import { JobStatus, JobType } from './constants';
import { WINSTON_LOGGER } from '../winston/keys';
import { CampaignStartManager } from './jobs/campaignStart/campaignStart.manager';
import { JobManager } from './types';
import { AmqpService } from '../amqp/amqp.service';

@Injectable()
export class JobService {
  private readonly logger: Logger;

  constructor(
    @Inject(DataSource)
    private readonly dataSource: DataSource,
    @Inject(AmqpService)
    private readonly amqpService: AmqpService,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'job.service' });
  }

  /**
   * @desc Get constant unique job key from job arguments
   * */
  getKey(type: JobType, args: any): string {
    switch (type) {
      case JobType.CAMPAIGN_START: {
        return CampaignStartManager.getKey(args);
      }
      default: {
        throw new Error(
          'Job type unknown or key can not be generated for this type',
        );
      }
    }
  }

  /**
   * @desc Register new job
   *
   * @param   type    {JobType}   Job type
   * @param   key     {string}    Unique job key received from getKey()
   * @param   args    {Object}    Job arguments
   * */
  async registerJob(type: JobType, key: string, args: any): Promise<Job> {
    let job = await this.dataSource.manager.findOne(Job, {
      where: { key },
    });

    if (job) {
      return job;
    }

    job = new Job();
    job.key = key;
    job.type = type;
    job.status = JobStatus.REGISTERED;
    job.args = args;
    await this.dataSource.manager.save(Job, job);
    return job;
  }

  /**
   * @desc Start registered job
   *
   * @param   key     {string}   Unique job key
   * */
  async startJob(key: string): Promise<void> {
    // check if job already completed
    const job = await this.dataSource.manager.findOne(Job, {
      where: { key },
    });

    if (!job) throw new Error('Job is not registered');

    if (job.status === JobStatus.COMPLETED || JobStatus.ERROR) {
      throw new Error(`job ${key} already completed status: ${job.status}`);
    }

    const channel = await this.amqpService.getChannel();

    let manager: JobManager;
    switch (job.type) {
      case JobType.CAMPAIGN_START: {
        manager = new CampaignStartManager(
          channel,
          this.dataSource,
          this.logger,
          job,
        );

        await manager.startJob();
        break;
      }
      default: {
        // TODO: update job with error
        break;
      }
    }
  }

  wakeJobs() {
    console.log();
  }
}
