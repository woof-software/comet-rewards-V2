import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Logger } from 'winston';
import { Job } from '../../entities/job.entity';
import { JobStatus, JobType } from './constants';
import { WINSTON_LOGGER } from '../winston/keys';
import { CampaignStartJob } from './jobs/campaignStart/campaignStart.job';
import { JobManager } from './types';
import { AmqpService } from '../amqp';
import { errors } from './messages';
import { CampaignEndJob } from './jobs/campaignEnd/campaignEnd.job';

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
   * @desc Register new job
   *
   * @param   type    {JobType}   Job type
   * @param   key     {string}    Unique job key received from getKey()
   * @param   args    {Object}    Job arguments
   * */
  async registerJob<T>(type: JobType, args: T): Promise<Job> {
    const job = new Job();
    job.type = type;
    job.status = JobStatus.REGISTERED;
    job.args = args;
    await this.dataSource.manager.save(Job, job);
    return job;
  }

  /**
   * @desc Start registered job
   *
   * @param id  {Number}    Job id
   * */
  async startJob(id: number): Promise<void> {
    const job = await this.dataSource.manager.findOne(Job, {
      where: { id },
    });

    if (!job) throw errors.jobNotFound(id);

    if (job.status === JobStatus.COMPLETED || job.status === JobStatus.FAILED) {
      throw errors.jobCompleted(id, job.status);
    }

    const channel = await this.amqpService.getChannel();

    let manager: JobManager;
    switch (job.type) {
      case JobType.CAMPAIGN_START: {
        manager = new CampaignStartJob(
          channel,
          this.dataSource,
          this.logger,
          job,
        );

        await manager.startJob();
        break;
      }
      case JobType.CAMPAIGN_END: {
        manager = new CampaignEndJob(
          channel,
          this.dataSource,
          this.logger,
          job,
        );

        await manager.startJob();
        break;
      }
      default: {
        const error = errors.incorrectType(job.type);
        job.status = JobStatus.FAILED;
        job.error = error.message;
        await this.dataSource.manager.save(job);
        throw errors.incorrectType(job.type);
      }
    }
  }
}
