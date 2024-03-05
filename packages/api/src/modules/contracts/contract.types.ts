export interface UserBasic {
  principal: bigint;
  baseTrackingIndex: bigint;
  baseTrackingAccrued: bigint;
  assetsIn: bigint;
  _reserved: bigint;
}

export interface UserBasicStr {
  principal: string;
  baseTrackingIndex: string;
  baseTrackingAccrued: string;
  assetsIn: string;
  _reserved: string;
}
