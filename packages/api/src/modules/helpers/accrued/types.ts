import BigNumber from 'bignumber.js';

export interface AccruedCoefficients {
  trackingSupplyIndex: BigNumber;
  trackingBorrowIndex: BigNumber;
  trackingIndexScale: BigNumber;
  accrualDescaleFactor: BigNumber;
}
