export class MarketAccount {
  id: string;
}

export class MarketAccountExt extends MarketAccount {
  accrued: string;
}

export interface AccountDetails {
  id: string;
  principal;
  baseTrackingIndex;
  baseTrackingAccrued;
}
