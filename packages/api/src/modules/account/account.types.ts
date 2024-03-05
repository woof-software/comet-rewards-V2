import { UserBasic, UserBasicStr } from '../contracts/contract.types';

export interface Account {
  id: string;
}

export interface AccountBasicStr extends Account, UserBasicStr {}
export interface AccountBasic extends Account, UserBasic {}

export type AccountAccrued = [address: string, accrued: string];
