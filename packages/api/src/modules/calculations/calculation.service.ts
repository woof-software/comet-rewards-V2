import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import BigNumber from 'bignumber.js';
import { WINSTON_LOGGER } from '../winston/keys';
import { baseScale } from '../../common/constants';
import { SubgraphService } from '../subgraph/subgraph.service';
import { CometContract } from '../contracts/Comet.contract';
import { AccountBasicBN } from '../account/account.types';
import { IndexInfo } from './calculation.types';

@Injectable()
export class CalculationService {
  private readonly logger: Logger;

  constructor(
    @Inject(SubgraphService)
    private readonly subgraphService: SubgraphService,
    @Inject(CometContract)
    private readonly cometContract: CometContract,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'calculations.service' });
  }

  calculateAccrued(
    account: AccountBasicBN,
    trackingSupplyIndex: BigNumber,
    trackingBorrowIndex: BigNumber,
    trackingIndexScale: BigNumber,
    accrualDescaleFactor: BigNumber,
  ): BigNumber {
    let baseTrackingAccrued = new BigNumber(
      account.baseTrackingAccrued.toString(),
    );
    if (account.principal.gte(0)) {
      const indexDelta = trackingSupplyIndex.minus(account.baseTrackingIndex);
      baseTrackingAccrued = baseTrackingAccrued.plus(
        account.principal
          .times(indexDelta)
          .div(trackingIndexScale.div(accrualDescaleFactor)),
      );
    } else {
      const indexDelta = trackingBorrowIndex.minus(account.baseTrackingIndex);
      baseTrackingAccrued = baseTrackingAccrued.plus(
        account.principal
          .negated()
          .times(indexDelta)
          .div(trackingIndexScale.div(accrualDescaleFactor)),
      );
    }

    return baseTrackingAccrued;
  }

  async getTrackingInfoInitial(
    market: string,
    blockNumber: string | number,
  ): Promise<IndexInfo> {
    const marketAccounting = await this.subgraphService.getMarketAccounting(
      market,
      blockNumber,
    );
    return {
      trackingSupplyIndex: new BigNumber(
        marketAccounting.data.marketAccountings[0].trackingSupplyIndex,
      ),
      trackingBorrowIndex: new BigNumber(
        marketAccounting.data.marketAccountings[0].trackingBorrowIndex,
      ),
      baseSupplyIndex: new BigNumber(
        marketAccounting.data.marketAccountings[0].baseSupplyIndex,
      ),
      baseBorrowIndex: new BigNumber(
        marketAccounting.data.marketAccountings[0].baseBorrowIndex,
      ),
      lastAccrualTime:
        +marketAccounting.data.marketAccountings[0].lastAccrualTime,
    };
  }

  divBaseWei(n: BigNumber, baseWei: BigNumber, market: string): BigNumber {
    return n.times(baseScale[market]).div(baseWei);
  }

  /**
   * @desc Implement accrueInternal function
   * */
  async calculateTrackingIndexes(
    market: string,
    blockNumber,
    blockTimestamp: number,
  ) {
    try {
      const totalSupplyBase = new BigNumber(0);
      const totalBorrowBase = new BigNumber(0);

      // eslint-disable-next-line prefer-const
      let { trackingSupplyIndex, trackingBorrowIndex, lastAccrualTime } =
        await this.getTrackingInfoInitial(market, blockNumber);

      const timeElapsed = blockTimestamp - lastAccrualTime;

      if (+timeElapsed <= 0) {
        return { trackingSupplyIndex, trackingBorrowIndex };
      }

      const baseTrackingSupplySpeed = new BigNumber(
        await this.cometContract.getBaseTrackingSupplySpeed(
          market,
          blockNumber,
        ),
      );
      const baseTrackingBorrowSpeed = new BigNumber(
        await this.cometContract.getBaseTrackingBorrowSpeed(
          market,
          blockNumber,
        ),
      );
      const baseMinForRewards = new BigNumber(
        await this.cometContract.getBaseMinForRewards(market, blockNumber),
      );

      if (totalSupplyBase.gte(baseMinForRewards)) {
        trackingSupplyIndex = trackingSupplyIndex.plus(
          this.divBaseWei(
            baseTrackingSupplySpeed.times(timeElapsed),
            totalSupplyBase,
            market,
          ),
        );
      }
      if (totalBorrowBase.gte(baseMinForRewards)) {
        trackingBorrowIndex = trackingBorrowIndex.plus(
          this.divBaseWei(
            baseTrackingBorrowSpeed.times(timeElapsed),
            totalBorrowBase,
            market,
          ),
        );
      }

      return {
        trackingSupplyIndex,
        trackingBorrowIndex,
      };
    } catch (err) {
      this.logger.error(err.message, {
        function: 'calculateTrackingIndexes',
      });
      throw err;
    }
  }
}
