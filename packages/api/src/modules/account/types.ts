import {
  UserBasic,
  UserBasicBN,
  UserBasicStr,
} from '../contracts/contract.types';

export interface Account {
  id: string;
}

export interface AccountBasicStr extends Account, UserBasicStr {}
export interface AccountBasic extends Account, UserBasic {}
export interface AccountBasicBN extends Account, UserBasicBN {}

export type AccountAccrued = [address: string, accrued: string];
