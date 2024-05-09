export enum JobType {
  CAMPAIGN_START = 'campaign_start',
}

export enum JobStatus {
  REGISTERED = 'registered', // job registered for processing
  RUNNING = 'running', // job started, request sent to first task queue
  FINISHING = 'finishing', // job finished, completion or error handler unregistering queues
  COMPLETED = 'completed', // job completed successfully
  FAILED = 'failed', // job failed with error
}

export const COMPLETION_EXCHANGE = 'job_completion_exchange';
