import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_LOGGER } from '../winston/keys';
import { AccountService } from '../account/account.service';
import { CometContract } from '../contracts/Comet.contract';
import { SubgraphService } from '../subgraph/subgraph.service';
import {
  accrualDescaleFactor,
  baseScale,
  FACTOR_SCALE,
} from '../../common/constants';
import { MerkleService } from '../merkle/merkle.service';
import { ProviderService } from '../providers/providerService';
import { Campaign } from '../../models';
import { AccruedHelper } from '../helpers/accrued/accrued.helper';

@Injectable()
export class CampaignService {
  private readonly logger: Logger;

  constructor(
    @Inject(AccountService)
    private readonly accountService: AccountService,
    @Inject(ProviderService)
    private readonly providerService: ProviderService,
    @Inject(CometContract)
    private readonly cometContract: CometContract,
    @Inject(SubgraphService)
    private readonly subgraphService: SubgraphService,
    @Inject(AccruedHelper)
    private readonly accruedHelper: AccruedHelper,
    @Inject(MerkleService)
    private readonly merkleService: MerkleService,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'campaign.service' });
  }

  async startNew2(market: string, blockStart?: number) {
    const campaign = new Campaign();
    // 1. fix block number, timestamp
    blockStart = blockStart || (await this.providerService.getBlockNumber());
    const timeStart = await this.providerService.getBlockTimestamp(blockStart);

    // 2. Request accounts for campaign
    const accounts = await this.accountService.getMarketAccounts(
      market,
      blockStart,
    );
  }

  /**
   * @desc Start new campaign, create campaign record in database, collect accounts, generate merkle tree
   * */
  async startNew(market: string) {
    try {
      const accountsPrepared = [];

      /* Block info */
      const provider = await this.providerService.getProviderRPC();
      const blockNumber = await this.providerService.getBlockNumber();
      const { timestamp } = await provider.eth.getBlock(blockNumber);
      const blockTimestamp = timestamp.toString();
      /*---------------*/

      const accounts = await this.accountService.getMarketAccounts(
        market,
        blockNumber,
      );

      /* Coefficients */
      const trackingIndexes = await this.calculateTrackingIndexes(
        market,
        blockNumber,
        blockTimestamp,
      );
      const trackingIndexScale = await this.cometContract.trackingIndexScale(
        market,
        blockNumber,
      );
      /*------------------*/

      for (let i = 0; i < 10; i += 1) {
        const userBasic = await this.cometContract.getUserBasic(
          market,
          accounts[i].id,
          blockNumber,
        );
        accounts[i] = { ...accounts[i], ...userBasic.toObject() };

        const baseTrackingAccruedNew = this.accountService.calculateAccrued(
          accounts[i],
          trackingIndexes.trackingSupplyIndex,
          trackingIndexes.trackingBorrowIndex,
          trackingIndexScale,
          accrualDescaleFactor[market],
        );
        // TODO: !!! Remove abs, figure out negative value
        accountsPrepared.push([
          accounts[i].id,
          Math.abs(baseTrackingAccruedNew.toString()),
        ]);
      }

      console.timeEnd('time');

      const tree = this.merkleService.generateTree(accountsPrepared);

      return JSON.stringify(tree.dump());
    } catch (err) {
      this.logger.error(err.message, {
        function: 'startNew',
        args: { market },
      });
      throw err;
    }
  }

  async test() {
    const qwe = await this.accruedHelper.processAccounts([], 0, 0);
    console.log();
  }

  async getTrackingInfoInitial(
    market: string,
    blockNumber: string,
  ): Promise<any> {
    const marketAccounting = await this.subgraphService.getMarketAccounting(
      market,
      blockNumber,
    );
    return {
      trackingSupplyIndex: BigInt(
        marketAccounting.data.marketAccountings[0].trackingSupplyIndex,
      ),
      trackingBorrowIndex: BigInt(
        marketAccounting.data.marketAccountings[0].trackingBorrowIndex,
      ),
      baseSupplyIndex: BigInt(
        marketAccounting.data.marketAccountings[0].baseSupplyIndex,
      ),
      baseBorrowIndex: BigInt(
        marketAccounting.data.marketAccountings[0].baseBorrowIndex,
      ),
      lastAccrualTime:
        marketAccounting.data.marketAccountings[0].lastAccrualTime,
    };
  }

  async calculateAccruedInterestIndices(
    market: string,
    blockNumber: string,
    timeElapsed: string,
    baseSupplyIndex,
    baseBorrowIndex,
  ) {
    let baseSupplyIndex_ = baseSupplyIndex;
    let baseBorrowIndex_ = baseBorrowIndex;
    if (+timeElapsed > 0) {
      const utilization = await this.cometContract.getUtilization(
        market,
        blockNumber,
      );
      const supplyRate = await this.cometContract.getSupplyRate(
        market,
        blockNumber,
        utilization.toString(),
      );
      const borrowRate = await this.cometContract.getBorrowRate(
        market,
        blockNumber,
        utilization.toString(),
      );
      baseSupplyIndex_ += this.mulFactor(
        baseSupplyIndex,
        supplyRate * +timeElapsed,
      );
      baseBorrowIndex_ += this.mulFactor(
        baseBorrowIndex,
        borrowRate * +timeElapsed,
      );
    }
    return {
      baseSupplyIndex: baseSupplyIndex_,
      baseBorrowIndex: baseBorrowIndex_,
    };
  }

  mulFactor(n, factor) {
    return (n * factor) / FACTOR_SCALE;
  }

  divBaseWei(n, baseWei, market: string) {
    return (n * baseScale[market]) / baseWei;
  }

  /**
   * @desc Implement accrueInternal function
   * */
  async calculateTrackingIndexes(
    market: string,
    blockNumber,
    blockTimestamp: string,
  ) {
    try {
      const totalSupplyBase = 0;
      const totalBorrowBase = 0;

      const { trackingSupplyIndex, trackingBorrowIndex, lastAccrualTime } =
        await this.getTrackingInfoInitial(market, blockNumber);

      let trackingSupplyIndex_ = trackingSupplyIndex;
      let trackingBorrowIndex_ = trackingBorrowIndex;

      const timeElapsed = `${  +blockTimestamp - +lastAccrualTime}`;

      if (+timeElapsed <= 0) {
        return { trackingSupplyIndex, trackingBorrowIndex };
      }

      const baseTrackingSupplySpeed =
        await this.cometContract.getBaseTrackingSupplySpeed(
          market,
          blockNumber,
        );
      const baseTrackingBorrowSpeed =
        await this.cometContract.getBaseTrackingBorrowSpeed(
          market,
          blockNumber,
        );
      const baseMinForRewards = await this.cometContract.getBaseMinForRewards(
        market,
        blockNumber,
      );

      if (totalSupplyBase >= baseMinForRewards) {
        trackingSupplyIndex_ += this.divBaseWei(
          baseTrackingSupplySpeed * +timeElapsed,
          totalSupplyBase,
          market,
        );
      }
      if (totalBorrowBase >= baseMinForRewards) {
        trackingBorrowIndex_ += this.divBaseWei(
          baseTrackingBorrowSpeed * +timeElapsed,
          totalBorrowBase,
          market,
        );
      }

      return {
        trackingSupplyIndex: trackingSupplyIndex_,
        trackingBorrowIndex: trackingBorrowIndex_,
      };
    } catch (err) {
      this.logger.error(err.message, {
        function: 'calculateTrackingIndexes',
      });
      throw err;
    }
  }
}
