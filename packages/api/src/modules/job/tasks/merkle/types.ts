export interface MerkleTaskMessage {
  networkId: number;
  campaignId: number;
  type: 'start' | 'end';
}

export interface MerkleTaskResult {
  error?: string;
  root?: string;
}
