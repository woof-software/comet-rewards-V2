// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CompoundTypes {
  export type Maybe<T> = T | null;
  export type InputMaybe<T> = Maybe<T>;
  export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
  };
  export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
  };
  export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
  };
  /** All built-in and custom scalars, mapped to their actual values */
  export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
  };

  export type AbsorbCollateralInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Market the interaction is with */
    market: Market;
    /** Position the interaction is with */
    position: Position;
    /** Address that triggered the collateral absorb */
    absorber: Scalars['Bytes'];
    /** Collateral asset being absorbed */
    asset: CollateralToken;
    /** Amount of collateral absorbed */
    amount: Scalars['BigInt'];
    /** Amount of collateral absorbed in USD */
    amountUsd: Scalars['BigDecimal'];
  };

  export type AbsorbCollateralInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    absorber?: InputMaybe<Scalars['Bytes']>;
    absorber_not?: InputMaybe<Scalars['Bytes']>;
    absorber_in?: InputMaybe<Array<Scalars['Bytes']>>;
    absorber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    absorber_contains?: InputMaybe<Scalars['Bytes']>;
    absorber_not_contains?: InputMaybe<Scalars['Bytes']>;
    asset?: InputMaybe<Scalars['String']>;
    asset_not?: InputMaybe<Scalars['String']>;
    asset_gt?: InputMaybe<Scalars['String']>;
    asset_lt?: InputMaybe<Scalars['String']>;
    asset_gte?: InputMaybe<Scalars['String']>;
    asset_lte?: InputMaybe<Scalars['String']>;
    asset_in?: InputMaybe<Array<Scalars['String']>>;
    asset_not_in?: InputMaybe<Array<Scalars['String']>>;
    asset_contains?: InputMaybe<Scalars['String']>;
    asset_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_not_contains?: InputMaybe<Scalars['String']>;
    asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_starts_with?: InputMaybe<Scalars['String']>;
    asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_starts_with?: InputMaybe<Scalars['String']>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_ends_with?: InputMaybe<Scalars['String']>;
    asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_ends_with?: InputMaybe<Scalars['String']>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_?: InputMaybe<CollateralToken_filter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUsd?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type AbsorbCollateralInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'market'
    | 'position'
    | 'absorber'
    | 'asset'
    | 'amount'
    | 'amountUsd';

  export type AbsorbDebtInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Market the interaction is with */
    market: Market;
    /** Position the interaction is with */
    position: Position;
    /** Address that triggered the absorb */
    absorber: Scalars['Bytes'];
    /** Asset being absorbed by the market */
    asset: BaseToken;
    /** Amount of debt being absorbed */
    amount: Scalars['BigInt'];
    /** Amount of debt being absorbed in USD */
    amountUsd: Scalars['BigDecimal'];
  };

  export type AbsorbDebtInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    absorber?: InputMaybe<Scalars['Bytes']>;
    absorber_not?: InputMaybe<Scalars['Bytes']>;
    absorber_in?: InputMaybe<Array<Scalars['Bytes']>>;
    absorber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    absorber_contains?: InputMaybe<Scalars['Bytes']>;
    absorber_not_contains?: InputMaybe<Scalars['Bytes']>;
    asset?: InputMaybe<Scalars['String']>;
    asset_not?: InputMaybe<Scalars['String']>;
    asset_gt?: InputMaybe<Scalars['String']>;
    asset_lt?: InputMaybe<Scalars['String']>;
    asset_gte?: InputMaybe<Scalars['String']>;
    asset_lte?: InputMaybe<Scalars['String']>;
    asset_in?: InputMaybe<Array<Scalars['String']>>;
    asset_not_in?: InputMaybe<Array<Scalars['String']>>;
    asset_contains?: InputMaybe<Scalars['String']>;
    asset_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_not_contains?: InputMaybe<Scalars['String']>;
    asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_starts_with?: InputMaybe<Scalars['String']>;
    asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_starts_with?: InputMaybe<Scalars['String']>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_ends_with?: InputMaybe<Scalars['String']>;
    asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_ends_with?: InputMaybe<Scalars['String']>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_?: InputMaybe<BaseToken_filter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUsd?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type AbsorbDebtInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'market'
    | 'position'
    | 'absorber'
    | 'asset'
    | 'amount'
    | 'amountUsd';

  export type Account = {
    /** Address */
    id: Scalars['Bytes'];
    /** Block number this account was created */
    creationBlockNumber: Scalars['BigInt'];
    /** Address of the account */
    address: Scalars['Bytes'];
    /** All positions of the account */
    positions: Array<Position>;
    /** All reward claim interactions of the account */
    rewardsClaimed: Array<ClaimRewardsInteraction>;
  };

  export type AccountpositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
  };

  export type AccountrewardsClaimedArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ClaimRewardsInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ClaimRewardsInteraction_filter>;
  };

  export type Account_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    creationBlockNumber?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    creationBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    address?: InputMaybe<Scalars['Bytes']>;
    address_not?: InputMaybe<Scalars['Bytes']>;
    address_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_contains?: InputMaybe<Scalars['Bytes']>;
    address_not_contains?: InputMaybe<Scalars['Bytes']>;
    positions_?: InputMaybe<Position_filter>;
    rewardsClaimed_?: InputMaybe<ClaimRewardsInteraction_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Account_orderBy =
    | 'id'
    | 'creationBlockNumber'
    | 'address'
    | 'positions'
    | 'rewardsClaimed';

  export type BaseToken = {
    /** market ID + token ID */
    id: Scalars['Bytes'];
    /** Block the base token was created */
    creationBlockNumber: Scalars['BigInt'];
    /** Market the base token belongs to */
    market: Market;
    /** Actual token */
    token: Token;
    /** Last block that the base token config was updated */
    lastConfigUpdateBlockNumber: Scalars['BigInt'];
    /** Price feed for the base token */
    priceFeed: Scalars['Bytes'];
    /** Last token price in USD from the priceFeed */
    lastPriceUsd: Scalars['BigDecimal'];
    /** Block of the last token price update */
    lastPriceBlockNumber: Scalars['BigInt'];
  };

  export type BaseToken_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    creationBlockNumber?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    creationBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    token?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_?: InputMaybe<Token_filter>;
    lastConfigUpdateBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastConfigUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    priceFeed?: InputMaybe<Scalars['Bytes']>;
    priceFeed_not?: InputMaybe<Scalars['Bytes']>;
    priceFeed_in?: InputMaybe<Array<Scalars['Bytes']>>;
    priceFeed_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    priceFeed_contains?: InputMaybe<Scalars['Bytes']>;
    priceFeed_not_contains?: InputMaybe<Scalars['Bytes']>;
    lastPriceUsd?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastPriceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type BaseToken_orderBy =
    | 'id'
    | 'creationBlockNumber'
    | 'market'
    | 'token'
    | 'lastConfigUpdateBlockNumber'
    | 'priceFeed'
    | 'lastPriceUsd'
    | 'lastPriceBlockNumber';

  export type BlockChangedFilter = {
    number_gte: Scalars['Int'];
  };

  export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
  };

  export type BuyCollateralInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Market the interaction is with */
    market: Market;
    /** Buyer of the collateral */
    buyer: Scalars['Bytes'];
    /** Asset being bought */
    asset: CollateralToken;
    /** Collateral amount bought */
    collateralAmount: Scalars['BigInt'];
    /** Base asset amount being given in exchange */
    baseAmount: Scalars['BigInt'];
    /** Collateral amount bought in USD */
    collateralAmountUsd: Scalars['BigDecimal'];
    /** Base asset amount being given in exchange in USD */
    baseAmountUsd: Scalars['BigDecimal'];
  };

  export type BuyCollateralInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    buyer?: InputMaybe<Scalars['Bytes']>;
    buyer_not?: InputMaybe<Scalars['Bytes']>;
    buyer_in?: InputMaybe<Array<Scalars['Bytes']>>;
    buyer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    buyer_contains?: InputMaybe<Scalars['Bytes']>;
    buyer_not_contains?: InputMaybe<Scalars['Bytes']>;
    asset?: InputMaybe<Scalars['String']>;
    asset_not?: InputMaybe<Scalars['String']>;
    asset_gt?: InputMaybe<Scalars['String']>;
    asset_lt?: InputMaybe<Scalars['String']>;
    asset_gte?: InputMaybe<Scalars['String']>;
    asset_lte?: InputMaybe<Scalars['String']>;
    asset_in?: InputMaybe<Array<Scalars['String']>>;
    asset_not_in?: InputMaybe<Array<Scalars['String']>>;
    asset_contains?: InputMaybe<Scalars['String']>;
    asset_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_not_contains?: InputMaybe<Scalars['String']>;
    asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_starts_with?: InputMaybe<Scalars['String']>;
    asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_starts_with?: InputMaybe<Scalars['String']>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_ends_with?: InputMaybe<Scalars['String']>;
    asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_ends_with?: InputMaybe<Scalars['String']>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_?: InputMaybe<CollateralToken_filter>;
    collateralAmount?: InputMaybe<Scalars['BigInt']>;
    collateralAmount_not?: InputMaybe<Scalars['BigInt']>;
    collateralAmount_gt?: InputMaybe<Scalars['BigInt']>;
    collateralAmount_lt?: InputMaybe<Scalars['BigInt']>;
    collateralAmount_gte?: InputMaybe<Scalars['BigInt']>;
    collateralAmount_lte?: InputMaybe<Scalars['BigInt']>;
    collateralAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    collateralAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseAmount?: InputMaybe<Scalars['BigInt']>;
    baseAmount_not?: InputMaybe<Scalars['BigInt']>;
    baseAmount_gt?: InputMaybe<Scalars['BigInt']>;
    baseAmount_lt?: InputMaybe<Scalars['BigInt']>;
    baseAmount_gte?: InputMaybe<Scalars['BigInt']>;
    baseAmount_lte?: InputMaybe<Scalars['BigInt']>;
    baseAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    collateralAmountUsd?: InputMaybe<Scalars['BigDecimal']>;
    collateralAmountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    collateralAmountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    collateralAmountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    collateralAmountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    collateralAmountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    collateralAmountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralAmountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    baseAmountUsd?: InputMaybe<Scalars['BigDecimal']>;
    baseAmountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    baseAmountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    baseAmountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    baseAmountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    baseAmountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    baseAmountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    baseAmountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type BuyCollateralInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'market'
    | 'buyer'
    | 'asset'
    | 'collateralAmount'
    | 'baseAmount'
    | 'collateralAmountUsd'
    | 'baseAmountUsd';

  export type ClaimRewardsInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Account claiming the reward */
    account: Account;
    /** Destination of the reward */
    destination: Scalars['Bytes'];
    /** Reward token */
    token: Token;
    /** Amount of reward token */
    amount: Scalars['BigInt'];
    /** Amount of reward token in USD */
    amountUsd: Scalars['BigDecimal'];
  };

  export type ClaimRewardsInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    account?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_?: InputMaybe<Account_filter>;
    destination?: InputMaybe<Scalars['Bytes']>;
    destination_not?: InputMaybe<Scalars['Bytes']>;
    destination_in?: InputMaybe<Array<Scalars['Bytes']>>;
    destination_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    destination_contains?: InputMaybe<Scalars['Bytes']>;
    destination_not_contains?: InputMaybe<Scalars['Bytes']>;
    token?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_?: InputMaybe<Token_filter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUsd?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type ClaimRewardsInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'account'
    | 'destination'
    | 'token'
    | 'amount'
    | 'amountUsd';

  export type CollateralBalance = {
    id: Scalars['Bytes'];
    creationBlockNumber: Scalars['BigInt'];
    collateralToken: CollateralToken;
    lastUpdateBlockNumber: Scalars['BigInt'];
    balance: Scalars['BigInt'];
  };

  export type CollateralBalance_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    creationBlockNumber?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    creationBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    collateralToken?: InputMaybe<Scalars['String']>;
    collateralToken_not?: InputMaybe<Scalars['String']>;
    collateralToken_gt?: InputMaybe<Scalars['String']>;
    collateralToken_lt?: InputMaybe<Scalars['String']>;
    collateralToken_gte?: InputMaybe<Scalars['String']>;
    collateralToken_lte?: InputMaybe<Scalars['String']>;
    collateralToken_in?: InputMaybe<Array<Scalars['String']>>;
    collateralToken_not_in?: InputMaybe<Array<Scalars['String']>>;
    collateralToken_contains?: InputMaybe<Scalars['String']>;
    collateralToken_contains_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_not_contains?: InputMaybe<Scalars['String']>;
    collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_starts_with?: InputMaybe<Scalars['String']>;
    collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_not_starts_with?: InputMaybe<Scalars['String']>;
    collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_ends_with?: InputMaybe<Scalars['String']>;
    collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_not_ends_with?: InputMaybe<Scalars['String']>;
    collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_?: InputMaybe<CollateralToken_filter>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balance?: InputMaybe<Scalars['BigInt']>;
    balance_not?: InputMaybe<Scalars['BigInt']>;
    balance_gt?: InputMaybe<Scalars['BigInt']>;
    balance_lt?: InputMaybe<Scalars['BigInt']>;
    balance_gte?: InputMaybe<Scalars['BigInt']>;
    balance_lte?: InputMaybe<Scalars['BigInt']>;
    balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type CollateralBalance_orderBy =
    | 'id'
    | 'creationBlockNumber'
    | 'collateralToken'
    | 'lastUpdateBlockNumber'
    | 'balance';

  export type CollateralToken = {
    /** Market ID + token ID + 'Col' */
    id: Scalars['Bytes'];
    /** Block the collateral token was created */
    creationBlockNumber: Scalars['BigInt'];
    /** Market the collateral token belongs to */
    market: Market;
    /** Actual token */
    token: Token;
    /** Last block the collateral token config was updated */
    lastConfigUpdateBlockNumber: Scalars['BigInt'];
    /** Price feed for the collateral token */
    priceFeed: Scalars['Bytes'];
    /** Percent of collateral that can be borrowed against */
    borrowCollateralFactor: Scalars['BigDecimal'];
    /** Percent of collateral that can be borrowed before the account becomes liquidate-able */
    liquidateCollateralFactor: Scalars['BigDecimal'];
    /** Percent penalty incurred by the account upon liquidation, 0.93 => 7% penalty */
    liquidationFactor: Scalars['BigDecimal'];
    /** Max amount that can be supplied to protect the protocol against over exposure */
    supplyCap: Scalars['BigInt'];
    /** Last token price in USD from the priceFeed */
    lastPriceUsd: Scalars['BigDecimal'];
    /** Block of the last token price */
    lastPriceBlockNumber: Scalars['BigInt'];
  };

  export type CollateralToken_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    creationBlockNumber?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    creationBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    token?: InputMaybe<Scalars['String']>;
    token_not?: InputMaybe<Scalars['String']>;
    token_gt?: InputMaybe<Scalars['String']>;
    token_lt?: InputMaybe<Scalars['String']>;
    token_gte?: InputMaybe<Scalars['String']>;
    token_lte?: InputMaybe<Scalars['String']>;
    token_in?: InputMaybe<Array<Scalars['String']>>;
    token_not_in?: InputMaybe<Array<Scalars['String']>>;
    token_contains?: InputMaybe<Scalars['String']>;
    token_contains_nocase?: InputMaybe<Scalars['String']>;
    token_not_contains?: InputMaybe<Scalars['String']>;
    token_not_contains_nocase?: InputMaybe<Scalars['String']>;
    token_starts_with?: InputMaybe<Scalars['String']>;
    token_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_starts_with?: InputMaybe<Scalars['String']>;
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    token_ends_with?: InputMaybe<Scalars['String']>;
    token_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_not_ends_with?: InputMaybe<Scalars['String']>;
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    token_?: InputMaybe<Token_filter>;
    lastConfigUpdateBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastConfigUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastConfigUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    priceFeed?: InputMaybe<Scalars['Bytes']>;
    priceFeed_not?: InputMaybe<Scalars['Bytes']>;
    priceFeed_in?: InputMaybe<Array<Scalars['Bytes']>>;
    priceFeed_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    priceFeed_contains?: InputMaybe<Scalars['Bytes']>;
    priceFeed_not_contains?: InputMaybe<Scalars['Bytes']>;
    borrowCollateralFactor?: InputMaybe<Scalars['BigDecimal']>;
    borrowCollateralFactor_not?: InputMaybe<Scalars['BigDecimal']>;
    borrowCollateralFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
    borrowCollateralFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
    borrowCollateralFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
    borrowCollateralFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
    borrowCollateralFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrowCollateralFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidateCollateralFactor?: InputMaybe<Scalars['BigDecimal']>;
    liquidateCollateralFactor_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidateCollateralFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidateCollateralFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidateCollateralFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidateCollateralFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidateCollateralFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidateCollateralFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidationFactor?: InputMaybe<Scalars['BigDecimal']>;
    liquidationFactor_not?: InputMaybe<Scalars['BigDecimal']>;
    liquidationFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
    liquidationFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
    liquidationFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
    liquidationFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
    liquidationFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    liquidationFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    supplyCap?: InputMaybe<Scalars['BigInt']>;
    supplyCap_not?: InputMaybe<Scalars['BigInt']>;
    supplyCap_gt?: InputMaybe<Scalars['BigInt']>;
    supplyCap_lt?: InputMaybe<Scalars['BigInt']>;
    supplyCap_gte?: InputMaybe<Scalars['BigInt']>;
    supplyCap_lte?: InputMaybe<Scalars['BigInt']>;
    supplyCap_in?: InputMaybe<Array<Scalars['BigInt']>>;
    supplyCap_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastPriceUsd?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastPriceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type CollateralToken_orderBy =
    | 'id'
    | 'creationBlockNumber'
    | 'market'
    | 'token'
    | 'lastConfigUpdateBlockNumber'
    | 'priceFeed'
    | 'borrowCollateralFactor'
    | 'liquidateCollateralFactor'
    | 'liquidationFactor'
    | 'supplyCap'
    | 'lastPriceUsd'
    | 'lastPriceBlockNumber';

  export type DailyMarketAccounting = {
    /** Market ID + day */
    id: Scalars['Bytes'];
    /** Days since unix epoch */
    day: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Market the accounting is for */
    market: Market;
    /** Accounting snapshot */
    accounting: MarketAccounting;
  };

  export type DailyMarketAccounting_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    day?: InputMaybe<Scalars['BigInt']>;
    day_not?: InputMaybe<Scalars['BigInt']>;
    day_gt?: InputMaybe<Scalars['BigInt']>;
    day_lt?: InputMaybe<Scalars['BigInt']>;
    day_gte?: InputMaybe<Scalars['BigInt']>;
    day_lte?: InputMaybe<Scalars['BigInt']>;
    day_in?: InputMaybe<Array<Scalars['BigInt']>>;
    day_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<MarketAccounting_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type DailyMarketAccounting_orderBy =
    | 'id'
    | 'day'
    | 'timestamp'
    | 'market'
    | 'accounting';

  export type DailyProtocolAccounting = {
    /** Day */
    id: Scalars['Bytes'];
    /** Days since unix epoch */
    day: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Protocol the accounting is for */
    protocol: Protocol;
    /** Accounting snapshot */
    accounting: ProtocolAccounting;
  };

  export type DailyProtocolAccounting_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    day?: InputMaybe<Scalars['BigInt']>;
    day_not?: InputMaybe<Scalars['BigInt']>;
    day_gt?: InputMaybe<Scalars['BigInt']>;
    day_lt?: InputMaybe<Scalars['BigInt']>;
    day_gte?: InputMaybe<Scalars['BigInt']>;
    day_lte?: InputMaybe<Scalars['BigInt']>;
    day_in?: InputMaybe<Array<Scalars['BigInt']>>;
    day_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Protocol_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<ProtocolAccounting_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type DailyProtocolAccounting_orderBy =
    | 'id'
    | 'day'
    | 'timestamp'
    | 'protocol'
    | 'accounting';

  export type HourlyMarketAccounting = {
    /** Market ID + hour */
    id: Scalars['Bytes'];
    /** Hours since unix epoch */
    hour: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Market the accounting if for */
    market: Market;
    /** Accounting snapshot */
    accounting: MarketAccounting;
  };

  export type HourlyMarketAccounting_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hour?: InputMaybe<Scalars['BigInt']>;
    hour_not?: InputMaybe<Scalars['BigInt']>;
    hour_gt?: InputMaybe<Scalars['BigInt']>;
    hour_lt?: InputMaybe<Scalars['BigInt']>;
    hour_gte?: InputMaybe<Scalars['BigInt']>;
    hour_lte?: InputMaybe<Scalars['BigInt']>;
    hour_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hour_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<MarketAccounting_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type HourlyMarketAccounting_orderBy =
    | 'id'
    | 'hour'
    | 'timestamp'
    | 'market'
    | 'accounting';

  export type HourlyProtocolAccounting = {
    /** Hour */
    id: Scalars['Bytes'];
    /** Hours since unix epoch */
    hour: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Protocol the accounting is for */
    protocol: Protocol;
    /** Accounting snapshot */
    accounting: ProtocolAccounting;
  };

  export type HourlyProtocolAccounting_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hour?: InputMaybe<Scalars['BigInt']>;
    hour_not?: InputMaybe<Scalars['BigInt']>;
    hour_gt?: InputMaybe<Scalars['BigInt']>;
    hour_lt?: InputMaybe<Scalars['BigInt']>;
    hour_gte?: InputMaybe<Scalars['BigInt']>;
    hour_lte?: InputMaybe<Scalars['BigInt']>;
    hour_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hour_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Protocol_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<ProtocolAccounting_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type HourlyProtocolAccounting_orderBy =
    | 'id'
    | 'hour'
    | 'timestamp'
    | 'protocol'
    | 'accounting';

  export type Market = {
    /** Comet proxy address */
    id: Scalars['Bytes'];
    /** Comet proxy address */
    cometProxy: Scalars['Bytes'];
    /** Protocol this market is part of */
    protocol: Protocol;
    /** Block number the market was created */
    creationBlockNumber: Scalars['BigInt'];
    /** Current configuration of this market */
    configuration: MarketConfiguration;
    /** Current accounting of this market */
    accounting: MarketAccounting;
    /** Current cumulative usage of this market */
    cumulativeUsage: Usage;
    /** Current collateral balances of this market */
    collateralBalances: Array<MarketCollateralBalance>;
    /** Current positions in this market */
    positions: Array<Position>;
    /** All interactions where the base asset was supplied to this market, including those repaying loans */
    supplyBaseInteractions: Array<SupplyBaseInteraction>;
    /** All interactions where the base asset was withdraw from this market, including those taking loans */
    withdrawBaseInteractions: Array<WithdrawBaseInteraction>;
    /** All interactions where a position was liquidated in this market */
    absorbDebtInteractions: Array<AbsorbDebtInteraction>;
    /** All interactions where a collateral asset was supplied to this market */
    supplyCollateralInteractions: Array<SupplyCollateralInteraction>;
    /** All interactions where a collateral asset was withdrawn from this market */
    withdrawCollateralInteractions: Array<WithdrawCollateralInteraction>;
    /** All interactions where a collateral asset was transferred in this market */
    transferCollateralInteractions: Array<TransferCollateralInteraction>;
    /** All interactions where a collateral asset was absorbed by the market during a liquidation */
    absorbCollateralInteractions: Array<AbsorbCollateralInteraction>;
    /** All interactions where a collateral asset was bought using base assets in this market */
    buyCollateralInteractions: Array<BuyCollateralInteraction>;
    /** All interactions where reserves were withdrawn from this market */
    withdrawReservesInteractions: Array<WithdrawReservesInteraction>;
    /** Historical snapshots of hourly market usage */
    hourlyUsage: Array<MarketHourlyUsage>;
    /** Historical snapshots of daily market usage */
    dailyUsage: Array<MarketDailyUsage>;
    /** Historical snapshots of market configuration changes, these only get taken on a config change (not periodically) */
    configurationSnapshots: Array<MarketConfigurationSnapshot>;
    /** Historical snapshots of hourly market accounting */
    hourlyMarketAccounting: Array<HourlyMarketAccounting>;
    /** Historical snapshots of daily market accounting */
    dailyMarketAccounting: Array<DailyMarketAccounting>;
    /** Historical snapshots of weekly market accounting */
    weeklyMarketAccounting: Array<WeeklyMarketAccounting>;
  };

  export type MarketcollateralBalancesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketCollateralBalance_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketCollateralBalance_filter>;
  };

  export type MarketpositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
  };

  export type MarketsupplyBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyBaseInteraction_filter>;
  };

  export type MarketwithdrawBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawBaseInteraction_filter>;
  };

  export type MarketabsorbDebtInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbDebtInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbDebtInteraction_filter>;
  };

  export type MarketsupplyCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyCollateralInteraction_filter>;
  };

  export type MarketwithdrawCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawCollateralInteraction_filter>;
  };

  export type MarkettransferCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TransferCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TransferCollateralInteraction_filter>;
  };

  export type MarketabsorbCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbCollateralInteraction_filter>;
  };

  export type MarketbuyCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<BuyCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<BuyCollateralInteraction_filter>;
  };

  export type MarketwithdrawReservesInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawReservesInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawReservesInteraction_filter>;
  };

  export type MarkethourlyUsageArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketHourlyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketHourlyUsage_filter>;
  };

  export type MarketdailyUsageArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketDailyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketDailyUsage_filter>;
  };

  export type MarketconfigurationSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketConfigurationSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketConfigurationSnapshot_filter>;
  };

  export type MarkethourlyMarketAccountingArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<HourlyMarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<HourlyMarketAccounting_filter>;
  };

  export type MarketdailyMarketAccountingArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DailyMarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DailyMarketAccounting_filter>;
  };

  export type MarketweeklyMarketAccountingArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WeeklyMarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WeeklyMarketAccounting_filter>;
  };

  export type MarketAccounting = {
    /** Market ID + hour number for snapshots */
    id: Scalars['Bytes'];
    /** Market the accounting is for */
    market: Market;
    /** Last block the accounting was updated */
    lastAccountingUpdatedBlockNumber: Scalars['BigInt'];
    /** Base supply index, this tracks protocol supply interest and monotonically increases */
    baseSupplyIndex: Scalars['BigInt'];
    /** Base supply index, this tracks protocol borrow borrow and monotonically increases */
    baseBorrowIndex: Scalars['BigInt'];
    /** Tracking supply index for supply rewards */
    trackingSupplyIndex: Scalars['BigInt'];
    /** Tracking borrow index for borrow rewards */
    trackingBorrowIndex: Scalars['BigInt'];
    /** Last time the market accrued interest (i.e indices changed) */
    lastAccrualTime: Scalars['BigInt'];
    /** Total base principal supplied to the market, this can be used to construct the most accurate totalSupply in the case where indices changes haven't been picked up by the subgraph (can accrue without an event) */
    totalBasePrincipalSupply: Scalars['BigInt'];
    /** Total base principal borrowed from the market, this can be used to construct the most accurate totalBorrow in the case where indices changes haven't been picked up by the subgraph (can accrue without an event) */
    totalBasePrincipalBorrow: Scalars['BigInt'];
    /** Base asset reserve balance */
    baseReserveBalance: Scalars['BigInt'];
    /** Total amount of base supplied to the market (present value) */
    totalBaseSupply: Scalars['BigInt'];
    /** Total amount of base borrowed from the market (present value) */
    totalBaseBorrow: Scalars['BigInt'];
    /** Total amount of base supplied to the market in USD */
    totalBaseSupplyUsd: Scalars['BigDecimal'];
    /** Total amount of base borrowed from the market in USD */
    totalBaseBorrowUsd: Scalars['BigDecimal'];
    /** Base asset reserve balance of te market in USD */
    baseReserveBalanceUsd: Scalars['BigDecimal'];
    /** Total collateral balance in USD */
    collateralBalanceUsd: Scalars['BigDecimal'];
    /** Total collateral reserve balance in USD */
    collateralReservesBalanceUsd: Scalars['BigDecimal'];
    /** Total reserve balance in USD (collateral + base) */
    totalReserveBalanceUsd: Scalars['BigDecimal'];
    /** Utilization percent of the market (totalBaseBorrowUsd / totalBaseSupplyUsd) */
    utilization: Scalars['BigDecimal'];
    /** Collateralization percent of the protocol (totalBaseSupplyUsd / totalBaseBorrowUsd, or 1 / utilization) */
    collateralization: Scalars['BigDecimal'];
    /** Base supply APR of the market */
    supplyApr: Scalars['BigDecimal'];
    /** Base borrow APR of the market */
    borrowApr: Scalars['BigDecimal'];
    /** Reward supply APR of the market */
    rewardSupplyApr: Scalars['BigDecimal'];
    /** Reward borrow APR of the market */
    rewardBorrowApr: Scalars['BigDecimal'];
    /** Net supply APR of the market (supplyApr + rewardSupplyApr) */
    netSupplyApr: Scalars['BigDecimal'];
    /** Net borrow APR of the market (borrowApr - rewardBorrowApr) */
    netBorrowApr: Scalars['BigDecimal'];
  };

  export type MarketAccounting_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    lastAccountingUpdatedBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastAccountingUpdatedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastAccountingUpdatedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastAccountingUpdatedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastAccountingUpdatedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastAccountingUpdatedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastAccountingUpdatedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastAccountingUpdatedBlockNumber_not_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    baseSupplyIndex?: InputMaybe<Scalars['BigInt']>;
    baseSupplyIndex_not?: InputMaybe<Scalars['BigInt']>;
    baseSupplyIndex_gt?: InputMaybe<Scalars['BigInt']>;
    baseSupplyIndex_lt?: InputMaybe<Scalars['BigInt']>;
    baseSupplyIndex_gte?: InputMaybe<Scalars['BigInt']>;
    baseSupplyIndex_lte?: InputMaybe<Scalars['BigInt']>;
    baseSupplyIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseSupplyIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseBorrowIndex?: InputMaybe<Scalars['BigInt']>;
    baseBorrowIndex_not?: InputMaybe<Scalars['BigInt']>;
    baseBorrowIndex_gt?: InputMaybe<Scalars['BigInt']>;
    baseBorrowIndex_lt?: InputMaybe<Scalars['BigInt']>;
    baseBorrowIndex_gte?: InputMaybe<Scalars['BigInt']>;
    baseBorrowIndex_lte?: InputMaybe<Scalars['BigInt']>;
    baseBorrowIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseBorrowIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    trackingSupplyIndex?: InputMaybe<Scalars['BigInt']>;
    trackingSupplyIndex_not?: InputMaybe<Scalars['BigInt']>;
    trackingSupplyIndex_gt?: InputMaybe<Scalars['BigInt']>;
    trackingSupplyIndex_lt?: InputMaybe<Scalars['BigInt']>;
    trackingSupplyIndex_gte?: InputMaybe<Scalars['BigInt']>;
    trackingSupplyIndex_lte?: InputMaybe<Scalars['BigInt']>;
    trackingSupplyIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    trackingSupplyIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    trackingBorrowIndex?: InputMaybe<Scalars['BigInt']>;
    trackingBorrowIndex_not?: InputMaybe<Scalars['BigInt']>;
    trackingBorrowIndex_gt?: InputMaybe<Scalars['BigInt']>;
    trackingBorrowIndex_lt?: InputMaybe<Scalars['BigInt']>;
    trackingBorrowIndex_gte?: InputMaybe<Scalars['BigInt']>;
    trackingBorrowIndex_lte?: InputMaybe<Scalars['BigInt']>;
    trackingBorrowIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    trackingBorrowIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastAccrualTime?: InputMaybe<Scalars['BigInt']>;
    lastAccrualTime_not?: InputMaybe<Scalars['BigInt']>;
    lastAccrualTime_gt?: InputMaybe<Scalars['BigInt']>;
    lastAccrualTime_lt?: InputMaybe<Scalars['BigInt']>;
    lastAccrualTime_gte?: InputMaybe<Scalars['BigInt']>;
    lastAccrualTime_lte?: InputMaybe<Scalars['BigInt']>;
    lastAccrualTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastAccrualTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBasePrincipalSupply?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalSupply_not?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalSupply_gt?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalSupply_lt?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalSupply_gte?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalSupply_lte?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBasePrincipalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBasePrincipalBorrow?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalBorrow_not?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalBorrow_gt?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalBorrow_lt?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalBorrow_gte?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalBorrow_lte?: InputMaybe<Scalars['BigInt']>;
    totalBasePrincipalBorrow_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBasePrincipalBorrow_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseReserveBalance?: InputMaybe<Scalars['BigInt']>;
    baseReserveBalance_not?: InputMaybe<Scalars['BigInt']>;
    baseReserveBalance_gt?: InputMaybe<Scalars['BigInt']>;
    baseReserveBalance_lt?: InputMaybe<Scalars['BigInt']>;
    baseReserveBalance_gte?: InputMaybe<Scalars['BigInt']>;
    baseReserveBalance_lte?: InputMaybe<Scalars['BigInt']>;
    baseReserveBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseReserveBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBaseSupply?: InputMaybe<Scalars['BigInt']>;
    totalBaseSupply_not?: InputMaybe<Scalars['BigInt']>;
    totalBaseSupply_gt?: InputMaybe<Scalars['BigInt']>;
    totalBaseSupply_lt?: InputMaybe<Scalars['BigInt']>;
    totalBaseSupply_gte?: InputMaybe<Scalars['BigInt']>;
    totalBaseSupply_lte?: InputMaybe<Scalars['BigInt']>;
    totalBaseSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBaseSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBaseBorrow?: InputMaybe<Scalars['BigInt']>;
    totalBaseBorrow_not?: InputMaybe<Scalars['BigInt']>;
    totalBaseBorrow_gt?: InputMaybe<Scalars['BigInt']>;
    totalBaseBorrow_lt?: InputMaybe<Scalars['BigInt']>;
    totalBaseBorrow_gte?: InputMaybe<Scalars['BigInt']>;
    totalBaseBorrow_lte?: InputMaybe<Scalars['BigInt']>;
    totalBaseBorrow_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBaseBorrow_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalBaseSupplyUsd?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseSupplyUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseSupplyUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseSupplyUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseSupplyUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseSupplyUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseSupplyUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalBaseSupplyUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalBaseBorrowUsd?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseBorrowUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseBorrowUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseBorrowUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseBorrowUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseBorrowUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalBaseBorrowUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalBaseBorrowUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    baseReserveBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    baseReserveBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    baseReserveBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    baseReserveBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    baseReserveBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    baseReserveBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    baseReserveBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    baseReserveBalanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralBalanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralReservesBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralReservesBalanceUsd_not_in?: InputMaybe<
      Array<Scalars['BigDecimal']>
    >;
    totalReserveBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalReserveBalanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    utilization?: InputMaybe<Scalars['BigDecimal']>;
    utilization_not?: InputMaybe<Scalars['BigDecimal']>;
    utilization_gt?: InputMaybe<Scalars['BigDecimal']>;
    utilization_lt?: InputMaybe<Scalars['BigDecimal']>;
    utilization_gte?: InputMaybe<Scalars['BigDecimal']>;
    utilization_lte?: InputMaybe<Scalars['BigDecimal']>;
    utilization_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    utilization_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralization?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_not?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_gt?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_lt?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_gte?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_lte?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralization_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    supplyApr?: InputMaybe<Scalars['BigDecimal']>;
    supplyApr_not?: InputMaybe<Scalars['BigDecimal']>;
    supplyApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    supplyApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    supplyApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    supplyApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    supplyApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    supplyApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrowApr?: InputMaybe<Scalars['BigDecimal']>;
    borrowApr_not?: InputMaybe<Scalars['BigDecimal']>;
    borrowApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    borrowApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    borrowApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    borrowApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    borrowApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrowApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardSupplyApr?: InputMaybe<Scalars['BigDecimal']>;
    rewardSupplyApr_not?: InputMaybe<Scalars['BigDecimal']>;
    rewardSupplyApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    rewardSupplyApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    rewardSupplyApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    rewardSupplyApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    rewardSupplyApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardSupplyApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardBorrowApr?: InputMaybe<Scalars['BigDecimal']>;
    rewardBorrowApr_not?: InputMaybe<Scalars['BigDecimal']>;
    rewardBorrowApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    rewardBorrowApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    rewardBorrowApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    rewardBorrowApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    rewardBorrowApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardBorrowApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    netSupplyApr?: InputMaybe<Scalars['BigDecimal']>;
    netSupplyApr_not?: InputMaybe<Scalars['BigDecimal']>;
    netSupplyApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    netSupplyApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    netSupplyApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    netSupplyApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    netSupplyApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    netSupplyApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    netBorrowApr?: InputMaybe<Scalars['BigDecimal']>;
    netBorrowApr_not?: InputMaybe<Scalars['BigDecimal']>;
    netBorrowApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    netBorrowApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    netBorrowApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    netBorrowApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    netBorrowApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    netBorrowApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type MarketAccounting_orderBy =
    | 'id'
    | 'market'
    | 'lastAccountingUpdatedBlockNumber'
    | 'baseSupplyIndex'
    | 'baseBorrowIndex'
    | 'trackingSupplyIndex'
    | 'trackingBorrowIndex'
    | 'lastAccrualTime'
    | 'totalBasePrincipalSupply'
    | 'totalBasePrincipalBorrow'
    | 'baseReserveBalance'
    | 'totalBaseSupply'
    | 'totalBaseBorrow'
    | 'totalBaseSupplyUsd'
    | 'totalBaseBorrowUsd'
    | 'baseReserveBalanceUsd'
    | 'collateralBalanceUsd'
    | 'collateralReservesBalanceUsd'
    | 'totalReserveBalanceUsd'
    | 'utilization'
    | 'collateralization'
    | 'supplyApr'
    | 'borrowApr'
    | 'rewardSupplyApr'
    | 'rewardBorrowApr'
    | 'netSupplyApr'
    | 'netBorrowApr';

  export type MarketCollateralBalance = CollateralBalance & {
    /** Collateral token ID + 'BAL' */
    id: Scalars['Bytes'];
    /** Block number when this balance was created */
    creationBlockNumber: Scalars['BigInt'];
    /** Collateral token the balance is for */
    collateralToken: CollateralToken;
    /** Market balance is for */
    market: Market;
    /** Last block number the balances and reserves were updated */
    lastUpdateBlockNumber: Scalars['BigInt'];
    /** Balance of collateralToken */
    balance: Scalars['BigInt'];
    /** Reserves of the collateral token */
    reserves: Scalars['BigInt'];
    /** Balance in USD of the collateral token */
    balanceUsd: Scalars['BigDecimal'];
    /** Reserves in USD of the collateral token */
    reservesUsd: Scalars['BigDecimal'];
  };

  export type MarketCollateralBalance_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    creationBlockNumber?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    creationBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    collateralToken?: InputMaybe<Scalars['String']>;
    collateralToken_not?: InputMaybe<Scalars['String']>;
    collateralToken_gt?: InputMaybe<Scalars['String']>;
    collateralToken_lt?: InputMaybe<Scalars['String']>;
    collateralToken_gte?: InputMaybe<Scalars['String']>;
    collateralToken_lte?: InputMaybe<Scalars['String']>;
    collateralToken_in?: InputMaybe<Array<Scalars['String']>>;
    collateralToken_not_in?: InputMaybe<Array<Scalars['String']>>;
    collateralToken_contains?: InputMaybe<Scalars['String']>;
    collateralToken_contains_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_not_contains?: InputMaybe<Scalars['String']>;
    collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_starts_with?: InputMaybe<Scalars['String']>;
    collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_not_starts_with?: InputMaybe<Scalars['String']>;
    collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_ends_with?: InputMaybe<Scalars['String']>;
    collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_not_ends_with?: InputMaybe<Scalars['String']>;
    collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_?: InputMaybe<CollateralToken_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balance?: InputMaybe<Scalars['BigInt']>;
    balance_not?: InputMaybe<Scalars['BigInt']>;
    balance_gt?: InputMaybe<Scalars['BigInt']>;
    balance_lt?: InputMaybe<Scalars['BigInt']>;
    balance_gte?: InputMaybe<Scalars['BigInt']>;
    balance_lte?: InputMaybe<Scalars['BigInt']>;
    balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    reserves?: InputMaybe<Scalars['BigInt']>;
    reserves_not?: InputMaybe<Scalars['BigInt']>;
    reserves_gt?: InputMaybe<Scalars['BigInt']>;
    reserves_lt?: InputMaybe<Scalars['BigInt']>;
    reserves_gte?: InputMaybe<Scalars['BigInt']>;
    reserves_lte?: InputMaybe<Scalars['BigInt']>;
    reserves_in?: InputMaybe<Array<Scalars['BigInt']>>;
    reserves_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    balanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reservesUsd?: InputMaybe<Scalars['BigDecimal']>;
    reservesUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    reservesUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    reservesUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    reservesUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    reservesUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    reservesUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reservesUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type MarketCollateralBalance_orderBy =
    | 'id'
    | 'creationBlockNumber'
    | 'collateralToken'
    | 'market'
    | 'lastUpdateBlockNumber'
    | 'balance'
    | 'reserves'
    | 'balanceUsd'
    | 'reservesUsd';

  export type MarketConfiguration = {
    /** Market proxy address or block number + log index for snapshots */
    id: Scalars['Bytes'];
    /** Market to configuration is for */
    market: Market;
    /** Comet implementation that the market proxy points to */
    cometImplementation?: Maybe<Scalars['Bytes']>;
    /** Last block that this configuration was updated */
    lastConfigurationUpdateBlockNumber: Scalars['BigInt'];
    /** Name of the market */
    name: Scalars['String'];
    /** Symbol for the ERC20 that market represents */
    symbol: Scalars['String'];
    /** Factory contract address for the market */
    factory: Scalars['Bytes'];
    /** Governor of the market */
    governor: Scalars['Bytes'];
    /** Pause guardian for the market */
    pauseGuardian: Scalars['Bytes'];
    /** Comet extension delegate for the market */
    extensionDelegate: Scalars['Bytes'];
    /** Supply rate model utilization kink in percent */
    supplyKink: Scalars['BigDecimal'];
    /** Slope of the supply rate model when the utilization is below the supply kink */
    supplyPerSecondInterestRateSlopeLow: Scalars['BigInt'];
    /** Slope of the supply rate model when the utilization is above the supply kink */
    supplyPerSecondInterestRateSlopeHigh: Scalars['BigInt'];
    /** Base for the supply rate model */
    supplyPerSecondInterestRateBase: Scalars['BigInt'];
    /** Borrow rate model utilization kink in percent */
    borrowKink: Scalars['BigDecimal'];
    /** Slope of the borrow rate model when the utilization is below the borrow kink */
    borrowPerSecondInterestRateSlopeLow: Scalars['BigInt'];
    /** Slope of the borrow rate model when the utilization is above the borrow kink */
    borrowPerSecondInterestRateSlopeHigh: Scalars['BigInt'];
    /** Base for the borrow rate model */
    borrowPerSecondInterestRateBase: Scalars['BigInt'];
    /** Store front factor used to compute the discount factor for liquidations */
    storeFrontPriceFactor: Scalars['BigInt'];
    /** Tracking index scale */
    trackingIndexScale: Scalars['BigInt'];
    /** Base tracking supply speed for rewards */
    baseTrackingSupplySpeed: Scalars['BigInt'];
    /** Base tracking borrow speed for rewards */
    baseTrackingBorrowSpeed: Scalars['BigInt'];
    /** Minimum base asset in market before rewards will accrue */
    baseMinForRewards: Scalars['BigInt'];
    /** Smallest amount of base that can be borrowed */
    baseBorrowMin: Scalars['BigInt'];
    /** Target base reserves for the market, when reserve drop below collateral reserves become for sale to bring base reserves above this */
    targetReserves: Scalars['BigInt'];
    /** Base tokens for the market */
    baseToken: BaseToken;
    /** List of collateral tokens for the market */
    collateralTokens: Array<CollateralToken>;
  };

  export type MarketConfigurationcollateralTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<CollateralToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<CollateralToken_filter>;
  };

  export type MarketConfigurationSnapshot = {
    /** Block number + log index. Note config snapshots are only taken when config changes, not periodically */
    id: Scalars['Bytes'];
    /** Timestamp in seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Market the config is for */
    market: Market;
    /** Configuration snapshot */
    configuration: MarketConfiguration;
  };

  export type MarketConfigurationSnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    configuration?: InputMaybe<Scalars['String']>;
    configuration_not?: InputMaybe<Scalars['String']>;
    configuration_gt?: InputMaybe<Scalars['String']>;
    configuration_lt?: InputMaybe<Scalars['String']>;
    configuration_gte?: InputMaybe<Scalars['String']>;
    configuration_lte?: InputMaybe<Scalars['String']>;
    configuration_in?: InputMaybe<Array<Scalars['String']>>;
    configuration_not_in?: InputMaybe<Array<Scalars['String']>>;
    configuration_contains?: InputMaybe<Scalars['String']>;
    configuration_contains_nocase?: InputMaybe<Scalars['String']>;
    configuration_not_contains?: InputMaybe<Scalars['String']>;
    configuration_not_contains_nocase?: InputMaybe<Scalars['String']>;
    configuration_starts_with?: InputMaybe<Scalars['String']>;
    configuration_starts_with_nocase?: InputMaybe<Scalars['String']>;
    configuration_not_starts_with?: InputMaybe<Scalars['String']>;
    configuration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    configuration_ends_with?: InputMaybe<Scalars['String']>;
    configuration_ends_with_nocase?: InputMaybe<Scalars['String']>;
    configuration_not_ends_with?: InputMaybe<Scalars['String']>;
    configuration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    configuration_?: InputMaybe<MarketConfiguration_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type MarketConfigurationSnapshot_orderBy =
    | 'id'
    | 'timestamp'
    | 'market'
    | 'configuration';

  export type MarketConfiguration_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    cometImplementation?: InputMaybe<Scalars['Bytes']>;
    cometImplementation_not?: InputMaybe<Scalars['Bytes']>;
    cometImplementation_in?: InputMaybe<Array<Scalars['Bytes']>>;
    cometImplementation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    cometImplementation_contains?: InputMaybe<Scalars['Bytes']>;
    cometImplementation_not_contains?: InputMaybe<Scalars['Bytes']>;
    lastConfigurationUpdateBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastConfigurationUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastConfigurationUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastConfigurationUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastConfigurationUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastConfigurationUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastConfigurationUpdateBlockNumber_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    lastConfigurationUpdateBlockNumber_not_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    name?: InputMaybe<Scalars['String']>;
    name_not?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<Scalars['String']>>;
    name_not_in?: InputMaybe<Array<Scalars['String']>>;
    name_contains?: InputMaybe<Scalars['String']>;
    name_contains_nocase?: InputMaybe<Scalars['String']>;
    name_not_contains?: InputMaybe<Scalars['String']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']>;
    name_starts_with?: InputMaybe<Scalars['String']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_ends_with?: InputMaybe<Scalars['String']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol?: InputMaybe<Scalars['String']>;
    symbol_not?: InputMaybe<Scalars['String']>;
    symbol_gt?: InputMaybe<Scalars['String']>;
    symbol_lt?: InputMaybe<Scalars['String']>;
    symbol_gte?: InputMaybe<Scalars['String']>;
    symbol_lte?: InputMaybe<Scalars['String']>;
    symbol_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_contains?: InputMaybe<Scalars['String']>;
    symbol_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_contains?: InputMaybe<Scalars['String']>;
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_starts_with?: InputMaybe<Scalars['String']>;
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_ends_with?: InputMaybe<Scalars['String']>;
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    factory?: InputMaybe<Scalars['Bytes']>;
    factory_not?: InputMaybe<Scalars['Bytes']>;
    factory_in?: InputMaybe<Array<Scalars['Bytes']>>;
    factory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    factory_contains?: InputMaybe<Scalars['Bytes']>;
    factory_not_contains?: InputMaybe<Scalars['Bytes']>;
    governor?: InputMaybe<Scalars['Bytes']>;
    governor_not?: InputMaybe<Scalars['Bytes']>;
    governor_in?: InputMaybe<Array<Scalars['Bytes']>>;
    governor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    governor_contains?: InputMaybe<Scalars['Bytes']>;
    governor_not_contains?: InputMaybe<Scalars['Bytes']>;
    pauseGuardian?: InputMaybe<Scalars['Bytes']>;
    pauseGuardian_not?: InputMaybe<Scalars['Bytes']>;
    pauseGuardian_in?: InputMaybe<Array<Scalars['Bytes']>>;
    pauseGuardian_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    pauseGuardian_contains?: InputMaybe<Scalars['Bytes']>;
    pauseGuardian_not_contains?: InputMaybe<Scalars['Bytes']>;
    extensionDelegate?: InputMaybe<Scalars['Bytes']>;
    extensionDelegate_not?: InputMaybe<Scalars['Bytes']>;
    extensionDelegate_in?: InputMaybe<Array<Scalars['Bytes']>>;
    extensionDelegate_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    extensionDelegate_contains?: InputMaybe<Scalars['Bytes']>;
    extensionDelegate_not_contains?: InputMaybe<Scalars['Bytes']>;
    supplyKink?: InputMaybe<Scalars['BigDecimal']>;
    supplyKink_not?: InputMaybe<Scalars['BigDecimal']>;
    supplyKink_gt?: InputMaybe<Scalars['BigDecimal']>;
    supplyKink_lt?: InputMaybe<Scalars['BigDecimal']>;
    supplyKink_gte?: InputMaybe<Scalars['BigDecimal']>;
    supplyKink_lte?: InputMaybe<Scalars['BigDecimal']>;
    supplyKink_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    supplyKink_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    supplyPerSecondInterestRateSlopeLow?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeLow_not?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeLow_gt?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeLow_lt?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeLow_gte?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeLow_lte?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeLow_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    supplyPerSecondInterestRateSlopeLow_not_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    supplyPerSecondInterestRateSlopeHigh?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeHigh_not?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeHigh_gt?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeHigh_lt?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeHigh_gte?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeHigh_lte?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateSlopeHigh_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    supplyPerSecondInterestRateSlopeHigh_not_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    supplyPerSecondInterestRateBase?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateBase_not?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateBase_gt?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateBase_lt?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateBase_gte?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateBase_lte?: InputMaybe<Scalars['BigInt']>;
    supplyPerSecondInterestRateBase_in?: InputMaybe<Array<Scalars['BigInt']>>;
    supplyPerSecondInterestRateBase_not_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    borrowKink?: InputMaybe<Scalars['BigDecimal']>;
    borrowKink_not?: InputMaybe<Scalars['BigDecimal']>;
    borrowKink_gt?: InputMaybe<Scalars['BigDecimal']>;
    borrowKink_lt?: InputMaybe<Scalars['BigDecimal']>;
    borrowKink_gte?: InputMaybe<Scalars['BigDecimal']>;
    borrowKink_lte?: InputMaybe<Scalars['BigDecimal']>;
    borrowKink_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrowKink_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    borrowPerSecondInterestRateSlopeLow?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeLow_not?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeLow_gt?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeLow_lt?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeLow_gte?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeLow_lte?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeLow_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    borrowPerSecondInterestRateSlopeLow_not_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    borrowPerSecondInterestRateSlopeHigh?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeHigh_not?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeHigh_gt?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeHigh_lt?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeHigh_gte?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeHigh_lte?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateSlopeHigh_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    borrowPerSecondInterestRateSlopeHigh_not_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    borrowPerSecondInterestRateBase?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateBase_not?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateBase_gt?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateBase_lt?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateBase_gte?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateBase_lte?: InputMaybe<Scalars['BigInt']>;
    borrowPerSecondInterestRateBase_in?: InputMaybe<Array<Scalars['BigInt']>>;
    borrowPerSecondInterestRateBase_not_in?: InputMaybe<
      Array<Scalars['BigInt']>
    >;
    storeFrontPriceFactor?: InputMaybe<Scalars['BigInt']>;
    storeFrontPriceFactor_not?: InputMaybe<Scalars['BigInt']>;
    storeFrontPriceFactor_gt?: InputMaybe<Scalars['BigInt']>;
    storeFrontPriceFactor_lt?: InputMaybe<Scalars['BigInt']>;
    storeFrontPriceFactor_gte?: InputMaybe<Scalars['BigInt']>;
    storeFrontPriceFactor_lte?: InputMaybe<Scalars['BigInt']>;
    storeFrontPriceFactor_in?: InputMaybe<Array<Scalars['BigInt']>>;
    storeFrontPriceFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    trackingIndexScale?: InputMaybe<Scalars['BigInt']>;
    trackingIndexScale_not?: InputMaybe<Scalars['BigInt']>;
    trackingIndexScale_gt?: InputMaybe<Scalars['BigInt']>;
    trackingIndexScale_lt?: InputMaybe<Scalars['BigInt']>;
    trackingIndexScale_gte?: InputMaybe<Scalars['BigInt']>;
    trackingIndexScale_lte?: InputMaybe<Scalars['BigInt']>;
    trackingIndexScale_in?: InputMaybe<Array<Scalars['BigInt']>>;
    trackingIndexScale_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseTrackingSupplySpeed?: InputMaybe<Scalars['BigInt']>;
    baseTrackingSupplySpeed_not?: InputMaybe<Scalars['BigInt']>;
    baseTrackingSupplySpeed_gt?: InputMaybe<Scalars['BigInt']>;
    baseTrackingSupplySpeed_lt?: InputMaybe<Scalars['BigInt']>;
    baseTrackingSupplySpeed_gte?: InputMaybe<Scalars['BigInt']>;
    baseTrackingSupplySpeed_lte?: InputMaybe<Scalars['BigInt']>;
    baseTrackingSupplySpeed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseTrackingSupplySpeed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseTrackingBorrowSpeed?: InputMaybe<Scalars['BigInt']>;
    baseTrackingBorrowSpeed_not?: InputMaybe<Scalars['BigInt']>;
    baseTrackingBorrowSpeed_gt?: InputMaybe<Scalars['BigInt']>;
    baseTrackingBorrowSpeed_lt?: InputMaybe<Scalars['BigInt']>;
    baseTrackingBorrowSpeed_gte?: InputMaybe<Scalars['BigInt']>;
    baseTrackingBorrowSpeed_lte?: InputMaybe<Scalars['BigInt']>;
    baseTrackingBorrowSpeed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseTrackingBorrowSpeed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseMinForRewards?: InputMaybe<Scalars['BigInt']>;
    baseMinForRewards_not?: InputMaybe<Scalars['BigInt']>;
    baseMinForRewards_gt?: InputMaybe<Scalars['BigInt']>;
    baseMinForRewards_lt?: InputMaybe<Scalars['BigInt']>;
    baseMinForRewards_gte?: InputMaybe<Scalars['BigInt']>;
    baseMinForRewards_lte?: InputMaybe<Scalars['BigInt']>;
    baseMinForRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseMinForRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseBorrowMin?: InputMaybe<Scalars['BigInt']>;
    baseBorrowMin_not?: InputMaybe<Scalars['BigInt']>;
    baseBorrowMin_gt?: InputMaybe<Scalars['BigInt']>;
    baseBorrowMin_lt?: InputMaybe<Scalars['BigInt']>;
    baseBorrowMin_gte?: InputMaybe<Scalars['BigInt']>;
    baseBorrowMin_lte?: InputMaybe<Scalars['BigInt']>;
    baseBorrowMin_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseBorrowMin_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    targetReserves?: InputMaybe<Scalars['BigInt']>;
    targetReserves_not?: InputMaybe<Scalars['BigInt']>;
    targetReserves_gt?: InputMaybe<Scalars['BigInt']>;
    targetReserves_lt?: InputMaybe<Scalars['BigInt']>;
    targetReserves_gte?: InputMaybe<Scalars['BigInt']>;
    targetReserves_lte?: InputMaybe<Scalars['BigInt']>;
    targetReserves_in?: InputMaybe<Array<Scalars['BigInt']>>;
    targetReserves_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseToken?: InputMaybe<Scalars['String']>;
    baseToken_not?: InputMaybe<Scalars['String']>;
    baseToken_gt?: InputMaybe<Scalars['String']>;
    baseToken_lt?: InputMaybe<Scalars['String']>;
    baseToken_gte?: InputMaybe<Scalars['String']>;
    baseToken_lte?: InputMaybe<Scalars['String']>;
    baseToken_in?: InputMaybe<Array<Scalars['String']>>;
    baseToken_not_in?: InputMaybe<Array<Scalars['String']>>;
    baseToken_contains?: InputMaybe<Scalars['String']>;
    baseToken_contains_nocase?: InputMaybe<Scalars['String']>;
    baseToken_not_contains?: InputMaybe<Scalars['String']>;
    baseToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
    baseToken_starts_with?: InputMaybe<Scalars['String']>;
    baseToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
    baseToken_not_starts_with?: InputMaybe<Scalars['String']>;
    baseToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    baseToken_ends_with?: InputMaybe<Scalars['String']>;
    baseToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
    baseToken_not_ends_with?: InputMaybe<Scalars['String']>;
    baseToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    baseToken_?: InputMaybe<BaseToken_filter>;
    collateralTokens?: InputMaybe<Array<Scalars['String']>>;
    collateralTokens_not?: InputMaybe<Array<Scalars['String']>>;
    collateralTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    collateralTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    collateralTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    collateralTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    collateralTokens_?: InputMaybe<CollateralToken_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type MarketConfiguration_orderBy =
    | 'id'
    | 'market'
    | 'cometImplementation'
    | 'lastConfigurationUpdateBlockNumber'
    | 'name'
    | 'symbol'
    | 'factory'
    | 'governor'
    | 'pauseGuardian'
    | 'extensionDelegate'
    | 'supplyKink'
    | 'supplyPerSecondInterestRateSlopeLow'
    | 'supplyPerSecondInterestRateSlopeHigh'
    | 'supplyPerSecondInterestRateBase'
    | 'borrowKink'
    | 'borrowPerSecondInterestRateSlopeLow'
    | 'borrowPerSecondInterestRateSlopeHigh'
    | 'borrowPerSecondInterestRateBase'
    | 'storeFrontPriceFactor'
    | 'trackingIndexScale'
    | 'baseTrackingSupplySpeed'
    | 'baseTrackingBorrowSpeed'
    | 'baseMinForRewards'
    | 'baseBorrowMin'
    | 'targetReserves'
    | 'baseToken'
    | 'collateralTokens';

  export type MarketDailyUsage = {
    /** Market ID + day */
    id: Scalars['Bytes'];
    /** Days since unix epoch */
    day: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Market the usage is for */
    market: Market;
    /** Usage snapshot from that day */
    usage: Usage;
  };

  export type MarketDailyUsage_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    day?: InputMaybe<Scalars['BigInt']>;
    day_not?: InputMaybe<Scalars['BigInt']>;
    day_gt?: InputMaybe<Scalars['BigInt']>;
    day_lt?: InputMaybe<Scalars['BigInt']>;
    day_gte?: InputMaybe<Scalars['BigInt']>;
    day_lte?: InputMaybe<Scalars['BigInt']>;
    day_in?: InputMaybe<Array<Scalars['BigInt']>>;
    day_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    usage?: InputMaybe<Scalars['String']>;
    usage_not?: InputMaybe<Scalars['String']>;
    usage_gt?: InputMaybe<Scalars['String']>;
    usage_lt?: InputMaybe<Scalars['String']>;
    usage_gte?: InputMaybe<Scalars['String']>;
    usage_lte?: InputMaybe<Scalars['String']>;
    usage_in?: InputMaybe<Array<Scalars['String']>>;
    usage_not_in?: InputMaybe<Array<Scalars['String']>>;
    usage_contains?: InputMaybe<Scalars['String']>;
    usage_contains_nocase?: InputMaybe<Scalars['String']>;
    usage_not_contains?: InputMaybe<Scalars['String']>;
    usage_not_contains_nocase?: InputMaybe<Scalars['String']>;
    usage_starts_with?: InputMaybe<Scalars['String']>;
    usage_starts_with_nocase?: InputMaybe<Scalars['String']>;
    usage_not_starts_with?: InputMaybe<Scalars['String']>;
    usage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    usage_ends_with?: InputMaybe<Scalars['String']>;
    usage_ends_with_nocase?: InputMaybe<Scalars['String']>;
    usage_not_ends_with?: InputMaybe<Scalars['String']>;
    usage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    usage_?: InputMaybe<Usage_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type MarketDailyUsage_orderBy =
    | 'id'
    | 'day'
    | 'timestamp'
    | 'market'
    | 'usage';

  export type MarketHourlyUsage = {
    /** Market ID + hour */
    id: Scalars['Bytes'];
    /** Hours since unix epoch */
    hour: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Market the usage is for */
    market: Market;
    /** Usage snapshot from that hour */
    usage: Usage;
  };

  export type MarketHourlyUsage_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hour?: InputMaybe<Scalars['BigInt']>;
    hour_not?: InputMaybe<Scalars['BigInt']>;
    hour_gt?: InputMaybe<Scalars['BigInt']>;
    hour_lt?: InputMaybe<Scalars['BigInt']>;
    hour_gte?: InputMaybe<Scalars['BigInt']>;
    hour_lte?: InputMaybe<Scalars['BigInt']>;
    hour_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hour_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    usage?: InputMaybe<Scalars['String']>;
    usage_not?: InputMaybe<Scalars['String']>;
    usage_gt?: InputMaybe<Scalars['String']>;
    usage_lt?: InputMaybe<Scalars['String']>;
    usage_gte?: InputMaybe<Scalars['String']>;
    usage_lte?: InputMaybe<Scalars['String']>;
    usage_in?: InputMaybe<Array<Scalars['String']>>;
    usage_not_in?: InputMaybe<Array<Scalars['String']>>;
    usage_contains?: InputMaybe<Scalars['String']>;
    usage_contains_nocase?: InputMaybe<Scalars['String']>;
    usage_not_contains?: InputMaybe<Scalars['String']>;
    usage_not_contains_nocase?: InputMaybe<Scalars['String']>;
    usage_starts_with?: InputMaybe<Scalars['String']>;
    usage_starts_with_nocase?: InputMaybe<Scalars['String']>;
    usage_not_starts_with?: InputMaybe<Scalars['String']>;
    usage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    usage_ends_with?: InputMaybe<Scalars['String']>;
    usage_ends_with_nocase?: InputMaybe<Scalars['String']>;
    usage_not_ends_with?: InputMaybe<Scalars['String']>;
    usage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    usage_?: InputMaybe<Usage_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type MarketHourlyUsage_orderBy =
    | 'id'
    | 'hour'
    | 'timestamp'
    | 'market'
    | 'usage';

  export type Market_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    cometProxy?: InputMaybe<Scalars['Bytes']>;
    cometProxy_not?: InputMaybe<Scalars['Bytes']>;
    cometProxy_in?: InputMaybe<Array<Scalars['Bytes']>>;
    cometProxy_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    cometProxy_contains?: InputMaybe<Scalars['Bytes']>;
    cometProxy_not_contains?: InputMaybe<Scalars['Bytes']>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Protocol_filter>;
    creationBlockNumber?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    creationBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    configuration?: InputMaybe<Scalars['String']>;
    configuration_not?: InputMaybe<Scalars['String']>;
    configuration_gt?: InputMaybe<Scalars['String']>;
    configuration_lt?: InputMaybe<Scalars['String']>;
    configuration_gte?: InputMaybe<Scalars['String']>;
    configuration_lte?: InputMaybe<Scalars['String']>;
    configuration_in?: InputMaybe<Array<Scalars['String']>>;
    configuration_not_in?: InputMaybe<Array<Scalars['String']>>;
    configuration_contains?: InputMaybe<Scalars['String']>;
    configuration_contains_nocase?: InputMaybe<Scalars['String']>;
    configuration_not_contains?: InputMaybe<Scalars['String']>;
    configuration_not_contains_nocase?: InputMaybe<Scalars['String']>;
    configuration_starts_with?: InputMaybe<Scalars['String']>;
    configuration_starts_with_nocase?: InputMaybe<Scalars['String']>;
    configuration_not_starts_with?: InputMaybe<Scalars['String']>;
    configuration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    configuration_ends_with?: InputMaybe<Scalars['String']>;
    configuration_ends_with_nocase?: InputMaybe<Scalars['String']>;
    configuration_not_ends_with?: InputMaybe<Scalars['String']>;
    configuration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    configuration_?: InputMaybe<MarketConfiguration_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<MarketAccounting_filter>;
    cumulativeUsage?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not?: InputMaybe<Scalars['String']>;
    cumulativeUsage_gt?: InputMaybe<Scalars['String']>;
    cumulativeUsage_lt?: InputMaybe<Scalars['String']>;
    cumulativeUsage_gte?: InputMaybe<Scalars['String']>;
    cumulativeUsage_lte?: InputMaybe<Scalars['String']>;
    cumulativeUsage_in?: InputMaybe<Array<Scalars['String']>>;
    cumulativeUsage_not_in?: InputMaybe<Array<Scalars['String']>>;
    cumulativeUsage_contains?: InputMaybe<Scalars['String']>;
    cumulativeUsage_contains_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_contains?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_contains_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_starts_with?: InputMaybe<Scalars['String']>;
    cumulativeUsage_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_starts_with?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_ends_with?: InputMaybe<Scalars['String']>;
    cumulativeUsage_ends_with_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_ends_with?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_?: InputMaybe<Usage_filter>;
    collateralBalances_?: InputMaybe<MarketCollateralBalance_filter>;
    positions_?: InputMaybe<Position_filter>;
    supplyBaseInteractions_?: InputMaybe<SupplyBaseInteraction_filter>;
    withdrawBaseInteractions_?: InputMaybe<WithdrawBaseInteraction_filter>;
    absorbDebtInteractions_?: InputMaybe<AbsorbDebtInteraction_filter>;
    supplyCollateralInteractions_?: InputMaybe<SupplyCollateralInteraction_filter>;
    withdrawCollateralInteractions_?: InputMaybe<WithdrawCollateralInteraction_filter>;
    transferCollateralInteractions_?: InputMaybe<TransferCollateralInteraction_filter>;
    absorbCollateralInteractions_?: InputMaybe<AbsorbCollateralInteraction_filter>;
    buyCollateralInteractions_?: InputMaybe<BuyCollateralInteraction_filter>;
    withdrawReservesInteractions_?: InputMaybe<WithdrawReservesInteraction_filter>;
    hourlyUsage_?: InputMaybe<MarketHourlyUsage_filter>;
    dailyUsage_?: InputMaybe<MarketDailyUsage_filter>;
    configurationSnapshots_?: InputMaybe<MarketConfigurationSnapshot_filter>;
    hourlyMarketAccounting_?: InputMaybe<HourlyMarketAccounting_filter>;
    dailyMarketAccounting_?: InputMaybe<DailyMarketAccounting_filter>;
    weeklyMarketAccounting_?: InputMaybe<WeeklyMarketAccounting_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Market_orderBy =
    | 'id'
    | 'cometProxy'
    | 'protocol'
    | 'creationBlockNumber'
    | 'configuration'
    | 'accounting'
    | 'cumulativeUsage'
    | 'collateralBalances'
    | 'positions'
    | 'supplyBaseInteractions'
    | 'withdrawBaseInteractions'
    | 'absorbDebtInteractions'
    | 'supplyCollateralInteractions'
    | 'withdrawCollateralInteractions'
    | 'transferCollateralInteractions'
    | 'absorbCollateralInteractions'
    | 'buyCollateralInteractions'
    | 'withdrawReservesInteractions'
    | 'hourlyUsage'
    | 'dailyUsage'
    | 'configurationSnapshots'
    | 'hourlyMarketAccounting'
    | 'dailyMarketAccounting'
    | 'weeklyMarketAccounting';

  /** Defines the order direction, either ascending or descending */
  export type OrderDirection = 'asc' | 'desc';

  export type Position = {
    /** Market proxy address + owner address */
    id: Scalars['Bytes'];
    /** Block number the position was created */
    creationBlockNumber: Scalars['BigInt'];
    /** Market the position is in */
    market: Market;
    /** Owner of the position */
    account: Account;
    /** Current accounting of this position */
    accounting: PositionAccounting;
    /** Current collateral balances of this position */
    collateralBalances: Array<PositionCollateralBalance>;
    /** All interactions where the base asset was supplied to this position, including those repaying loans */
    supplyBaseInteractions: Array<SupplyBaseInteraction>;
    /** All interactions where the base asset was withdraw from this position, including those taking loans */
    withdrawBaseInteractions: Array<WithdrawBaseInteraction>;
    /** All interactions where this position was liquidated */
    absorbDebtInteractions: Array<AbsorbDebtInteraction>;
    /** All interactions where a collateral asset was supplied to this position */
    supplyCollateralInteractions: Array<SupplyCollateralInteraction>;
    /** All interactions where a collateral asset was withdrawn from this position */
    withdrawCollateralInteractions: Array<WithdrawCollateralInteraction>;
    /** All interactions where a collateral asset was transferred from this position */
    transferFromCollateralInteractions: Array<TransferCollateralInteraction>;
    /** All interactions where a collateral asset was transferred to this position */
    transferToCollateralInteractions: Array<TransferCollateralInteraction>;
    /** All interactions where a collateral asset was absorbed by the market during a liquidation of this position */
    absorbCollateralInteractions: Array<AbsorbCollateralInteraction>;
    /** Historical snapshots of position accounting changes, these only get taken when the position accounting changes (not periodically) */
    positionAccountingSnapshots?: Maybe<Array<PositionAccountingSnapshot>>;
  };

  export type PositioncollateralBalancesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionCollateralBalance_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionCollateralBalance_filter>;
  };

  export type PositionsupplyBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyBaseInteraction_filter>;
  };

  export type PositionwithdrawBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawBaseInteraction_filter>;
  };

  export type PositionabsorbDebtInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbDebtInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbDebtInteraction_filter>;
  };

  export type PositionsupplyCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyCollateralInteraction_filter>;
  };

  export type PositionwithdrawCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawCollateralInteraction_filter>;
  };

  export type PositiontransferFromCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TransferCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TransferCollateralInteraction_filter>;
  };

  export type PositiontransferToCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TransferCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TransferCollateralInteraction_filter>;
  };

  export type PositionabsorbCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbCollateralInteraction_filter>;
  };

  export type PositionpositionAccountingSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionAccountingSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionAccountingSnapshot_filter>;
  };

  export type PositionAccounting = {
    /** Position ID or block timestamp + log index for snapshots */
    id: Scalars['Bytes'];
    /** Last block number that this accounting was updated */
    lastUpdatedBlockNumber: Scalars['BigInt'];
    /** Position the accounting is for */
    position: Position;
    /** Base principal of this position (+ for supply, - for borrow), this can be used to construct the most accurate balance using the market indices since position balances are only updated when the principal changes (supply, borrow, etc) */
    basePrincipal: Scalars['BigInt'];
    /** Base balance of the position (from the last time it was updated, use basePrincipal and market indices for most accurate baseBalance) */
    baseBalance: Scalars['BigInt'];
    /** Base tracking index for rewards for the position */
    baseTrackingIndex: Scalars['BigInt'];
    /** Base tracking that this position has accrued */
    baseTrackingAccrued: Scalars['BigInt'];
    /** Base balance in USD (+ for supply, - for borrow) */
    baseBalanceUsd: Scalars['BigDecimal'];
    /** Collateral balance of the position in USD */
    collateralBalanceUsd: Scalars['BigDecimal'];
  };

  export type PositionAccountingSnapshot = {
    /** Position ID + block number + log index. Note that position snapshots are only taken when the position changes (supply, borrow, liquidate, etc.), not periodically */
    id: Scalars['Bytes'];
    /** Timestamp in seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Position the accounting is for */
    position: Position;
    /** Accounting snapshot */
    accounting: PositionAccounting;
  };

  export type PositionAccountingSnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<PositionAccounting_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type PositionAccountingSnapshot_orderBy =
    | 'id'
    | 'timestamp'
    | 'position'
    | 'accounting';

  export type PositionAccounting_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    lastUpdatedBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdatedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    basePrincipal?: InputMaybe<Scalars['BigInt']>;
    basePrincipal_not?: InputMaybe<Scalars['BigInt']>;
    basePrincipal_gt?: InputMaybe<Scalars['BigInt']>;
    basePrincipal_lt?: InputMaybe<Scalars['BigInt']>;
    basePrincipal_gte?: InputMaybe<Scalars['BigInt']>;
    basePrincipal_lte?: InputMaybe<Scalars['BigInt']>;
    basePrincipal_in?: InputMaybe<Array<Scalars['BigInt']>>;
    basePrincipal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseBalance?: InputMaybe<Scalars['BigInt']>;
    baseBalance_not?: InputMaybe<Scalars['BigInt']>;
    baseBalance_gt?: InputMaybe<Scalars['BigInt']>;
    baseBalance_lt?: InputMaybe<Scalars['BigInt']>;
    baseBalance_gte?: InputMaybe<Scalars['BigInt']>;
    baseBalance_lte?: InputMaybe<Scalars['BigInt']>;
    baseBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseTrackingIndex?: InputMaybe<Scalars['BigInt']>;
    baseTrackingIndex_not?: InputMaybe<Scalars['BigInt']>;
    baseTrackingIndex_gt?: InputMaybe<Scalars['BigInt']>;
    baseTrackingIndex_lt?: InputMaybe<Scalars['BigInt']>;
    baseTrackingIndex_gte?: InputMaybe<Scalars['BigInt']>;
    baseTrackingIndex_lte?: InputMaybe<Scalars['BigInt']>;
    baseTrackingIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseTrackingIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseTrackingAccrued?: InputMaybe<Scalars['BigInt']>;
    baseTrackingAccrued_not?: InputMaybe<Scalars['BigInt']>;
    baseTrackingAccrued_gt?: InputMaybe<Scalars['BigInt']>;
    baseTrackingAccrued_lt?: InputMaybe<Scalars['BigInt']>;
    baseTrackingAccrued_gte?: InputMaybe<Scalars['BigInt']>;
    baseTrackingAccrued_lte?: InputMaybe<Scalars['BigInt']>;
    baseTrackingAccrued_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseTrackingAccrued_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    baseBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    baseBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    baseBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    baseBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    baseBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    baseBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    baseBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    baseBalanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralBalanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type PositionAccounting_orderBy =
    | 'id'
    | 'lastUpdatedBlockNumber'
    | 'position'
    | 'basePrincipal'
    | 'baseBalance'
    | 'baseTrackingIndex'
    | 'baseTrackingAccrued'
    | 'baseBalanceUsd'
    | 'collateralBalanceUsd';

  export type PositionCollateralBalance = CollateralBalance & {
    /** Position id + collateral token ID */
    id: Scalars['Bytes'];
    /** Block number the position collateral balance was created */
    creationBlockNumber: Scalars['BigInt'];
    /** Collateral token the balance is for */
    collateralToken: CollateralToken;
    /** Position balance is for */
    position: Position;
    /** Last block number the balances and reserves were updated */
    lastUpdateBlockNumber: Scalars['BigInt'];
    /** Balance of collateralToken */
    balance: Scalars['BigInt'];
    /** Balance in USD of the collateral token */
    balanceUsd: Scalars['BigDecimal'];
  };

  export type PositionCollateralBalance_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    creationBlockNumber?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    creationBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    collateralToken?: InputMaybe<Scalars['String']>;
    collateralToken_not?: InputMaybe<Scalars['String']>;
    collateralToken_gt?: InputMaybe<Scalars['String']>;
    collateralToken_lt?: InputMaybe<Scalars['String']>;
    collateralToken_gte?: InputMaybe<Scalars['String']>;
    collateralToken_lte?: InputMaybe<Scalars['String']>;
    collateralToken_in?: InputMaybe<Array<Scalars['String']>>;
    collateralToken_not_in?: InputMaybe<Array<Scalars['String']>>;
    collateralToken_contains?: InputMaybe<Scalars['String']>;
    collateralToken_contains_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_not_contains?: InputMaybe<Scalars['String']>;
    collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_starts_with?: InputMaybe<Scalars['String']>;
    collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_not_starts_with?: InputMaybe<Scalars['String']>;
    collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_ends_with?: InputMaybe<Scalars['String']>;
    collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_not_ends_with?: InputMaybe<Scalars['String']>;
    collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    collateralToken_?: InputMaybe<CollateralToken_filter>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balance?: InputMaybe<Scalars['BigInt']>;
    balance_not?: InputMaybe<Scalars['BigInt']>;
    balance_gt?: InputMaybe<Scalars['BigInt']>;
    balance_lt?: InputMaybe<Scalars['BigInt']>;
    balance_gte?: InputMaybe<Scalars['BigInt']>;
    balance_lte?: InputMaybe<Scalars['BigInt']>;
    balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    balanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    balanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    balanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type PositionCollateralBalance_orderBy =
    | 'id'
    | 'creationBlockNumber'
    | 'collateralToken'
    | 'position'
    | 'lastUpdateBlockNumber'
    | 'balance'
    | 'balanceUsd';

  export type Position_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    creationBlockNumber?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    creationBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    creationBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    account?: InputMaybe<Scalars['String']>;
    account_not?: InputMaybe<Scalars['String']>;
    account_gt?: InputMaybe<Scalars['String']>;
    account_lt?: InputMaybe<Scalars['String']>;
    account_gte?: InputMaybe<Scalars['String']>;
    account_lte?: InputMaybe<Scalars['String']>;
    account_in?: InputMaybe<Array<Scalars['String']>>;
    account_not_in?: InputMaybe<Array<Scalars['String']>>;
    account_contains?: InputMaybe<Scalars['String']>;
    account_contains_nocase?: InputMaybe<Scalars['String']>;
    account_not_contains?: InputMaybe<Scalars['String']>;
    account_not_contains_nocase?: InputMaybe<Scalars['String']>;
    account_starts_with?: InputMaybe<Scalars['String']>;
    account_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_starts_with?: InputMaybe<Scalars['String']>;
    account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    account_ends_with?: InputMaybe<Scalars['String']>;
    account_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_not_ends_with?: InputMaybe<Scalars['String']>;
    account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    account_?: InputMaybe<Account_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<PositionAccounting_filter>;
    collateralBalances_?: InputMaybe<PositionCollateralBalance_filter>;
    supplyBaseInteractions_?: InputMaybe<SupplyBaseInteraction_filter>;
    withdrawBaseInteractions_?: InputMaybe<WithdrawBaseInteraction_filter>;
    absorbDebtInteractions_?: InputMaybe<AbsorbDebtInteraction_filter>;
    supplyCollateralInteractions_?: InputMaybe<SupplyCollateralInteraction_filter>;
    withdrawCollateralInteractions_?: InputMaybe<WithdrawCollateralInteraction_filter>;
    transferFromCollateralInteractions_?: InputMaybe<TransferCollateralInteraction_filter>;
    transferToCollateralInteractions_?: InputMaybe<TransferCollateralInteraction_filter>;
    absorbCollateralInteractions_?: InputMaybe<AbsorbCollateralInteraction_filter>;
    positionAccountingSnapshots_?: InputMaybe<PositionAccountingSnapshot_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Position_orderBy =
    | 'id'
    | 'creationBlockNumber'
    | 'market'
    | 'account'
    | 'accounting'
    | 'collateralBalances'
    | 'supplyBaseInteractions'
    | 'withdrawBaseInteractions'
    | 'absorbDebtInteractions'
    | 'supplyCollateralInteractions'
    | 'withdrawCollateralInteractions'
    | 'transferFromCollateralInteractions'
    | 'transferToCollateralInteractions'
    | 'absorbCollateralInteractions'
    | 'positionAccountingSnapshots';

  export type Protocol = {
    /** Configurator proxy address */
    id: Scalars['Bytes'];
    /** Configurator proxy address */
    configuratorProxy: Scalars['Bytes'];
    /** Current address of the configurator implementation */
    configuratorImplementation?: Maybe<Scalars['Bytes']>;
    /** Markets that exist in the protocol */
    markets: Array<Market>;
    /** Current accounting for the whole protocol */
    accounting: ProtocolAccounting;
    /** Current cumulative usage for the whole protocol */
    cumulativeUsage: Usage;
    /** Historical snapshots of hourly protocol usage */
    hourlyUsage: Array<ProtocolHourlyUsage>;
    /** Historical snapshots of daily protocol usage */
    dailyUsage: Array<ProtocolDailyUsage>;
    /** Historical snapshots of hourly protocol accounting */
    hourlyProtocolAccounting: Array<HourlyProtocolAccounting>;
    /** Historical snapshots of daily protocol accounting */
    dailyProtocolAccounting: Array<DailyProtocolAccounting>;
    /** Historical snapshots of weekly protocol accounting */
    weeklyProtocolAccounting: Array<WeeklyProtocolAccounting>;
  };

  export type ProtocolmarketsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Market_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Market_filter>;
  };

  export type ProtocolhourlyUsageArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProtocolHourlyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProtocolHourlyUsage_filter>;
  };

  export type ProtocoldailyUsageArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProtocolDailyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProtocolDailyUsage_filter>;
  };

  export type ProtocolhourlyProtocolAccountingArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<HourlyProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<HourlyProtocolAccounting_filter>;
  };

  export type ProtocoldailyProtocolAccountingArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DailyProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DailyProtocolAccounting_filter>;
  };

  export type ProtocolweeklyProtocolAccountingArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WeeklyProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WeeklyProtocolAccounting_filter>;
  };

  export type ProtocolAccounting = {
    /** Protocol ID + hour number for snapshots */
    id: Scalars['Bytes'];
    /** Protocol the accounting is for */
    protocol: Protocol;
    /** Last block the accounting was updated */
    lastUpdatedBlock: Scalars['BigInt'];
    /** Total amount supplied in USD to the protocol */
    totalSupplyUsd: Scalars['BigDecimal'];
    /** Total amount borrowed in USD from the protocol */
    totalBorrowUsd: Scalars['BigDecimal'];
    /** Total base assets reserve balance in USD of protocol */
    reserveBalanceUsd: Scalars['BigDecimal'];
    /** Total collateral balance in USD of the protocol */
    collateralBalanceUsd: Scalars['BigDecimal'];
    /** Total collateral reserve balance in USD of the protocol */
    collateralReservesBalanceUsd: Scalars['BigDecimal'];
    /** Total reserve balance in USD of the protocol (base reserves + collateral reserves) */
    totalReserveBalanceUsd: Scalars['BigDecimal'];
    /** Utilization percent of the protocol (totalBorrowUsd / totalSupplyUsd) */
    utilization: Scalars['BigDecimal'];
    /** Collateralization percent of the protocol (totalSupplyUsd / totalBorrowUsd, or 1 / utilization) */
    collateralization: Scalars['BigDecimal'];
    /** Average base supply APR of the protocol (average over all markets) */
    avgSupplyApr: Scalars['BigDecimal'];
    /** Average base borrow APR of the protocol (average over all markets) */
    avgBorrowApr: Scalars['BigDecimal'];
    /** Average reward supply APR of the protocol (average over all markets) */
    avgRewardSupplyApr: Scalars['BigDecimal'];
    /** Average reward borrow APR of the protocol (average over all markets) */
    avgRewardBorrowApr: Scalars['BigDecimal'];
    /** Average net supply APR of the protocol (avgSupplyApr + avgRewardSupplyApy) */
    avgNetSupplyApr: Scalars['BigDecimal'];
    /** Average net borrow APR of the protocol (avgBorrowApr - avgRewardBorrowApr) */
    avgNetBorrowApr: Scalars['BigDecimal'];
  };

  export type ProtocolAccounting_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Protocol_filter>;
    lastUpdatedBlock?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlock_not?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlock_gt?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlock_lt?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlock_gte?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlock_lte?: InputMaybe<Scalars['BigInt']>;
    lastUpdatedBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastUpdatedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalSupplyUsd?: InputMaybe<Scalars['BigDecimal']>;
    totalSupplyUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    totalSupplyUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalSupplyUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalSupplyUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalSupplyUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalSupplyUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalSupplyUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalBorrowUsd?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrowUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrowUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrowUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrowUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrowUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalBorrowUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalBorrowUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    reserveBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    reserveBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserveBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserveBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserveBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserveBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveBalanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    collateralBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralBalanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralReservesBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    collateralReservesBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralReservesBalanceUsd_not_in?: InputMaybe<
      Array<Scalars['BigDecimal']>
    >;
    totalReserveBalanceUsd?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    totalReserveBalanceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    totalReserveBalanceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    utilization?: InputMaybe<Scalars['BigDecimal']>;
    utilization_not?: InputMaybe<Scalars['BigDecimal']>;
    utilization_gt?: InputMaybe<Scalars['BigDecimal']>;
    utilization_lt?: InputMaybe<Scalars['BigDecimal']>;
    utilization_gte?: InputMaybe<Scalars['BigDecimal']>;
    utilization_lte?: InputMaybe<Scalars['BigDecimal']>;
    utilization_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    utilization_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralization?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_not?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_gt?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_lt?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_gte?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_lte?: InputMaybe<Scalars['BigDecimal']>;
    collateralization_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    collateralization_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgSupplyApr?: InputMaybe<Scalars['BigDecimal']>;
    avgSupplyApr_not?: InputMaybe<Scalars['BigDecimal']>;
    avgSupplyApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    avgSupplyApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    avgSupplyApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    avgSupplyApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    avgSupplyApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgSupplyApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgBorrowApr?: InputMaybe<Scalars['BigDecimal']>;
    avgBorrowApr_not?: InputMaybe<Scalars['BigDecimal']>;
    avgBorrowApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    avgBorrowApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    avgBorrowApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    avgBorrowApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    avgBorrowApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgBorrowApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgRewardSupplyApr?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardSupplyApr_not?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardSupplyApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardSupplyApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardSupplyApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardSupplyApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardSupplyApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgRewardSupplyApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgRewardBorrowApr?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardBorrowApr_not?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardBorrowApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardBorrowApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardBorrowApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardBorrowApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    avgRewardBorrowApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgRewardBorrowApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgNetSupplyApr?: InputMaybe<Scalars['BigDecimal']>;
    avgNetSupplyApr_not?: InputMaybe<Scalars['BigDecimal']>;
    avgNetSupplyApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    avgNetSupplyApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    avgNetSupplyApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    avgNetSupplyApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    avgNetSupplyApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgNetSupplyApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgNetBorrowApr?: InputMaybe<Scalars['BigDecimal']>;
    avgNetBorrowApr_not?: InputMaybe<Scalars['BigDecimal']>;
    avgNetBorrowApr_gt?: InputMaybe<Scalars['BigDecimal']>;
    avgNetBorrowApr_lt?: InputMaybe<Scalars['BigDecimal']>;
    avgNetBorrowApr_gte?: InputMaybe<Scalars['BigDecimal']>;
    avgNetBorrowApr_lte?: InputMaybe<Scalars['BigDecimal']>;
    avgNetBorrowApr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    avgNetBorrowApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type ProtocolAccounting_orderBy =
    | 'id'
    | 'protocol'
    | 'lastUpdatedBlock'
    | 'totalSupplyUsd'
    | 'totalBorrowUsd'
    | 'reserveBalanceUsd'
    | 'collateralBalanceUsd'
    | 'collateralReservesBalanceUsd'
    | 'totalReserveBalanceUsd'
    | 'utilization'
    | 'collateralization'
    | 'avgSupplyApr'
    | 'avgBorrowApr'
    | 'avgRewardSupplyApr'
    | 'avgRewardBorrowApr'
    | 'avgNetSupplyApr'
    | 'avgNetBorrowApr';

  export type ProtocolDailyUsage = {
    /** Day */
    id: Scalars['Bytes'];
    /** Days since unix epoch */
    day: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Protocol the usage is for */
    protocol: Protocol;
    /** Usage snapshot from that day */
    usage: Usage;
  };

  export type ProtocolDailyUsage_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    day?: InputMaybe<Scalars['BigInt']>;
    day_not?: InputMaybe<Scalars['BigInt']>;
    day_gt?: InputMaybe<Scalars['BigInt']>;
    day_lt?: InputMaybe<Scalars['BigInt']>;
    day_gte?: InputMaybe<Scalars['BigInt']>;
    day_lte?: InputMaybe<Scalars['BigInt']>;
    day_in?: InputMaybe<Array<Scalars['BigInt']>>;
    day_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Protocol_filter>;
    usage?: InputMaybe<Scalars['String']>;
    usage_not?: InputMaybe<Scalars['String']>;
    usage_gt?: InputMaybe<Scalars['String']>;
    usage_lt?: InputMaybe<Scalars['String']>;
    usage_gte?: InputMaybe<Scalars['String']>;
    usage_lte?: InputMaybe<Scalars['String']>;
    usage_in?: InputMaybe<Array<Scalars['String']>>;
    usage_not_in?: InputMaybe<Array<Scalars['String']>>;
    usage_contains?: InputMaybe<Scalars['String']>;
    usage_contains_nocase?: InputMaybe<Scalars['String']>;
    usage_not_contains?: InputMaybe<Scalars['String']>;
    usage_not_contains_nocase?: InputMaybe<Scalars['String']>;
    usage_starts_with?: InputMaybe<Scalars['String']>;
    usage_starts_with_nocase?: InputMaybe<Scalars['String']>;
    usage_not_starts_with?: InputMaybe<Scalars['String']>;
    usage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    usage_ends_with?: InputMaybe<Scalars['String']>;
    usage_ends_with_nocase?: InputMaybe<Scalars['String']>;
    usage_not_ends_with?: InputMaybe<Scalars['String']>;
    usage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    usage_?: InputMaybe<Usage_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type ProtocolDailyUsage_orderBy =
    | 'id'
    | 'day'
    | 'timestamp'
    | 'protocol'
    | 'usage';

  export type ProtocolHourlyUsage = {
    /** Hour */
    id: Scalars['Bytes'];
    /** Hours since unix epoch */
    hour: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Protocol the usage is for */
    protocol: Protocol;
    /** Usage snapshot from that hour */
    usage: Usage;
  };

  export type ProtocolHourlyUsage_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hour?: InputMaybe<Scalars['BigInt']>;
    hour_not?: InputMaybe<Scalars['BigInt']>;
    hour_gt?: InputMaybe<Scalars['BigInt']>;
    hour_lt?: InputMaybe<Scalars['BigInt']>;
    hour_gte?: InputMaybe<Scalars['BigInt']>;
    hour_lte?: InputMaybe<Scalars['BigInt']>;
    hour_in?: InputMaybe<Array<Scalars['BigInt']>>;
    hour_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Protocol_filter>;
    usage?: InputMaybe<Scalars['String']>;
    usage_not?: InputMaybe<Scalars['String']>;
    usage_gt?: InputMaybe<Scalars['String']>;
    usage_lt?: InputMaybe<Scalars['String']>;
    usage_gte?: InputMaybe<Scalars['String']>;
    usage_lte?: InputMaybe<Scalars['String']>;
    usage_in?: InputMaybe<Array<Scalars['String']>>;
    usage_not_in?: InputMaybe<Array<Scalars['String']>>;
    usage_contains?: InputMaybe<Scalars['String']>;
    usage_contains_nocase?: InputMaybe<Scalars['String']>;
    usage_not_contains?: InputMaybe<Scalars['String']>;
    usage_not_contains_nocase?: InputMaybe<Scalars['String']>;
    usage_starts_with?: InputMaybe<Scalars['String']>;
    usage_starts_with_nocase?: InputMaybe<Scalars['String']>;
    usage_not_starts_with?: InputMaybe<Scalars['String']>;
    usage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    usage_ends_with?: InputMaybe<Scalars['String']>;
    usage_ends_with_nocase?: InputMaybe<Scalars['String']>;
    usage_not_ends_with?: InputMaybe<Scalars['String']>;
    usage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    usage_?: InputMaybe<Usage_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type ProtocolHourlyUsage_orderBy =
    | 'id'
    | 'hour'
    | 'timestamp'
    | 'protocol'
    | 'usage';

  export type Protocol_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    configuratorProxy?: InputMaybe<Scalars['Bytes']>;
    configuratorProxy_not?: InputMaybe<Scalars['Bytes']>;
    configuratorProxy_in?: InputMaybe<Array<Scalars['Bytes']>>;
    configuratorProxy_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    configuratorProxy_contains?: InputMaybe<Scalars['Bytes']>;
    configuratorProxy_not_contains?: InputMaybe<Scalars['Bytes']>;
    configuratorImplementation?: InputMaybe<Scalars['Bytes']>;
    configuratorImplementation_not?: InputMaybe<Scalars['Bytes']>;
    configuratorImplementation_in?: InputMaybe<Array<Scalars['Bytes']>>;
    configuratorImplementation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    configuratorImplementation_contains?: InputMaybe<Scalars['Bytes']>;
    configuratorImplementation_not_contains?: InputMaybe<Scalars['Bytes']>;
    markets?: InputMaybe<Array<Scalars['String']>>;
    markets_not?: InputMaybe<Array<Scalars['String']>>;
    markets_contains?: InputMaybe<Array<Scalars['String']>>;
    markets_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    markets_not_contains?: InputMaybe<Array<Scalars['String']>>;
    markets_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    markets_?: InputMaybe<Market_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<ProtocolAccounting_filter>;
    cumulativeUsage?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not?: InputMaybe<Scalars['String']>;
    cumulativeUsage_gt?: InputMaybe<Scalars['String']>;
    cumulativeUsage_lt?: InputMaybe<Scalars['String']>;
    cumulativeUsage_gte?: InputMaybe<Scalars['String']>;
    cumulativeUsage_lte?: InputMaybe<Scalars['String']>;
    cumulativeUsage_in?: InputMaybe<Array<Scalars['String']>>;
    cumulativeUsage_not_in?: InputMaybe<Array<Scalars['String']>>;
    cumulativeUsage_contains?: InputMaybe<Scalars['String']>;
    cumulativeUsage_contains_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_contains?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_contains_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_starts_with?: InputMaybe<Scalars['String']>;
    cumulativeUsage_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_starts_with?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_ends_with?: InputMaybe<Scalars['String']>;
    cumulativeUsage_ends_with_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_ends_with?: InputMaybe<Scalars['String']>;
    cumulativeUsage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    cumulativeUsage_?: InputMaybe<Usage_filter>;
    hourlyUsage_?: InputMaybe<ProtocolHourlyUsage_filter>;
    dailyUsage_?: InputMaybe<ProtocolDailyUsage_filter>;
    hourlyProtocolAccounting_?: InputMaybe<HourlyProtocolAccounting_filter>;
    dailyProtocolAccounting_?: InputMaybe<DailyProtocolAccounting_filter>;
    weeklyProtocolAccounting_?: InputMaybe<WeeklyProtocolAccounting_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Protocol_orderBy =
    | 'id'
    | 'configuratorProxy'
    | 'configuratorImplementation'
    | 'markets'
    | 'accounting'
    | 'cumulativeUsage'
    | 'hourlyUsage'
    | 'dailyUsage'
    | 'hourlyProtocolAccounting'
    | 'dailyProtocolAccounting'
    | 'weeklyProtocolAccounting';

  export type Query = {
    protocol?: Maybe<Protocol>;
    protocols: Array<Protocol>;
    market?: Maybe<Market>;
    markets: Array<Market>;
    position?: Maybe<Position>;
    positions: Array<Position>;
    marketConfiguration?: Maybe<MarketConfiguration>;
    marketConfigurations: Array<MarketConfiguration>;
    protocolAccounting?: Maybe<ProtocolAccounting>;
    protocolAccountings: Array<ProtocolAccounting>;
    marketAccounting?: Maybe<MarketAccounting>;
    marketAccountings: Array<MarketAccounting>;
    positionAccounting?: Maybe<PositionAccounting>;
    positionAccountings: Array<PositionAccounting>;
    usage?: Maybe<Usage>;
    usages: Array<Usage>;
    hourlyProtocolAccounting?: Maybe<HourlyProtocolAccounting>;
    hourlyProtocolAccountings: Array<HourlyProtocolAccounting>;
    dailyProtocolAccounting?: Maybe<DailyProtocolAccounting>;
    dailyProtocolAccountings: Array<DailyProtocolAccounting>;
    weeklyProtocolAccounting?: Maybe<WeeklyProtocolAccounting>;
    weeklyProtocolAccountings: Array<WeeklyProtocolAccounting>;
    marketConfigurationSnapshot?: Maybe<MarketConfigurationSnapshot>;
    marketConfigurationSnapshots: Array<MarketConfigurationSnapshot>;
    hourlyMarketAccounting?: Maybe<HourlyMarketAccounting>;
    hourlyMarketAccountings: Array<HourlyMarketAccounting>;
    dailyMarketAccounting?: Maybe<DailyMarketAccounting>;
    dailyMarketAccountings: Array<DailyMarketAccounting>;
    weeklyMarketAccounting?: Maybe<WeeklyMarketAccounting>;
    weeklyMarketAccountings: Array<WeeklyMarketAccounting>;
    positionAccountingSnapshot?: Maybe<PositionAccountingSnapshot>;
    positionAccountingSnapshots: Array<PositionAccountingSnapshot>;
    protocolHourlyUsage?: Maybe<ProtocolHourlyUsage>;
    protocolHourlyUsages: Array<ProtocolHourlyUsage>;
    protocolDailyUsage?: Maybe<ProtocolDailyUsage>;
    protocolDailyUsages: Array<ProtocolDailyUsage>;
    marketHourlyUsage?: Maybe<MarketHourlyUsage>;
    marketHourlyUsages: Array<MarketHourlyUsage>;
    marketDailyUsage?: Maybe<MarketDailyUsage>;
    marketDailyUsages: Array<MarketDailyUsage>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
    baseToken?: Maybe<BaseToken>;
    baseTokens: Array<BaseToken>;
    collateralToken?: Maybe<CollateralToken>;
    collateralTokens: Array<CollateralToken>;
    marketCollateralBalance?: Maybe<MarketCollateralBalance>;
    marketCollateralBalances: Array<MarketCollateralBalance>;
    positionCollateralBalance?: Maybe<PositionCollateralBalance>;
    positionCollateralBalances: Array<PositionCollateralBalance>;
    account?: Maybe<Account>;
    accounts: Array<Account>;
    activeAccount?: Maybe<_ActiveAccount>;
    activeAccounts: Array<_ActiveAccount>;
    transaction?: Maybe<Transaction>;
    transactions: Array<Transaction>;
    supplyBaseInteraction?: Maybe<SupplyBaseInteraction>;
    supplyBaseInteractions: Array<SupplyBaseInteraction>;
    withdrawBaseInteraction?: Maybe<WithdrawBaseInteraction>;
    withdrawBaseInteractions: Array<WithdrawBaseInteraction>;
    absorbDebtInteraction?: Maybe<AbsorbDebtInteraction>;
    absorbDebtInteractions: Array<AbsorbDebtInteraction>;
    supplyCollateralInteraction?: Maybe<SupplyCollateralInteraction>;
    supplyCollateralInteractions: Array<SupplyCollateralInteraction>;
    withdrawCollateralInteraction?: Maybe<WithdrawCollateralInteraction>;
    withdrawCollateralInteractions: Array<WithdrawCollateralInteraction>;
    transferCollateralInteraction?: Maybe<TransferCollateralInteraction>;
    transferCollateralInteractions: Array<TransferCollateralInteraction>;
    absorbCollateralInteraction?: Maybe<AbsorbCollateralInteraction>;
    absorbCollateralInteractions: Array<AbsorbCollateralInteraction>;
    buyCollateralInteraction?: Maybe<BuyCollateralInteraction>;
    buyCollateralInteractions: Array<BuyCollateralInteraction>;
    withdrawReservesInteraction?: Maybe<WithdrawReservesInteraction>;
    withdrawReservesInteractions: Array<WithdrawReservesInteraction>;
    claimRewardsInteraction?: Maybe<ClaimRewardsInteraction>;
    claimRewardsInteractions: Array<ClaimRewardsInteraction>;
    collateralBalance?: Maybe<CollateralBalance>;
    collateralBalances: Array<CollateralBalance>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
  };

  export type QueryprotocolArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryprotocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Protocol_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Protocol_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Market_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Market_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypositionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketConfigurationArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketConfigurationsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketConfiguration_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketConfiguration_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryprotocolAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryprotocolAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProtocolAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypositionAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypositionAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryusageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryusagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Usage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Usage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryhourlyProtocolAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryhourlyProtocolAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<HourlyProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<HourlyProtocolAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerydailyProtocolAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerydailyProtocolAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DailyProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DailyProtocolAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryweeklyProtocolAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryweeklyProtocolAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WeeklyProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WeeklyProtocolAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketConfigurationSnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketConfigurationSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketConfigurationSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketConfigurationSnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryhourlyMarketAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryhourlyMarketAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<HourlyMarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<HourlyMarketAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerydailyMarketAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerydailyMarketAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DailyMarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DailyMarketAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryweeklyMarketAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryweeklyMarketAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WeeklyMarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WeeklyMarketAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypositionAccountingSnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypositionAccountingSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionAccountingSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionAccountingSnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryprotocolHourlyUsageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryprotocolHourlyUsagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProtocolHourlyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProtocolHourlyUsage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryprotocolDailyUsageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryprotocolDailyUsagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProtocolDailyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProtocolDailyUsage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketHourlyUsageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketHourlyUsagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketHourlyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketHourlyUsage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketDailyUsageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketDailyUsagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketDailyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketDailyUsage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerybaseTokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerybaseTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<BaseToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<BaseToken_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerycollateralTokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerycollateralTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<CollateralToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<CollateralToken_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketCollateralBalanceArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerymarketCollateralBalancesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketCollateralBalance_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketCollateralBalance_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypositionCollateralBalanceArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerypositionCollateralBalancesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionCollateralBalance_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionCollateralBalance_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryaccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryaccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Account_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Account_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryactiveAccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryactiveAccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_ActiveAccount_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_ActiveAccount_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytransactionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transaction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transaction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerysupplyBaseInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerysupplyBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyBaseInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerywithdrawBaseInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerywithdrawBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawBaseInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryabsorbDebtInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryabsorbDebtInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbDebtInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbDebtInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerysupplyCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerysupplyCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerywithdrawCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerywithdrawCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytransferCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytransferCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TransferCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TransferCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryabsorbCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryabsorbCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerybuyCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerybuyCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<BuyCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<BuyCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerywithdrawReservesInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerywithdrawReservesInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawReservesInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawReservesInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryclaimRewardsInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryclaimRewardsInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ClaimRewardsInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ClaimRewardsInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerycollateralBalanceArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerycollateralBalancesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<CollateralBalance_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<CollateralBalance_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type Query_metaArgs = {
    block?: InputMaybe<Block_height>;
  };

  export type Subscription = {
    protocol?: Maybe<Protocol>;
    protocols: Array<Protocol>;
    market?: Maybe<Market>;
    markets: Array<Market>;
    position?: Maybe<Position>;
    positions: Array<Position>;
    marketConfiguration?: Maybe<MarketConfiguration>;
    marketConfigurations: Array<MarketConfiguration>;
    protocolAccounting?: Maybe<ProtocolAccounting>;
    protocolAccountings: Array<ProtocolAccounting>;
    marketAccounting?: Maybe<MarketAccounting>;
    marketAccountings: Array<MarketAccounting>;
    positionAccounting?: Maybe<PositionAccounting>;
    positionAccountings: Array<PositionAccounting>;
    usage?: Maybe<Usage>;
    usages: Array<Usage>;
    hourlyProtocolAccounting?: Maybe<HourlyProtocolAccounting>;
    hourlyProtocolAccountings: Array<HourlyProtocolAccounting>;
    dailyProtocolAccounting?: Maybe<DailyProtocolAccounting>;
    dailyProtocolAccountings: Array<DailyProtocolAccounting>;
    weeklyProtocolAccounting?: Maybe<WeeklyProtocolAccounting>;
    weeklyProtocolAccountings: Array<WeeklyProtocolAccounting>;
    marketConfigurationSnapshot?: Maybe<MarketConfigurationSnapshot>;
    marketConfigurationSnapshots: Array<MarketConfigurationSnapshot>;
    hourlyMarketAccounting?: Maybe<HourlyMarketAccounting>;
    hourlyMarketAccountings: Array<HourlyMarketAccounting>;
    dailyMarketAccounting?: Maybe<DailyMarketAccounting>;
    dailyMarketAccountings: Array<DailyMarketAccounting>;
    weeklyMarketAccounting?: Maybe<WeeklyMarketAccounting>;
    weeklyMarketAccountings: Array<WeeklyMarketAccounting>;
    positionAccountingSnapshot?: Maybe<PositionAccountingSnapshot>;
    positionAccountingSnapshots: Array<PositionAccountingSnapshot>;
    protocolHourlyUsage?: Maybe<ProtocolHourlyUsage>;
    protocolHourlyUsages: Array<ProtocolHourlyUsage>;
    protocolDailyUsage?: Maybe<ProtocolDailyUsage>;
    protocolDailyUsages: Array<ProtocolDailyUsage>;
    marketHourlyUsage?: Maybe<MarketHourlyUsage>;
    marketHourlyUsages: Array<MarketHourlyUsage>;
    marketDailyUsage?: Maybe<MarketDailyUsage>;
    marketDailyUsages: Array<MarketDailyUsage>;
    token?: Maybe<Token>;
    tokens: Array<Token>;
    baseToken?: Maybe<BaseToken>;
    baseTokens: Array<BaseToken>;
    collateralToken?: Maybe<CollateralToken>;
    collateralTokens: Array<CollateralToken>;
    marketCollateralBalance?: Maybe<MarketCollateralBalance>;
    marketCollateralBalances: Array<MarketCollateralBalance>;
    positionCollateralBalance?: Maybe<PositionCollateralBalance>;
    positionCollateralBalances: Array<PositionCollateralBalance>;
    account?: Maybe<Account>;
    accounts: Array<Account>;
    activeAccount?: Maybe<_ActiveAccount>;
    activeAccounts: Array<_ActiveAccount>;
    transaction?: Maybe<Transaction>;
    transactions: Array<Transaction>;
    supplyBaseInteraction?: Maybe<SupplyBaseInteraction>;
    supplyBaseInteractions: Array<SupplyBaseInteraction>;
    withdrawBaseInteraction?: Maybe<WithdrawBaseInteraction>;
    withdrawBaseInteractions: Array<WithdrawBaseInteraction>;
    absorbDebtInteraction?: Maybe<AbsorbDebtInteraction>;
    absorbDebtInteractions: Array<AbsorbDebtInteraction>;
    supplyCollateralInteraction?: Maybe<SupplyCollateralInteraction>;
    supplyCollateralInteractions: Array<SupplyCollateralInteraction>;
    withdrawCollateralInteraction?: Maybe<WithdrawCollateralInteraction>;
    withdrawCollateralInteractions: Array<WithdrawCollateralInteraction>;
    transferCollateralInteraction?: Maybe<TransferCollateralInteraction>;
    transferCollateralInteractions: Array<TransferCollateralInteraction>;
    absorbCollateralInteraction?: Maybe<AbsorbCollateralInteraction>;
    absorbCollateralInteractions: Array<AbsorbCollateralInteraction>;
    buyCollateralInteraction?: Maybe<BuyCollateralInteraction>;
    buyCollateralInteractions: Array<BuyCollateralInteraction>;
    withdrawReservesInteraction?: Maybe<WithdrawReservesInteraction>;
    withdrawReservesInteractions: Array<WithdrawReservesInteraction>;
    claimRewardsInteraction?: Maybe<ClaimRewardsInteraction>;
    claimRewardsInteractions: Array<ClaimRewardsInteraction>;
    collateralBalance?: Maybe<CollateralBalance>;
    collateralBalances: Array<CollateralBalance>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
  };

  export type SubscriptionprotocolArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionprotocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Protocol_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Protocol_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Market_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Market_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpositionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketConfigurationArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketConfigurationsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketConfiguration_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketConfiguration_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionprotocolAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionprotocolAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProtocolAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpositionAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpositionAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionusageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionusagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Usage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Usage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionhourlyProtocolAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionhourlyProtocolAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<HourlyProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<HourlyProtocolAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiondailyProtocolAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiondailyProtocolAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DailyProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DailyProtocolAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionweeklyProtocolAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionweeklyProtocolAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WeeklyProtocolAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WeeklyProtocolAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketConfigurationSnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketConfigurationSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketConfigurationSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketConfigurationSnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionhourlyMarketAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionhourlyMarketAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<HourlyMarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<HourlyMarketAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiondailyMarketAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiondailyMarketAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<DailyMarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<DailyMarketAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionweeklyMarketAccountingArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionweeklyMarketAccountingsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WeeklyMarketAccounting_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WeeklyMarketAccounting_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpositionAccountingSnapshotArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpositionAccountingSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionAccountingSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionAccountingSnapshot_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionprotocolHourlyUsageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionprotocolHourlyUsagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProtocolHourlyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProtocolHourlyUsage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionprotocolDailyUsageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionprotocolDailyUsagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProtocolDailyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProtocolDailyUsage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketHourlyUsageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketHourlyUsagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketHourlyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketHourlyUsage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketDailyUsageArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketDailyUsagesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketDailyUsage_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketDailyUsage_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionbaseTokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionbaseTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<BaseToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<BaseToken_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptioncollateralTokenArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptioncollateralTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<CollateralToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<CollateralToken_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketCollateralBalanceArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionmarketCollateralBalancesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketCollateralBalance_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketCollateralBalance_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpositionCollateralBalanceArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionpositionCollateralBalancesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionCollateralBalance_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionCollateralBalance_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionaccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionaccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Account_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Account_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionactiveAccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionactiveAccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_ActiveAccount_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_ActiveAccount_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontransactionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transaction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transaction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionsupplyBaseInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionsupplyBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyBaseInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionwithdrawBaseInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionwithdrawBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawBaseInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionabsorbDebtInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionabsorbDebtInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbDebtInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbDebtInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionsupplyCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionsupplyCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionwithdrawCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionwithdrawCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontransferCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontransferCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TransferCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TransferCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionabsorbCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionabsorbCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionbuyCollateralInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionbuyCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<BuyCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<BuyCollateralInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionwithdrawReservesInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionwithdrawReservesInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawReservesInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawReservesInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionclaimRewardsInteractionArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionclaimRewardsInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ClaimRewardsInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ClaimRewardsInteraction_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptioncollateralBalanceArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptioncollateralBalancesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<CollateralBalance_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<CollateralBalance_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>;
  };

  export type SupplyBaseInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Market the interaction is with */
    market: Market;
    /** Market the interaction changes */
    position: Position;
    /** Supplied of funds */
    supplier: Scalars['Bytes'];
    /** Asset being supplied */
    asset: BaseToken;
    /** Amount being supplied */
    amount: Scalars['BigInt'];
    /** Amount being supplied in USD */
    amountUsd: Scalars['BigDecimal'];
  };

  export type SupplyBaseInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    supplier?: InputMaybe<Scalars['Bytes']>;
    supplier_not?: InputMaybe<Scalars['Bytes']>;
    supplier_in?: InputMaybe<Array<Scalars['Bytes']>>;
    supplier_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    supplier_contains?: InputMaybe<Scalars['Bytes']>;
    supplier_not_contains?: InputMaybe<Scalars['Bytes']>;
    asset?: InputMaybe<Scalars['String']>;
    asset_not?: InputMaybe<Scalars['String']>;
    asset_gt?: InputMaybe<Scalars['String']>;
    asset_lt?: InputMaybe<Scalars['String']>;
    asset_gte?: InputMaybe<Scalars['String']>;
    asset_lte?: InputMaybe<Scalars['String']>;
    asset_in?: InputMaybe<Array<Scalars['String']>>;
    asset_not_in?: InputMaybe<Array<Scalars['String']>>;
    asset_contains?: InputMaybe<Scalars['String']>;
    asset_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_not_contains?: InputMaybe<Scalars['String']>;
    asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_starts_with?: InputMaybe<Scalars['String']>;
    asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_starts_with?: InputMaybe<Scalars['String']>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_ends_with?: InputMaybe<Scalars['String']>;
    asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_ends_with?: InputMaybe<Scalars['String']>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_?: InputMaybe<BaseToken_filter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUsd?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type SupplyBaseInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'market'
    | 'position'
    | 'supplier'
    | 'asset'
    | 'amount'
    | 'amountUsd';

  export type SupplyCollateralInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Market the interaction is with */
    market: Market;
    /** Position the interaction is with */
    position: Position;
    /** Supplier of the collateral */
    supplier: Scalars['Bytes'];
    /** Asset being supplied */
    asset: CollateralToken;
    /** Amount supplied */
    amount: Scalars['BigInt'];
    /** Amount supplied in USD */
    amountUsd: Scalars['BigDecimal'];
  };

  export type SupplyCollateralInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    supplier?: InputMaybe<Scalars['Bytes']>;
    supplier_not?: InputMaybe<Scalars['Bytes']>;
    supplier_in?: InputMaybe<Array<Scalars['Bytes']>>;
    supplier_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    supplier_contains?: InputMaybe<Scalars['Bytes']>;
    supplier_not_contains?: InputMaybe<Scalars['Bytes']>;
    asset?: InputMaybe<Scalars['String']>;
    asset_not?: InputMaybe<Scalars['String']>;
    asset_gt?: InputMaybe<Scalars['String']>;
    asset_lt?: InputMaybe<Scalars['String']>;
    asset_gte?: InputMaybe<Scalars['String']>;
    asset_lte?: InputMaybe<Scalars['String']>;
    asset_in?: InputMaybe<Array<Scalars['String']>>;
    asset_not_in?: InputMaybe<Array<Scalars['String']>>;
    asset_contains?: InputMaybe<Scalars['String']>;
    asset_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_not_contains?: InputMaybe<Scalars['String']>;
    asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_starts_with?: InputMaybe<Scalars['String']>;
    asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_starts_with?: InputMaybe<Scalars['String']>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_ends_with?: InputMaybe<Scalars['String']>;
    asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_ends_with?: InputMaybe<Scalars['String']>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_?: InputMaybe<CollateralToken_filter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUsd?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type SupplyCollateralInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'market'
    | 'position'
    | 'supplier'
    | 'asset'
    | 'amount'
    | 'amountUsd';

  export type Token = {
    /** Token address */
    id: Scalars['Bytes'];
    /** Token address */
    address: Scalars['Bytes'];
    /** Token name */
    name: Scalars['String'];
    /** Token symbol */
    symbol: Scalars['String'];
    /** Token decimals */
    decimals?: Maybe<Scalars['Int']>;
    /** Last token price in USD */
    lastPriceUsd: Scalars['BigDecimal'];
    /** Block of the last token price update */
    lastPriceBlockNumber: Scalars['BigInt'];
  };

  export type Token_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    address?: InputMaybe<Scalars['Bytes']>;
    address_not?: InputMaybe<Scalars['Bytes']>;
    address_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_contains?: InputMaybe<Scalars['Bytes']>;
    address_not_contains?: InputMaybe<Scalars['Bytes']>;
    name?: InputMaybe<Scalars['String']>;
    name_not?: InputMaybe<Scalars['String']>;
    name_gt?: InputMaybe<Scalars['String']>;
    name_lt?: InputMaybe<Scalars['String']>;
    name_gte?: InputMaybe<Scalars['String']>;
    name_lte?: InputMaybe<Scalars['String']>;
    name_in?: InputMaybe<Array<Scalars['String']>>;
    name_not_in?: InputMaybe<Array<Scalars['String']>>;
    name_contains?: InputMaybe<Scalars['String']>;
    name_contains_nocase?: InputMaybe<Scalars['String']>;
    name_not_contains?: InputMaybe<Scalars['String']>;
    name_not_contains_nocase?: InputMaybe<Scalars['String']>;
    name_starts_with?: InputMaybe<Scalars['String']>;
    name_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_starts_with?: InputMaybe<Scalars['String']>;
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    name_ends_with?: InputMaybe<Scalars['String']>;
    name_ends_with_nocase?: InputMaybe<Scalars['String']>;
    name_not_ends_with?: InputMaybe<Scalars['String']>;
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol?: InputMaybe<Scalars['String']>;
    symbol_not?: InputMaybe<Scalars['String']>;
    symbol_gt?: InputMaybe<Scalars['String']>;
    symbol_lt?: InputMaybe<Scalars['String']>;
    symbol_gte?: InputMaybe<Scalars['String']>;
    symbol_lte?: InputMaybe<Scalars['String']>;
    symbol_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
    symbol_contains?: InputMaybe<Scalars['String']>;
    symbol_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_contains?: InputMaybe<Scalars['String']>;
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    symbol_starts_with?: InputMaybe<Scalars['String']>;
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with?: InputMaybe<Scalars['String']>;
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_ends_with?: InputMaybe<Scalars['String']>;
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with?: InputMaybe<Scalars['String']>;
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    decimals?: InputMaybe<Scalars['Int']>;
    decimals_not?: InputMaybe<Scalars['Int']>;
    decimals_gt?: InputMaybe<Scalars['Int']>;
    decimals_lt?: InputMaybe<Scalars['Int']>;
    decimals_gte?: InputMaybe<Scalars['Int']>;
    decimals_lte?: InputMaybe<Scalars['Int']>;
    decimals_in?: InputMaybe<Array<Scalars['Int']>>;
    decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
    lastPriceUsd?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    lastPriceUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastPriceUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Token_orderBy =
    | 'id'
    | 'address'
    | 'name'
    | 'symbol'
    | 'decimals'
    | 'lastPriceUsd'
    | 'lastPriceBlockNumber';

  export type Transaction = {
    /** Transaction hash */
    id: Scalars['Bytes'];
    /** Transaction hash */
    hash: Scalars['Bytes'];
    /** Block number transaction is part of */
    blockNumber: Scalars['BigInt'];
    /** Timestamp of the transaction */
    timestamp: Scalars['BigInt'];
    /** Address the transaction is from */
    from: Scalars['Bytes'];
    /** Address the transaction is to */
    to?: Maybe<Scalars['Bytes']>;
    /** Gas limit for the transaction */
    gasLimit: Scalars['BigInt'];
    /** Gas price for the transaction */
    gasPrice: Scalars['BigInt'];
    /** Amount of gas used */
    gasUsed?: Maybe<Scalars['BigInt']>;
    /** Amount of gas used in USD */
    gasUsedUsd?: Maybe<Scalars['BigDecimal']>;
    supplyBaseInteractionCount: Scalars['Int'];
    withdrawBaseInteractionCount: Scalars['Int'];
    absorbDebtInteractionCount: Scalars['Int'];
    supplyCollateralInteractionCount: Scalars['Int'];
    withdrawCollateralInteractionCount: Scalars['Int'];
    transferCollateralInteractionCount: Scalars['Int'];
    absorbCollateralInteractionCount: Scalars['Int'];
    buyCollateralInteractionCount: Scalars['Int'];
    withdrawReservesInteractionCount: Scalars['Int'];
    claimRewardsInteractionCount: Scalars['Int'];
    /** All supply base interaction that were part of this transaction */
    supplyBaseInteractions: Array<SupplyBaseInteraction>;
    /** All withdraw base interaction that were part of this transaction */
    withdrawBaseInteractions: Array<WithdrawBaseInteraction>;
    /** All absorb debt interaction that were part of this transaction */
    absorbDebtInteractions: Array<AbsorbDebtInteraction>;
    /** All supply collateral interaction that were part of this transaction */
    supplyCollateralInteractions: Array<SupplyCollateralInteraction>;
    /** All withdraw collateral interaction that were part of this transaction */
    withdrawCollateralInteractions: Array<WithdrawCollateralInteraction>;
    /** All transfer collateral interaction that were part of this transaction */
    transferCollateralInteractions: Array<TransferCollateralInteraction>;
    /** All absorb collateral interaction that were part of this transaction */
    absorbCollateralInteractions: Array<AbsorbCollateralInteraction>;
    /** All buy collateral interaction that were part of this transaction */
    buyCollateralInteractions: Array<BuyCollateralInteraction>;
    /** All withdraw reserves interaction that were part of this transaction */
    withdrawReservesInteractions: Array<WithdrawReservesInteraction>;
    /** All claim rewards interaction that were part of this transaction */
    claimRewardsInteractions: Array<ClaimRewardsInteraction>;
  };

  export type TransactionsupplyBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyBaseInteraction_filter>;
  };

  export type TransactionwithdrawBaseInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawBaseInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawBaseInteraction_filter>;
  };

  export type TransactionabsorbDebtInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbDebtInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbDebtInteraction_filter>;
  };

  export type TransactionsupplyCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<SupplyCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<SupplyCollateralInteraction_filter>;
  };

  export type TransactionwithdrawCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawCollateralInteraction_filter>;
  };

  export type TransactiontransferCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<TransferCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<TransferCollateralInteraction_filter>;
  };

  export type TransactionabsorbCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<AbsorbCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AbsorbCollateralInteraction_filter>;
  };

  export type TransactionbuyCollateralInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<BuyCollateralInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<BuyCollateralInteraction_filter>;
  };

  export type TransactionwithdrawReservesInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<WithdrawReservesInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<WithdrawReservesInteraction_filter>;
  };

  export type TransactionclaimRewardsInteractionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ClaimRewardsInteraction_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ClaimRewardsInteraction_filter>;
  };

  export type Transaction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    from?: InputMaybe<Scalars['Bytes']>;
    from_not?: InputMaybe<Scalars['Bytes']>;
    from_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    from_contains?: InputMaybe<Scalars['Bytes']>;
    from_not_contains?: InputMaybe<Scalars['Bytes']>;
    to?: InputMaybe<Scalars['Bytes']>;
    to_not?: InputMaybe<Scalars['Bytes']>;
    to_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    to_contains?: InputMaybe<Scalars['Bytes']>;
    to_not_contains?: InputMaybe<Scalars['Bytes']>;
    gasLimit?: InputMaybe<Scalars['BigInt']>;
    gasLimit_not?: InputMaybe<Scalars['BigInt']>;
    gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
    gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
    gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
    gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
    gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasPrice?: InputMaybe<Scalars['BigInt']>;
    gasPrice_not?: InputMaybe<Scalars['BigInt']>;
    gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
    gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
    gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
    gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
    gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasUsed?: InputMaybe<Scalars['BigInt']>;
    gasUsed_not?: InputMaybe<Scalars['BigInt']>;
    gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
    gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
    gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
    gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
    gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    gasUsedUsd?: InputMaybe<Scalars['BigDecimal']>;
    gasUsedUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    gasUsedUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    gasUsedUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    gasUsedUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    gasUsedUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    gasUsedUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    gasUsedUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    supplyBaseInteractionCount?: InputMaybe<Scalars['Int']>;
    supplyBaseInteractionCount_not?: InputMaybe<Scalars['Int']>;
    supplyBaseInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    supplyBaseInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    supplyBaseInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    supplyBaseInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    supplyBaseInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    supplyBaseInteractionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawBaseInteractionCount?: InputMaybe<Scalars['Int']>;
    withdrawBaseInteractionCount_not?: InputMaybe<Scalars['Int']>;
    withdrawBaseInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    withdrawBaseInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    withdrawBaseInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    withdrawBaseInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    withdrawBaseInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawBaseInteractionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    absorbDebtInteractionCount?: InputMaybe<Scalars['Int']>;
    absorbDebtInteractionCount_not?: InputMaybe<Scalars['Int']>;
    absorbDebtInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    absorbDebtInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    absorbDebtInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    absorbDebtInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    absorbDebtInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    absorbDebtInteractionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    supplyCollateralInteractionCount?: InputMaybe<Scalars['Int']>;
    supplyCollateralInteractionCount_not?: InputMaybe<Scalars['Int']>;
    supplyCollateralInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    supplyCollateralInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    supplyCollateralInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    supplyCollateralInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    supplyCollateralInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    supplyCollateralInteractionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawCollateralInteractionCount?: InputMaybe<Scalars['Int']>;
    withdrawCollateralInteractionCount_not?: InputMaybe<Scalars['Int']>;
    withdrawCollateralInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    withdrawCollateralInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    withdrawCollateralInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    withdrawCollateralInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    withdrawCollateralInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawCollateralInteractionCount_not_in?: InputMaybe<
      Array<Scalars['Int']>
    >;
    transferCollateralInteractionCount?: InputMaybe<Scalars['Int']>;
    transferCollateralInteractionCount_not?: InputMaybe<Scalars['Int']>;
    transferCollateralInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    transferCollateralInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    transferCollateralInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    transferCollateralInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    transferCollateralInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    transferCollateralInteractionCount_not_in?: InputMaybe<
      Array<Scalars['Int']>
    >;
    absorbCollateralInteractionCount?: InputMaybe<Scalars['Int']>;
    absorbCollateralInteractionCount_not?: InputMaybe<Scalars['Int']>;
    absorbCollateralInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    absorbCollateralInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    absorbCollateralInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    absorbCollateralInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    absorbCollateralInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    absorbCollateralInteractionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    buyCollateralInteractionCount?: InputMaybe<Scalars['Int']>;
    buyCollateralInteractionCount_not?: InputMaybe<Scalars['Int']>;
    buyCollateralInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    buyCollateralInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    buyCollateralInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    buyCollateralInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    buyCollateralInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    buyCollateralInteractionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawReservesInteractionCount?: InputMaybe<Scalars['Int']>;
    withdrawReservesInteractionCount_not?: InputMaybe<Scalars['Int']>;
    withdrawReservesInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    withdrawReservesInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    withdrawReservesInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    withdrawReservesInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    withdrawReservesInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    withdrawReservesInteractionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    claimRewardsInteractionCount?: InputMaybe<Scalars['Int']>;
    claimRewardsInteractionCount_not?: InputMaybe<Scalars['Int']>;
    claimRewardsInteractionCount_gt?: InputMaybe<Scalars['Int']>;
    claimRewardsInteractionCount_lt?: InputMaybe<Scalars['Int']>;
    claimRewardsInteractionCount_gte?: InputMaybe<Scalars['Int']>;
    claimRewardsInteractionCount_lte?: InputMaybe<Scalars['Int']>;
    claimRewardsInteractionCount_in?: InputMaybe<Array<Scalars['Int']>>;
    claimRewardsInteractionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    supplyBaseInteractions_?: InputMaybe<SupplyBaseInteraction_filter>;
    withdrawBaseInteractions_?: InputMaybe<WithdrawBaseInteraction_filter>;
    absorbDebtInteractions_?: InputMaybe<AbsorbDebtInteraction_filter>;
    supplyCollateralInteractions_?: InputMaybe<SupplyCollateralInteraction_filter>;
    withdrawCollateralInteractions_?: InputMaybe<WithdrawCollateralInteraction_filter>;
    transferCollateralInteractions_?: InputMaybe<TransferCollateralInteraction_filter>;
    absorbCollateralInteractions_?: InputMaybe<AbsorbCollateralInteraction_filter>;
    buyCollateralInteractions_?: InputMaybe<BuyCollateralInteraction_filter>;
    withdrawReservesInteractions_?: InputMaybe<WithdrawReservesInteraction_filter>;
    claimRewardsInteractions_?: InputMaybe<ClaimRewardsInteraction_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Transaction_orderBy =
    | 'id'
    | 'hash'
    | 'blockNumber'
    | 'timestamp'
    | 'from'
    | 'to'
    | 'gasLimit'
    | 'gasPrice'
    | 'gasUsed'
    | 'gasUsedUsd'
    | 'supplyBaseInteractionCount'
    | 'withdrawBaseInteractionCount'
    | 'absorbDebtInteractionCount'
    | 'supplyCollateralInteractionCount'
    | 'withdrawCollateralInteractionCount'
    | 'transferCollateralInteractionCount'
    | 'absorbCollateralInteractionCount'
    | 'buyCollateralInteractionCount'
    | 'withdrawReservesInteractionCount'
    | 'claimRewardsInteractionCount'
    | 'supplyBaseInteractions'
    | 'withdrawBaseInteractions'
    | 'absorbDebtInteractions'
    | 'supplyCollateralInteractions'
    | 'withdrawCollateralInteractions'
    | 'transferCollateralInteractions'
    | 'absorbCollateralInteractions'
    | 'buyCollateralInteractions'
    | 'withdrawReservesInteractions'
    | 'claimRewardsInteractions';

  export type TransferCollateralInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Market the interaction is with */
    market: Market;
    /** Position the transfer is from */
    fromPosition: Position;
    /** Position the transfer is to */
    toPosition: Position;
    /** Asset being transferred */
    asset: CollateralToken;
    /** Amount being transferred */
    amount: Scalars['BigInt'];
    /** Amount being transferred in USD */
    amountUsd: Scalars['BigDecimal'];
  };

  export type TransferCollateralInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    fromPosition?: InputMaybe<Scalars['String']>;
    fromPosition_not?: InputMaybe<Scalars['String']>;
    fromPosition_gt?: InputMaybe<Scalars['String']>;
    fromPosition_lt?: InputMaybe<Scalars['String']>;
    fromPosition_gte?: InputMaybe<Scalars['String']>;
    fromPosition_lte?: InputMaybe<Scalars['String']>;
    fromPosition_in?: InputMaybe<Array<Scalars['String']>>;
    fromPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
    fromPosition_contains?: InputMaybe<Scalars['String']>;
    fromPosition_contains_nocase?: InputMaybe<Scalars['String']>;
    fromPosition_not_contains?: InputMaybe<Scalars['String']>;
    fromPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
    fromPosition_starts_with?: InputMaybe<Scalars['String']>;
    fromPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fromPosition_not_starts_with?: InputMaybe<Scalars['String']>;
    fromPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    fromPosition_ends_with?: InputMaybe<Scalars['String']>;
    fromPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fromPosition_not_ends_with?: InputMaybe<Scalars['String']>;
    fromPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    fromPosition_?: InputMaybe<Position_filter>;
    toPosition?: InputMaybe<Scalars['String']>;
    toPosition_not?: InputMaybe<Scalars['String']>;
    toPosition_gt?: InputMaybe<Scalars['String']>;
    toPosition_lt?: InputMaybe<Scalars['String']>;
    toPosition_gte?: InputMaybe<Scalars['String']>;
    toPosition_lte?: InputMaybe<Scalars['String']>;
    toPosition_in?: InputMaybe<Array<Scalars['String']>>;
    toPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
    toPosition_contains?: InputMaybe<Scalars['String']>;
    toPosition_contains_nocase?: InputMaybe<Scalars['String']>;
    toPosition_not_contains?: InputMaybe<Scalars['String']>;
    toPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
    toPosition_starts_with?: InputMaybe<Scalars['String']>;
    toPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
    toPosition_not_starts_with?: InputMaybe<Scalars['String']>;
    toPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    toPosition_ends_with?: InputMaybe<Scalars['String']>;
    toPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
    toPosition_not_ends_with?: InputMaybe<Scalars['String']>;
    toPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    toPosition_?: InputMaybe<Position_filter>;
    asset?: InputMaybe<Scalars['String']>;
    asset_not?: InputMaybe<Scalars['String']>;
    asset_gt?: InputMaybe<Scalars['String']>;
    asset_lt?: InputMaybe<Scalars['String']>;
    asset_gte?: InputMaybe<Scalars['String']>;
    asset_lte?: InputMaybe<Scalars['String']>;
    asset_in?: InputMaybe<Array<Scalars['String']>>;
    asset_not_in?: InputMaybe<Array<Scalars['String']>>;
    asset_contains?: InputMaybe<Scalars['String']>;
    asset_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_not_contains?: InputMaybe<Scalars['String']>;
    asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_starts_with?: InputMaybe<Scalars['String']>;
    asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_starts_with?: InputMaybe<Scalars['String']>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_ends_with?: InputMaybe<Scalars['String']>;
    asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_ends_with?: InputMaybe<Scalars['String']>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_?: InputMaybe<CollateralToken_filter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUsd?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type TransferCollateralInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'market'
    | 'fromPosition'
    | 'toPosition'
    | 'asset'
    | 'amount'
    | 'amountUsd';

  export type Usage = {
    /** Name + time qualifier (ex: PROTOCOL_HOUR + hour) */
    id: Scalars['Bytes'];
    /** Protocol the usage is for */
    protocol: Protocol;
    /** Number of unique users */
    uniqueUsersCount: Scalars['BigInt'];
    /** Number of interactions */
    interactionCount: Scalars['BigInt'];
    /** Number of base supply interactions */
    supplyBaseCount: Scalars['BigInt'];
    /** Number of base withdraw interactions */
    withdrawBaseCount: Scalars['BigInt'];
    /** Number of liquidation interactions */
    liquidationCount: Scalars['BigInt'];
    /** Number of supply collateral interactions */
    supplyCollateralCount: Scalars['BigInt'];
    /** Number of withdraw collateral interactions */
    withdrawCollateralCount: Scalars['BigInt'];
    /** Number of transfer collateral interactions */
    transferCollateralCount: Scalars['BigInt'];
  };

  export type Usage_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Protocol_filter>;
    uniqueUsersCount?: InputMaybe<Scalars['BigInt']>;
    uniqueUsersCount_not?: InputMaybe<Scalars['BigInt']>;
    uniqueUsersCount_gt?: InputMaybe<Scalars['BigInt']>;
    uniqueUsersCount_lt?: InputMaybe<Scalars['BigInt']>;
    uniqueUsersCount_gte?: InputMaybe<Scalars['BigInt']>;
    uniqueUsersCount_lte?: InputMaybe<Scalars['BigInt']>;
    uniqueUsersCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    uniqueUsersCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    interactionCount?: InputMaybe<Scalars['BigInt']>;
    interactionCount_not?: InputMaybe<Scalars['BigInt']>;
    interactionCount_gt?: InputMaybe<Scalars['BigInt']>;
    interactionCount_lt?: InputMaybe<Scalars['BigInt']>;
    interactionCount_gte?: InputMaybe<Scalars['BigInt']>;
    interactionCount_lte?: InputMaybe<Scalars['BigInt']>;
    interactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    interactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    supplyBaseCount?: InputMaybe<Scalars['BigInt']>;
    supplyBaseCount_not?: InputMaybe<Scalars['BigInt']>;
    supplyBaseCount_gt?: InputMaybe<Scalars['BigInt']>;
    supplyBaseCount_lt?: InputMaybe<Scalars['BigInt']>;
    supplyBaseCount_gte?: InputMaybe<Scalars['BigInt']>;
    supplyBaseCount_lte?: InputMaybe<Scalars['BigInt']>;
    supplyBaseCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    supplyBaseCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    withdrawBaseCount?: InputMaybe<Scalars['BigInt']>;
    withdrawBaseCount_not?: InputMaybe<Scalars['BigInt']>;
    withdrawBaseCount_gt?: InputMaybe<Scalars['BigInt']>;
    withdrawBaseCount_lt?: InputMaybe<Scalars['BigInt']>;
    withdrawBaseCount_gte?: InputMaybe<Scalars['BigInt']>;
    withdrawBaseCount_lte?: InputMaybe<Scalars['BigInt']>;
    withdrawBaseCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    withdrawBaseCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidationCount?: InputMaybe<Scalars['BigInt']>;
    liquidationCount_not?: InputMaybe<Scalars['BigInt']>;
    liquidationCount_gt?: InputMaybe<Scalars['BigInt']>;
    liquidationCount_lt?: InputMaybe<Scalars['BigInt']>;
    liquidationCount_gte?: InputMaybe<Scalars['BigInt']>;
    liquidationCount_lte?: InputMaybe<Scalars['BigInt']>;
    liquidationCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    liquidationCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    supplyCollateralCount?: InputMaybe<Scalars['BigInt']>;
    supplyCollateralCount_not?: InputMaybe<Scalars['BigInt']>;
    supplyCollateralCount_gt?: InputMaybe<Scalars['BigInt']>;
    supplyCollateralCount_lt?: InputMaybe<Scalars['BigInt']>;
    supplyCollateralCount_gte?: InputMaybe<Scalars['BigInt']>;
    supplyCollateralCount_lte?: InputMaybe<Scalars['BigInt']>;
    supplyCollateralCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    supplyCollateralCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    withdrawCollateralCount?: InputMaybe<Scalars['BigInt']>;
    withdrawCollateralCount_not?: InputMaybe<Scalars['BigInt']>;
    withdrawCollateralCount_gt?: InputMaybe<Scalars['BigInt']>;
    withdrawCollateralCount_lt?: InputMaybe<Scalars['BigInt']>;
    withdrawCollateralCount_gte?: InputMaybe<Scalars['BigInt']>;
    withdrawCollateralCount_lte?: InputMaybe<Scalars['BigInt']>;
    withdrawCollateralCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    withdrawCollateralCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transferCollateralCount?: InputMaybe<Scalars['BigInt']>;
    transferCollateralCount_not?: InputMaybe<Scalars['BigInt']>;
    transferCollateralCount_gt?: InputMaybe<Scalars['BigInt']>;
    transferCollateralCount_lt?: InputMaybe<Scalars['BigInt']>;
    transferCollateralCount_gte?: InputMaybe<Scalars['BigInt']>;
    transferCollateralCount_lte?: InputMaybe<Scalars['BigInt']>;
    transferCollateralCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transferCollateralCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Usage_orderBy =
    | 'id'
    | 'protocol'
    | 'uniqueUsersCount'
    | 'interactionCount'
    | 'supplyBaseCount'
    | 'withdrawBaseCount'
    | 'liquidationCount'
    | 'supplyCollateralCount'
    | 'withdrawCollateralCount'
    | 'transferCollateralCount';

  export type WeeklyMarketAccounting = {
    /** Market ID + week */
    id: Scalars['Bytes'];
    /** Weeks since unix epoch */
    week: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Market the accounting if for */
    market: Market;
    /** Accounting snapshot */
    accounting: MarketAccounting;
  };

  export type WeeklyMarketAccounting_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    week?: InputMaybe<Scalars['BigInt']>;
    week_not?: InputMaybe<Scalars['BigInt']>;
    week_gt?: InputMaybe<Scalars['BigInt']>;
    week_lt?: InputMaybe<Scalars['BigInt']>;
    week_gte?: InputMaybe<Scalars['BigInt']>;
    week_lte?: InputMaybe<Scalars['BigInt']>;
    week_in?: InputMaybe<Array<Scalars['BigInt']>>;
    week_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<MarketAccounting_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type WeeklyMarketAccounting_orderBy =
    | 'id'
    | 'week'
    | 'timestamp'
    | 'market'
    | 'accounting';

  export type WeeklyProtocolAccounting = {
    /** Week */
    id: Scalars['Bytes'];
    /** Week since unix epoch */
    week: Scalars['BigInt'];
    /** Seconds since unix epoch */
    timestamp: Scalars['BigInt'];
    /** Protocol the accounting if for */
    protocol: Protocol;
    /** Accounting snapshot */
    accounting: ProtocolAccounting;
  };

  export type WeeklyProtocolAccounting_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    week?: InputMaybe<Scalars['BigInt']>;
    week_not?: InputMaybe<Scalars['BigInt']>;
    week_gt?: InputMaybe<Scalars['BigInt']>;
    week_lt?: InputMaybe<Scalars['BigInt']>;
    week_gte?: InputMaybe<Scalars['BigInt']>;
    week_lte?: InputMaybe<Scalars['BigInt']>;
    week_in?: InputMaybe<Array<Scalars['BigInt']>>;
    week_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    protocol?: InputMaybe<Scalars['String']>;
    protocol_not?: InputMaybe<Scalars['String']>;
    protocol_gt?: InputMaybe<Scalars['String']>;
    protocol_lt?: InputMaybe<Scalars['String']>;
    protocol_gte?: InputMaybe<Scalars['String']>;
    protocol_lte?: InputMaybe<Scalars['String']>;
    protocol_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
    protocol_contains?: InputMaybe<Scalars['String']>;
    protocol_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_contains?: InputMaybe<Scalars['String']>;
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
    protocol_starts_with?: InputMaybe<Scalars['String']>;
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with?: InputMaybe<Scalars['String']>;
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_ends_with?: InputMaybe<Scalars['String']>;
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with?: InputMaybe<Scalars['String']>;
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    protocol_?: InputMaybe<Protocol_filter>;
    accounting?: InputMaybe<Scalars['String']>;
    accounting_not?: InputMaybe<Scalars['String']>;
    accounting_gt?: InputMaybe<Scalars['String']>;
    accounting_lt?: InputMaybe<Scalars['String']>;
    accounting_gte?: InputMaybe<Scalars['String']>;
    accounting_lte?: InputMaybe<Scalars['String']>;
    accounting_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_not_in?: InputMaybe<Array<Scalars['String']>>;
    accounting_contains?: InputMaybe<Scalars['String']>;
    accounting_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_contains?: InputMaybe<Scalars['String']>;
    accounting_not_contains_nocase?: InputMaybe<Scalars['String']>;
    accounting_starts_with?: InputMaybe<Scalars['String']>;
    accounting_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with?: InputMaybe<Scalars['String']>;
    accounting_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_ends_with?: InputMaybe<Scalars['String']>;
    accounting_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with?: InputMaybe<Scalars['String']>;
    accounting_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    accounting_?: InputMaybe<ProtocolAccounting_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type WeeklyProtocolAccounting_orderBy =
    | 'id'
    | 'week'
    | 'timestamp'
    | 'protocol'
    | 'accounting';

  export type WithdrawBaseInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Market the interaction is with */
    market: Market;
    /** Position the interaction is with */
    position: Position;
    /** Where the funds are being withdrawn to */
    destination: Scalars['Bytes'];
    /** Asset being withdrawn */
    asset: BaseToken;
    /** Amount being withdrawn */
    amount: Scalars['BigInt'];
    /** Amount being withdrawn in USD */
    amountUsd: Scalars['BigDecimal'];
  };

  export type WithdrawBaseInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    destination?: InputMaybe<Scalars['Bytes']>;
    destination_not?: InputMaybe<Scalars['Bytes']>;
    destination_in?: InputMaybe<Array<Scalars['Bytes']>>;
    destination_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    destination_contains?: InputMaybe<Scalars['Bytes']>;
    destination_not_contains?: InputMaybe<Scalars['Bytes']>;
    asset?: InputMaybe<Scalars['String']>;
    asset_not?: InputMaybe<Scalars['String']>;
    asset_gt?: InputMaybe<Scalars['String']>;
    asset_lt?: InputMaybe<Scalars['String']>;
    asset_gte?: InputMaybe<Scalars['String']>;
    asset_lte?: InputMaybe<Scalars['String']>;
    asset_in?: InputMaybe<Array<Scalars['String']>>;
    asset_not_in?: InputMaybe<Array<Scalars['String']>>;
    asset_contains?: InputMaybe<Scalars['String']>;
    asset_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_not_contains?: InputMaybe<Scalars['String']>;
    asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_starts_with?: InputMaybe<Scalars['String']>;
    asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_starts_with?: InputMaybe<Scalars['String']>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_ends_with?: InputMaybe<Scalars['String']>;
    asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_ends_with?: InputMaybe<Scalars['String']>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_?: InputMaybe<BaseToken_filter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUsd?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type WithdrawBaseInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'market'
    | 'position'
    | 'destination'
    | 'asset'
    | 'amount'
    | 'amountUsd';

  export type WithdrawCollateralInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Market the interaction is with */
    market: Market;
    /** Position the interaction is with */
    position: Position;
    /** Where the assets are being withdrawn to */
    destination: Scalars['Bytes'];
    /** Asset being withdrawn */
    asset: CollateralToken;
    /** Asset being withdrawn */
    amount: Scalars['BigInt'];
    /** Asset being withdrawn in USD */
    amountUsd: Scalars['BigDecimal'];
  };

  export type WithdrawCollateralInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    position?: InputMaybe<Scalars['String']>;
    position_not?: InputMaybe<Scalars['String']>;
    position_gt?: InputMaybe<Scalars['String']>;
    position_lt?: InputMaybe<Scalars['String']>;
    position_gte?: InputMaybe<Scalars['String']>;
    position_lte?: InputMaybe<Scalars['String']>;
    position_in?: InputMaybe<Array<Scalars['String']>>;
    position_not_in?: InputMaybe<Array<Scalars['String']>>;
    position_contains?: InputMaybe<Scalars['String']>;
    position_contains_nocase?: InputMaybe<Scalars['String']>;
    position_not_contains?: InputMaybe<Scalars['String']>;
    position_not_contains_nocase?: InputMaybe<Scalars['String']>;
    position_starts_with?: InputMaybe<Scalars['String']>;
    position_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_starts_with?: InputMaybe<Scalars['String']>;
    position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    position_ends_with?: InputMaybe<Scalars['String']>;
    position_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_not_ends_with?: InputMaybe<Scalars['String']>;
    position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    position_?: InputMaybe<Position_filter>;
    destination?: InputMaybe<Scalars['Bytes']>;
    destination_not?: InputMaybe<Scalars['Bytes']>;
    destination_in?: InputMaybe<Array<Scalars['Bytes']>>;
    destination_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    destination_contains?: InputMaybe<Scalars['Bytes']>;
    destination_not_contains?: InputMaybe<Scalars['Bytes']>;
    asset?: InputMaybe<Scalars['String']>;
    asset_not?: InputMaybe<Scalars['String']>;
    asset_gt?: InputMaybe<Scalars['String']>;
    asset_lt?: InputMaybe<Scalars['String']>;
    asset_gte?: InputMaybe<Scalars['String']>;
    asset_lte?: InputMaybe<Scalars['String']>;
    asset_in?: InputMaybe<Array<Scalars['String']>>;
    asset_not_in?: InputMaybe<Array<Scalars['String']>>;
    asset_contains?: InputMaybe<Scalars['String']>;
    asset_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_not_contains?: InputMaybe<Scalars['String']>;
    asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
    asset_starts_with?: InputMaybe<Scalars['String']>;
    asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_starts_with?: InputMaybe<Scalars['String']>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    asset_ends_with?: InputMaybe<Scalars['String']>;
    asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_not_ends_with?: InputMaybe<Scalars['String']>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    asset_?: InputMaybe<CollateralToken_filter>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUsd?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type WithdrawCollateralInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'market'
    | 'position'
    | 'destination'
    | 'asset'
    | 'amount'
    | 'amountUsd';

  export type WithdrawReservesInteraction = {
    /** Transaction ID + event log index */
    id: Scalars['Bytes'];
    /** Transaction this interaction is part of */
    transaction: Transaction;
    /** Market the interaction is with */
    market: Market;
    /** Destination of the reserves */
    destination: Scalars['Bytes'];
    /** Amount of base reserves being withdrawn */
    amount: Scalars['BigInt'];
    /** Amount of base reserves being withdrawn in USD */
    amountUsd: Scalars['BigDecimal'];
  };

  export type WithdrawReservesInteraction_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    transaction?: InputMaybe<Scalars['String']>;
    transaction_not?: InputMaybe<Scalars['String']>;
    transaction_gt?: InputMaybe<Scalars['String']>;
    transaction_lt?: InputMaybe<Scalars['String']>;
    transaction_gte?: InputMaybe<Scalars['String']>;
    transaction_lte?: InputMaybe<Scalars['String']>;
    transaction_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
    transaction_contains?: InputMaybe<Scalars['String']>;
    transaction_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_contains?: InputMaybe<Scalars['String']>;
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
    transaction_starts_with?: InputMaybe<Scalars['String']>;
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with?: InputMaybe<Scalars['String']>;
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_ends_with?: InputMaybe<Scalars['String']>;
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with?: InputMaybe<Scalars['String']>;
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    transaction_?: InputMaybe<Transaction_filter>;
    market?: InputMaybe<Scalars['String']>;
    market_not?: InputMaybe<Scalars['String']>;
    market_gt?: InputMaybe<Scalars['String']>;
    market_lt?: InputMaybe<Scalars['String']>;
    market_gte?: InputMaybe<Scalars['String']>;
    market_lte?: InputMaybe<Scalars['String']>;
    market_in?: InputMaybe<Array<Scalars['String']>>;
    market_not_in?: InputMaybe<Array<Scalars['String']>>;
    market_contains?: InputMaybe<Scalars['String']>;
    market_contains_nocase?: InputMaybe<Scalars['String']>;
    market_not_contains?: InputMaybe<Scalars['String']>;
    market_not_contains_nocase?: InputMaybe<Scalars['String']>;
    market_starts_with?: InputMaybe<Scalars['String']>;
    market_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_starts_with?: InputMaybe<Scalars['String']>;
    market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    market_ends_with?: InputMaybe<Scalars['String']>;
    market_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_not_ends_with?: InputMaybe<Scalars['String']>;
    market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    market_?: InputMaybe<Market_filter>;
    destination?: InputMaybe<Scalars['Bytes']>;
    destination_not?: InputMaybe<Scalars['Bytes']>;
    destination_in?: InputMaybe<Array<Scalars['Bytes']>>;
    destination_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    destination_contains?: InputMaybe<Scalars['Bytes']>;
    destination_not_contains?: InputMaybe<Scalars['Bytes']>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amountUsd?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_not?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lt?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_gte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_lte?: InputMaybe<Scalars['BigDecimal']>;
    amountUsd_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountUsd_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type WithdrawReservesInteraction_orderBy =
    | 'id'
    | 'transaction'
    | 'market'
    | 'destination'
    | 'amount'
    | 'amountUsd';

  export type _ActiveAccount = {
    /** Address + usecase specific metadata, this is just a helpers for tracking overall usage */
    id: Scalars['Bytes'];
  };

  export type _ActiveAccount_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type _ActiveAccount_orderBy = 'id';

  export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']>;
  };

  /** The type for the top-level _meta field */
  export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
  };

  export type _SubgraphErrorPolicy_ =
    /** Data will be returned even if the subgraph has indexing errors */
    | 'allow'
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    | 'deny';

  export type QuerySdk = {
    /** null **/
    protocol: InContextSdkMethod<
      Query['protocol'],
      QueryprotocolArgs,
      MeshContext
    >;
    /** null **/
    protocols: InContextSdkMethod<
      Query['protocols'],
      QueryprotocolsArgs,
      MeshContext
    >;
    /** null **/
    market: InContextSdkMethod<Query['market'], QuerymarketArgs, MeshContext>;
    /** null **/
    markets: InContextSdkMethod<
      Query['markets'],
      QuerymarketsArgs,
      MeshContext
    >;
    /** null **/
    position: InContextSdkMethod<
      Query['position'],
      QuerypositionArgs,
      MeshContext
    >;
    /** null **/
    positions: InContextSdkMethod<
      Query['positions'],
      QuerypositionsArgs,
      MeshContext
    >;
    /** null **/
    marketConfiguration: InContextSdkMethod<
      Query['marketConfiguration'],
      QuerymarketConfigurationArgs,
      MeshContext
    >;
    /** null **/
    marketConfigurations: InContextSdkMethod<
      Query['marketConfigurations'],
      QuerymarketConfigurationsArgs,
      MeshContext
    >;
    /** null **/
    protocolAccounting: InContextSdkMethod<
      Query['protocolAccounting'],
      QueryprotocolAccountingArgs,
      MeshContext
    >;
    /** null **/
    protocolAccountings: InContextSdkMethod<
      Query['protocolAccountings'],
      QueryprotocolAccountingsArgs,
      MeshContext
    >;
    /** null **/
    marketAccounting: InContextSdkMethod<
      Query['marketAccounting'],
      QuerymarketAccountingArgs,
      MeshContext
    >;
    /** null **/
    marketAccountings: InContextSdkMethod<
      Query['marketAccountings'],
      QuerymarketAccountingsArgs,
      MeshContext
    >;
    /** null **/
    positionAccounting: InContextSdkMethod<
      Query['positionAccounting'],
      QuerypositionAccountingArgs,
      MeshContext
    >;
    /** null **/
    positionAccountings: InContextSdkMethod<
      Query['positionAccountings'],
      QuerypositionAccountingsArgs,
      MeshContext
    >;
    /** null **/
    usage: InContextSdkMethod<Query['usage'], QueryusageArgs, MeshContext>;
    /** null **/
    usages: InContextSdkMethod<Query['usages'], QueryusagesArgs, MeshContext>;
    /** null **/
    hourlyProtocolAccounting: InContextSdkMethod<
      Query['hourlyProtocolAccounting'],
      QueryhourlyProtocolAccountingArgs,
      MeshContext
    >;
    /** null **/
    hourlyProtocolAccountings: InContextSdkMethod<
      Query['hourlyProtocolAccountings'],
      QueryhourlyProtocolAccountingsArgs,
      MeshContext
    >;
    /** null **/
    dailyProtocolAccounting: InContextSdkMethod<
      Query['dailyProtocolAccounting'],
      QuerydailyProtocolAccountingArgs,
      MeshContext
    >;
    /** null **/
    dailyProtocolAccountings: InContextSdkMethod<
      Query['dailyProtocolAccountings'],
      QuerydailyProtocolAccountingsArgs,
      MeshContext
    >;
    /** null **/
    weeklyProtocolAccounting: InContextSdkMethod<
      Query['weeklyProtocolAccounting'],
      QueryweeklyProtocolAccountingArgs,
      MeshContext
    >;
    /** null **/
    weeklyProtocolAccountings: InContextSdkMethod<
      Query['weeklyProtocolAccountings'],
      QueryweeklyProtocolAccountingsArgs,
      MeshContext
    >;
    /** null **/
    marketConfigurationSnapshot: InContextSdkMethod<
      Query['marketConfigurationSnapshot'],
      QuerymarketConfigurationSnapshotArgs,
      MeshContext
    >;
    /** null **/
    marketConfigurationSnapshots: InContextSdkMethod<
      Query['marketConfigurationSnapshots'],
      QuerymarketConfigurationSnapshotsArgs,
      MeshContext
    >;
    /** null **/
    hourlyMarketAccounting: InContextSdkMethod<
      Query['hourlyMarketAccounting'],
      QueryhourlyMarketAccountingArgs,
      MeshContext
    >;
    /** null **/
    hourlyMarketAccountings: InContextSdkMethod<
      Query['hourlyMarketAccountings'],
      QueryhourlyMarketAccountingsArgs,
      MeshContext
    >;
    /** null **/
    dailyMarketAccounting: InContextSdkMethod<
      Query['dailyMarketAccounting'],
      QuerydailyMarketAccountingArgs,
      MeshContext
    >;
    /** null **/
    dailyMarketAccountings: InContextSdkMethod<
      Query['dailyMarketAccountings'],
      QuerydailyMarketAccountingsArgs,
      MeshContext
    >;
    /** null **/
    weeklyMarketAccounting: InContextSdkMethod<
      Query['weeklyMarketAccounting'],
      QueryweeklyMarketAccountingArgs,
      MeshContext
    >;
    /** null **/
    weeklyMarketAccountings: InContextSdkMethod<
      Query['weeklyMarketAccountings'],
      QueryweeklyMarketAccountingsArgs,
      MeshContext
    >;
    /** null **/
    positionAccountingSnapshot: InContextSdkMethod<
      Query['positionAccountingSnapshot'],
      QuerypositionAccountingSnapshotArgs,
      MeshContext
    >;
    /** null **/
    positionAccountingSnapshots: InContextSdkMethod<
      Query['positionAccountingSnapshots'],
      QuerypositionAccountingSnapshotsArgs,
      MeshContext
    >;
    /** null **/
    protocolHourlyUsage: InContextSdkMethod<
      Query['protocolHourlyUsage'],
      QueryprotocolHourlyUsageArgs,
      MeshContext
    >;
    /** null **/
    protocolHourlyUsages: InContextSdkMethod<
      Query['protocolHourlyUsages'],
      QueryprotocolHourlyUsagesArgs,
      MeshContext
    >;
    /** null **/
    protocolDailyUsage: InContextSdkMethod<
      Query['protocolDailyUsage'],
      QueryprotocolDailyUsageArgs,
      MeshContext
    >;
    /** null **/
    protocolDailyUsages: InContextSdkMethod<
      Query['protocolDailyUsages'],
      QueryprotocolDailyUsagesArgs,
      MeshContext
    >;
    /** null **/
    marketHourlyUsage: InContextSdkMethod<
      Query['marketHourlyUsage'],
      QuerymarketHourlyUsageArgs,
      MeshContext
    >;
    /** null **/
    marketHourlyUsages: InContextSdkMethod<
      Query['marketHourlyUsages'],
      QuerymarketHourlyUsagesArgs,
      MeshContext
    >;
    /** null **/
    marketDailyUsage: InContextSdkMethod<
      Query['marketDailyUsage'],
      QuerymarketDailyUsageArgs,
      MeshContext
    >;
    /** null **/
    marketDailyUsages: InContextSdkMethod<
      Query['marketDailyUsages'],
      QuerymarketDailyUsagesArgs,
      MeshContext
    >;
    /** null **/
    token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>;
    /** null **/
    tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>;
    /** null **/
    baseToken: InContextSdkMethod<
      Query['baseToken'],
      QuerybaseTokenArgs,
      MeshContext
    >;
    /** null **/
    baseTokens: InContextSdkMethod<
      Query['baseTokens'],
      QuerybaseTokensArgs,
      MeshContext
    >;
    /** null **/
    collateralToken: InContextSdkMethod<
      Query['collateralToken'],
      QuerycollateralTokenArgs,
      MeshContext
    >;
    /** null **/
    collateralTokens: InContextSdkMethod<
      Query['collateralTokens'],
      QuerycollateralTokensArgs,
      MeshContext
    >;
    /** null **/
    marketCollateralBalance: InContextSdkMethod<
      Query['marketCollateralBalance'],
      QuerymarketCollateralBalanceArgs,
      MeshContext
    >;
    /** null **/
    marketCollateralBalances: InContextSdkMethod<
      Query['marketCollateralBalances'],
      QuerymarketCollateralBalancesArgs,
      MeshContext
    >;
    /** null **/
    positionCollateralBalance: InContextSdkMethod<
      Query['positionCollateralBalance'],
      QuerypositionCollateralBalanceArgs,
      MeshContext
    >;
    /** null **/
    positionCollateralBalances: InContextSdkMethod<
      Query['positionCollateralBalances'],
      QuerypositionCollateralBalancesArgs,
      MeshContext
    >;
    /** null **/
    account: InContextSdkMethod<
      Query['account'],
      QueryaccountArgs,
      MeshContext
    >;
    /** null **/
    accounts: InContextSdkMethod<
      Query['accounts'],
      QueryaccountsArgs,
      MeshContext
    >;
    /** null **/
    activeAccount: InContextSdkMethod<
      Query['activeAccount'],
      QueryactiveAccountArgs,
      MeshContext
    >;
    /** null **/
    activeAccounts: InContextSdkMethod<
      Query['activeAccounts'],
      QueryactiveAccountsArgs,
      MeshContext
    >;
    /** null **/
    transaction: InContextSdkMethod<
      Query['transaction'],
      QuerytransactionArgs,
      MeshContext
    >;
    /** null **/
    transactions: InContextSdkMethod<
      Query['transactions'],
      QuerytransactionsArgs,
      MeshContext
    >;
    /** null **/
    supplyBaseInteraction: InContextSdkMethod<
      Query['supplyBaseInteraction'],
      QuerysupplyBaseInteractionArgs,
      MeshContext
    >;
    /** null **/
    supplyBaseInteractions: InContextSdkMethod<
      Query['supplyBaseInteractions'],
      QuerysupplyBaseInteractionsArgs,
      MeshContext
    >;
    /** null **/
    withdrawBaseInteraction: InContextSdkMethod<
      Query['withdrawBaseInteraction'],
      QuerywithdrawBaseInteractionArgs,
      MeshContext
    >;
    /** null **/
    withdrawBaseInteractions: InContextSdkMethod<
      Query['withdrawBaseInteractions'],
      QuerywithdrawBaseInteractionsArgs,
      MeshContext
    >;
    /** null **/
    absorbDebtInteraction: InContextSdkMethod<
      Query['absorbDebtInteraction'],
      QueryabsorbDebtInteractionArgs,
      MeshContext
    >;
    /** null **/
    absorbDebtInteractions: InContextSdkMethod<
      Query['absorbDebtInteractions'],
      QueryabsorbDebtInteractionsArgs,
      MeshContext
    >;
    /** null **/
    supplyCollateralInteraction: InContextSdkMethod<
      Query['supplyCollateralInteraction'],
      QuerysupplyCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    supplyCollateralInteractions: InContextSdkMethod<
      Query['supplyCollateralInteractions'],
      QuerysupplyCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    withdrawCollateralInteraction: InContextSdkMethod<
      Query['withdrawCollateralInteraction'],
      QuerywithdrawCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    withdrawCollateralInteractions: InContextSdkMethod<
      Query['withdrawCollateralInteractions'],
      QuerywithdrawCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    transferCollateralInteraction: InContextSdkMethod<
      Query['transferCollateralInteraction'],
      QuerytransferCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    transferCollateralInteractions: InContextSdkMethod<
      Query['transferCollateralInteractions'],
      QuerytransferCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    absorbCollateralInteraction: InContextSdkMethod<
      Query['absorbCollateralInteraction'],
      QueryabsorbCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    absorbCollateralInteractions: InContextSdkMethod<
      Query['absorbCollateralInteractions'],
      QueryabsorbCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    buyCollateralInteraction: InContextSdkMethod<
      Query['buyCollateralInteraction'],
      QuerybuyCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    buyCollateralInteractions: InContextSdkMethod<
      Query['buyCollateralInteractions'],
      QuerybuyCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    withdrawReservesInteraction: InContextSdkMethod<
      Query['withdrawReservesInteraction'],
      QuerywithdrawReservesInteractionArgs,
      MeshContext
    >;
    /** null **/
    withdrawReservesInteractions: InContextSdkMethod<
      Query['withdrawReservesInteractions'],
      QuerywithdrawReservesInteractionsArgs,
      MeshContext
    >;
    /** null **/
    claimRewardsInteraction: InContextSdkMethod<
      Query['claimRewardsInteraction'],
      QueryclaimRewardsInteractionArgs,
      MeshContext
    >;
    /** null **/
    claimRewardsInteractions: InContextSdkMethod<
      Query['claimRewardsInteractions'],
      QueryclaimRewardsInteractionsArgs,
      MeshContext
    >;
    /** null **/
    collateralBalance: InContextSdkMethod<
      Query['collateralBalance'],
      QuerycollateralBalanceArgs,
      MeshContext
    >;
    /** null **/
    collateralBalances: InContextSdkMethod<
      Query['collateralBalances'],
      QuerycollateralBalancesArgs,
      MeshContext
    >;
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>;
  };

  export type MutationSdk = {};

  export type SubscriptionSdk = {
    /** null **/
    protocol: InContextSdkMethod<
      Subscription['protocol'],
      SubscriptionprotocolArgs,
      MeshContext
    >;
    /** null **/
    protocols: InContextSdkMethod<
      Subscription['protocols'],
      SubscriptionprotocolsArgs,
      MeshContext
    >;
    /** null **/
    market: InContextSdkMethod<
      Subscription['market'],
      SubscriptionmarketArgs,
      MeshContext
    >;
    /** null **/
    markets: InContextSdkMethod<
      Subscription['markets'],
      SubscriptionmarketsArgs,
      MeshContext
    >;
    /** null **/
    position: InContextSdkMethod<
      Subscription['position'],
      SubscriptionpositionArgs,
      MeshContext
    >;
    /** null **/
    positions: InContextSdkMethod<
      Subscription['positions'],
      SubscriptionpositionsArgs,
      MeshContext
    >;
    /** null **/
    marketConfiguration: InContextSdkMethod<
      Subscription['marketConfiguration'],
      SubscriptionmarketConfigurationArgs,
      MeshContext
    >;
    /** null **/
    marketConfigurations: InContextSdkMethod<
      Subscription['marketConfigurations'],
      SubscriptionmarketConfigurationsArgs,
      MeshContext
    >;
    /** null **/
    protocolAccounting: InContextSdkMethod<
      Subscription['protocolAccounting'],
      SubscriptionprotocolAccountingArgs,
      MeshContext
    >;
    /** null **/
    protocolAccountings: InContextSdkMethod<
      Subscription['protocolAccountings'],
      SubscriptionprotocolAccountingsArgs,
      MeshContext
    >;
    /** null **/
    marketAccounting: InContextSdkMethod<
      Subscription['marketAccounting'],
      SubscriptionmarketAccountingArgs,
      MeshContext
    >;
    /** null **/
    marketAccountings: InContextSdkMethod<
      Subscription['marketAccountings'],
      SubscriptionmarketAccountingsArgs,
      MeshContext
    >;
    /** null **/
    positionAccounting: InContextSdkMethod<
      Subscription['positionAccounting'],
      SubscriptionpositionAccountingArgs,
      MeshContext
    >;
    /** null **/
    positionAccountings: InContextSdkMethod<
      Subscription['positionAccountings'],
      SubscriptionpositionAccountingsArgs,
      MeshContext
    >;
    /** null **/
    usage: InContextSdkMethod<
      Subscription['usage'],
      SubscriptionusageArgs,
      MeshContext
    >;
    /** null **/
    usages: InContextSdkMethod<
      Subscription['usages'],
      SubscriptionusagesArgs,
      MeshContext
    >;
    /** null **/
    hourlyProtocolAccounting: InContextSdkMethod<
      Subscription['hourlyProtocolAccounting'],
      SubscriptionhourlyProtocolAccountingArgs,
      MeshContext
    >;
    /** null **/
    hourlyProtocolAccountings: InContextSdkMethod<
      Subscription['hourlyProtocolAccountings'],
      SubscriptionhourlyProtocolAccountingsArgs,
      MeshContext
    >;
    /** null **/
    dailyProtocolAccounting: InContextSdkMethod<
      Subscription['dailyProtocolAccounting'],
      SubscriptiondailyProtocolAccountingArgs,
      MeshContext
    >;
    /** null **/
    dailyProtocolAccountings: InContextSdkMethod<
      Subscription['dailyProtocolAccountings'],
      SubscriptiondailyProtocolAccountingsArgs,
      MeshContext
    >;
    /** null **/
    weeklyProtocolAccounting: InContextSdkMethod<
      Subscription['weeklyProtocolAccounting'],
      SubscriptionweeklyProtocolAccountingArgs,
      MeshContext
    >;
    /** null **/
    weeklyProtocolAccountings: InContextSdkMethod<
      Subscription['weeklyProtocolAccountings'],
      SubscriptionweeklyProtocolAccountingsArgs,
      MeshContext
    >;
    /** null **/
    marketConfigurationSnapshot: InContextSdkMethod<
      Subscription['marketConfigurationSnapshot'],
      SubscriptionmarketConfigurationSnapshotArgs,
      MeshContext
    >;
    /** null **/
    marketConfigurationSnapshots: InContextSdkMethod<
      Subscription['marketConfigurationSnapshots'],
      SubscriptionmarketConfigurationSnapshotsArgs,
      MeshContext
    >;
    /** null **/
    hourlyMarketAccounting: InContextSdkMethod<
      Subscription['hourlyMarketAccounting'],
      SubscriptionhourlyMarketAccountingArgs,
      MeshContext
    >;
    /** null **/
    hourlyMarketAccountings: InContextSdkMethod<
      Subscription['hourlyMarketAccountings'],
      SubscriptionhourlyMarketAccountingsArgs,
      MeshContext
    >;
    /** null **/
    dailyMarketAccounting: InContextSdkMethod<
      Subscription['dailyMarketAccounting'],
      SubscriptiondailyMarketAccountingArgs,
      MeshContext
    >;
    /** null **/
    dailyMarketAccountings: InContextSdkMethod<
      Subscription['dailyMarketAccountings'],
      SubscriptiondailyMarketAccountingsArgs,
      MeshContext
    >;
    /** null **/
    weeklyMarketAccounting: InContextSdkMethod<
      Subscription['weeklyMarketAccounting'],
      SubscriptionweeklyMarketAccountingArgs,
      MeshContext
    >;
    /** null **/
    weeklyMarketAccountings: InContextSdkMethod<
      Subscription['weeklyMarketAccountings'],
      SubscriptionweeklyMarketAccountingsArgs,
      MeshContext
    >;
    /** null **/
    positionAccountingSnapshot: InContextSdkMethod<
      Subscription['positionAccountingSnapshot'],
      SubscriptionpositionAccountingSnapshotArgs,
      MeshContext
    >;
    /** null **/
    positionAccountingSnapshots: InContextSdkMethod<
      Subscription['positionAccountingSnapshots'],
      SubscriptionpositionAccountingSnapshotsArgs,
      MeshContext
    >;
    /** null **/
    protocolHourlyUsage: InContextSdkMethod<
      Subscription['protocolHourlyUsage'],
      SubscriptionprotocolHourlyUsageArgs,
      MeshContext
    >;
    /** null **/
    protocolHourlyUsages: InContextSdkMethod<
      Subscription['protocolHourlyUsages'],
      SubscriptionprotocolHourlyUsagesArgs,
      MeshContext
    >;
    /** null **/
    protocolDailyUsage: InContextSdkMethod<
      Subscription['protocolDailyUsage'],
      SubscriptionprotocolDailyUsageArgs,
      MeshContext
    >;
    /** null **/
    protocolDailyUsages: InContextSdkMethod<
      Subscription['protocolDailyUsages'],
      SubscriptionprotocolDailyUsagesArgs,
      MeshContext
    >;
    /** null **/
    marketHourlyUsage: InContextSdkMethod<
      Subscription['marketHourlyUsage'],
      SubscriptionmarketHourlyUsageArgs,
      MeshContext
    >;
    /** null **/
    marketHourlyUsages: InContextSdkMethod<
      Subscription['marketHourlyUsages'],
      SubscriptionmarketHourlyUsagesArgs,
      MeshContext
    >;
    /** null **/
    marketDailyUsage: InContextSdkMethod<
      Subscription['marketDailyUsage'],
      SubscriptionmarketDailyUsageArgs,
      MeshContext
    >;
    /** null **/
    marketDailyUsages: InContextSdkMethod<
      Subscription['marketDailyUsages'],
      SubscriptionmarketDailyUsagesArgs,
      MeshContext
    >;
    /** null **/
    token: InContextSdkMethod<
      Subscription['token'],
      SubscriptiontokenArgs,
      MeshContext
    >;
    /** null **/
    tokens: InContextSdkMethod<
      Subscription['tokens'],
      SubscriptiontokensArgs,
      MeshContext
    >;
    /** null **/
    baseToken: InContextSdkMethod<
      Subscription['baseToken'],
      SubscriptionbaseTokenArgs,
      MeshContext
    >;
    /** null **/
    baseTokens: InContextSdkMethod<
      Subscription['baseTokens'],
      SubscriptionbaseTokensArgs,
      MeshContext
    >;
    /** null **/
    collateralToken: InContextSdkMethod<
      Subscription['collateralToken'],
      SubscriptioncollateralTokenArgs,
      MeshContext
    >;
    /** null **/
    collateralTokens: InContextSdkMethod<
      Subscription['collateralTokens'],
      SubscriptioncollateralTokensArgs,
      MeshContext
    >;
    /** null **/
    marketCollateralBalance: InContextSdkMethod<
      Subscription['marketCollateralBalance'],
      SubscriptionmarketCollateralBalanceArgs,
      MeshContext
    >;
    /** null **/
    marketCollateralBalances: InContextSdkMethod<
      Subscription['marketCollateralBalances'],
      SubscriptionmarketCollateralBalancesArgs,
      MeshContext
    >;
    /** null **/
    positionCollateralBalance: InContextSdkMethod<
      Subscription['positionCollateralBalance'],
      SubscriptionpositionCollateralBalanceArgs,
      MeshContext
    >;
    /** null **/
    positionCollateralBalances: InContextSdkMethod<
      Subscription['positionCollateralBalances'],
      SubscriptionpositionCollateralBalancesArgs,
      MeshContext
    >;
    /** null **/
    account: InContextSdkMethod<
      Subscription['account'],
      SubscriptionaccountArgs,
      MeshContext
    >;
    /** null **/
    accounts: InContextSdkMethod<
      Subscription['accounts'],
      SubscriptionaccountsArgs,
      MeshContext
    >;
    /** null **/
    activeAccount: InContextSdkMethod<
      Subscription['activeAccount'],
      SubscriptionactiveAccountArgs,
      MeshContext
    >;
    /** null **/
    activeAccounts: InContextSdkMethod<
      Subscription['activeAccounts'],
      SubscriptionactiveAccountsArgs,
      MeshContext
    >;
    /** null **/
    transaction: InContextSdkMethod<
      Subscription['transaction'],
      SubscriptiontransactionArgs,
      MeshContext
    >;
    /** null **/
    transactions: InContextSdkMethod<
      Subscription['transactions'],
      SubscriptiontransactionsArgs,
      MeshContext
    >;
    /** null **/
    supplyBaseInteraction: InContextSdkMethod<
      Subscription['supplyBaseInteraction'],
      SubscriptionsupplyBaseInteractionArgs,
      MeshContext
    >;
    /** null **/
    supplyBaseInteractions: InContextSdkMethod<
      Subscription['supplyBaseInteractions'],
      SubscriptionsupplyBaseInteractionsArgs,
      MeshContext
    >;
    /** null **/
    withdrawBaseInteraction: InContextSdkMethod<
      Subscription['withdrawBaseInteraction'],
      SubscriptionwithdrawBaseInteractionArgs,
      MeshContext
    >;
    /** null **/
    withdrawBaseInteractions: InContextSdkMethod<
      Subscription['withdrawBaseInteractions'],
      SubscriptionwithdrawBaseInteractionsArgs,
      MeshContext
    >;
    /** null **/
    absorbDebtInteraction: InContextSdkMethod<
      Subscription['absorbDebtInteraction'],
      SubscriptionabsorbDebtInteractionArgs,
      MeshContext
    >;
    /** null **/
    absorbDebtInteractions: InContextSdkMethod<
      Subscription['absorbDebtInteractions'],
      SubscriptionabsorbDebtInteractionsArgs,
      MeshContext
    >;
    /** null **/
    supplyCollateralInteraction: InContextSdkMethod<
      Subscription['supplyCollateralInteraction'],
      SubscriptionsupplyCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    supplyCollateralInteractions: InContextSdkMethod<
      Subscription['supplyCollateralInteractions'],
      SubscriptionsupplyCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    withdrawCollateralInteraction: InContextSdkMethod<
      Subscription['withdrawCollateralInteraction'],
      SubscriptionwithdrawCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    withdrawCollateralInteractions: InContextSdkMethod<
      Subscription['withdrawCollateralInteractions'],
      SubscriptionwithdrawCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    transferCollateralInteraction: InContextSdkMethod<
      Subscription['transferCollateralInteraction'],
      SubscriptiontransferCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    transferCollateralInteractions: InContextSdkMethod<
      Subscription['transferCollateralInteractions'],
      SubscriptiontransferCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    absorbCollateralInteraction: InContextSdkMethod<
      Subscription['absorbCollateralInteraction'],
      SubscriptionabsorbCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    absorbCollateralInteractions: InContextSdkMethod<
      Subscription['absorbCollateralInteractions'],
      SubscriptionabsorbCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    buyCollateralInteraction: InContextSdkMethod<
      Subscription['buyCollateralInteraction'],
      SubscriptionbuyCollateralInteractionArgs,
      MeshContext
    >;
    /** null **/
    buyCollateralInteractions: InContextSdkMethod<
      Subscription['buyCollateralInteractions'],
      SubscriptionbuyCollateralInteractionsArgs,
      MeshContext
    >;
    /** null **/
    withdrawReservesInteraction: InContextSdkMethod<
      Subscription['withdrawReservesInteraction'],
      SubscriptionwithdrawReservesInteractionArgs,
      MeshContext
    >;
    /** null **/
    withdrawReservesInteractions: InContextSdkMethod<
      Subscription['withdrawReservesInteractions'],
      SubscriptionwithdrawReservesInteractionsArgs,
      MeshContext
    >;
    /** null **/
    claimRewardsInteraction: InContextSdkMethod<
      Subscription['claimRewardsInteraction'],
      SubscriptionclaimRewardsInteractionArgs,
      MeshContext
    >;
    /** null **/
    claimRewardsInteractions: InContextSdkMethod<
      Subscription['claimRewardsInteractions'],
      SubscriptionclaimRewardsInteractionsArgs,
      MeshContext
    >;
    /** null **/
    collateralBalance: InContextSdkMethod<
      Subscription['collateralBalance'],
      SubscriptioncollateralBalanceArgs,
      MeshContext
    >;
    /** null **/
    collateralBalances: InContextSdkMethod<
      Subscription['collateralBalances'],
      SubscriptioncollateralBalancesArgs,
      MeshContext
    >;
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<
      Subscription['_meta'],
      Subscription_metaArgs,
      MeshContext
    >;
  };

  export type Context = {
    ['compound']: {
      Query: QuerySdk;
      Mutation: MutationSdk;
      Subscription: SubscriptionSdk;
    };
  };
}
