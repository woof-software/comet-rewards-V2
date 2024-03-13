import BigNumber from 'bignumber.js';

export enum Contracts {
  COMET = 'comet',
}

export interface UserBasic {
  principal: bigint;
  baseTrackingIndex: bigint;
  baseTrackingAccrued: bigint;
  assetsIn: bigint;
  _reserved: bigint;
}

export interface UserBasicBN {
  principal: BigNumber;
  baseTrackingIndex: BigNumber;
  baseTrackingAccrued: BigNumber;
  assetsIn: BigNumber;
  _reserved: BigNumber;
}

export interface UserBasicStr {
  principal: string;
  baseTrackingIndex: string;
  baseTrackingAccrued: string;
  assetsIn: string;
  _reserved: string;
}
