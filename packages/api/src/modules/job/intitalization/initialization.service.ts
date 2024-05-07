import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Logger } from 'winston';
import { DataSource, In } from 'typeorm';
import { WINSTON_LOGGER } from '../../winston/keys';
import { TaskService } from '../tasks';
import { Job } from '../../../entities/job.entity';
import { JobStatus } from '../constants';
import { JobService } from '../job.service';

@Injectable()
export class InitializationService implements OnApplicationBootstrap {
  private readonly logger: Logger;

  constructor(
    @Inject(TaskService)
    private readonly taskService: TaskService,
    @Inject(JobService) private readonly jobService: JobService,
    @Inject(DataSource) private readonly dataSource: DataSource,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'initialization.service' });
  }

  async onApplicationBootstrap() {
    // Initialize task queues
    await this.taskService.registerTaskQueues();
    this.logger.info(`Task queues initialized: ${this.taskService.queues}`);

    // Initialize jobs with stage handlers
    await this.wakeJobs();

    // Initialize result exchanges
    await this.taskService.registerResultExchanges();
    this.logger.info(
      `Task result exchanges initialized: ${this.taskService.exchanges}`,
    );

    // Initialize task handlers
    await this.taskService.registerTaskHandlers();

    this.logger.info(`Task handlers initialized`);
  }

  async wakeJobs() {
    const jobs = await this.dataSource.manager.find(Job, {
      where: {
        status: In([
          JobStatus.REGISTERED,
          JobStatus.RUNNING,
          JobStatus.FINISHING,
        ]),
      },
    });

    // eslint-disable-next-line no-restricted-syntax
    for (const job of jobs) {
      await this.jobService.startJob(job.id);
    }
  }
}
