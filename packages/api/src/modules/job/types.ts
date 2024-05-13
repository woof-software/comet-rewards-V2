import { Channel } from 'amqplib';
import { JobEntity } from '../../entities/job.entity';

export interface Handler {
  channel: Channel;

  registerHandler();
  unregisterHandler();
  handler(msg);
}

export interface StageHandler extends Handler {
  job: JobEntity;
  // next<T>(data: T);
}

export interface JobManager {
  stageHandlers: StageHandler[];
  completionHandler: Handler;

  startJob(): Promise<JobEntity>;
}

export interface MessageHeaders {
  jobId: number;
}
