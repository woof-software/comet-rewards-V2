import { Account } from '../../../account/types';

export enum SubgraphTaskTypes {
  MARKET_ACCOUNTS = 'market_accounts',
}

export interface SubgraphTaskMessage {
  type: SubgraphTaskTypes;
  networkId: number;
  market: string;
  blockNumber: number;
}

export interface SubgraphTaskResult {
  error?: string;
  accounts?: Account[];
}
