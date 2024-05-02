export enum SubgraphTaskTypes {
  MARKET_ACCOUNTS = 'market_accounts',
}

export interface SubgraphTaskMessage {
  networkId: number;
  market: string;
  type: SubgraphTaskTypes;
  args: any;
}
