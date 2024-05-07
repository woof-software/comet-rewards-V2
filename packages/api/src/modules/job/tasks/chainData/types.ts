export enum ChainDataTaskType {
  ACCRUED = 'accrued',
}

export interface ChainDataTaskMessage {
  networkId: number;
  market: string;
  type: ChainDataTaskType;
  blockNumber: number;
  address: string;
}

export interface ChainDataTaskResult {
  error?: string;
  address: string;
  accrued: string;
}
