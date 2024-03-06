import BigNumber from 'bignumber.js';

export interface IndexInfo {
  trackingSupplyIndex: BigNumber;
  trackingBorrowIndex: BigNumber;
  baseSupplyIndex: BigNumber;
  baseBorrowIndex: BigNumber;
  lastAccrualTime: number;
}
