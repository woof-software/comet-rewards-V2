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

export enum TaskQueues {
  SUBGRAPH = 'task_subgraph',
  CHAIN_DATA = 'task_chain_data',
  CALCULATION = 'task_calculation',
}

export enum ResultExchanges {
  SUBGRAPH = 'result_subgraph',
  CHAIN_DATA = 'result_chain_data',
  CALCULATION = 'result_calculation',
}

export const COMPLETION_EXCHANGE = 'job_completion_exchange';
