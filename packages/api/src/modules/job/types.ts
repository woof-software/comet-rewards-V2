import { Channel } from 'amqplib';
import { Job } from '../../entities/job.entity';

export interface Handler {
  channel: Channel;

  registerHandler();
  unregisterHandler();
  handler(msg);
}

export interface StageHandler extends Handler {
  job: Job;
  // next<T>(data: T);
}

export interface JobManager {
  stageHandlers: StageHandler[];
  completionHandler: Handler;

  startJob(): Promise<Job>;
}

export interface MessageHeaders {
  jobId: number;
}
