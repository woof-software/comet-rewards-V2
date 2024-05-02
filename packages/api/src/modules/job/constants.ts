export enum JobType {
  CAMPAIGN_START = 'campaign_start',
}

export enum JobStatus {
  REGISTERED = 'registered', // job registered for processing
  STARTED = 'started', // job started, request sent to first task queue
  FINISHING = 'finishing', // job finished, completion or error handler unregistering queues
  COMPLETED = 'completed', // job completed successfully
  ERROR = 'error', // job completed with error
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
