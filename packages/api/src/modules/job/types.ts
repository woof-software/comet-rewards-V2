import { Channel } from 'amqplib';
import { Job } from '../../entities';
import { ResultExchanges } from './constants';

export interface Handler {
  channel: Channel;
  resultExchange: ResultExchanges;

  registerHandler();
  unregisterHandler();
  handler(msg);
}

export interface StageHandler extends Handler {
  job: Job;
  next<T>(data: T);
}

export interface JobManager {
  stageHandlers: StageHandler[];
  completionHandler: Handler;

  startJob(): Promise<Job>;
}
