import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_LOGGER } from '../winston/keys';
import { baseScale, FACTOR_SCALE } from '../../common/constants';
import { SubgraphService } from '../subgraph/subgraph.service';
import { CometContract } from '../contracts/Comet.contract';

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
    account: any,
    trackingSupplyIndex,
    trackingBorrowIndex,
    trackingIndexScale,
    accrualDescaleFactor,
  ) {
    let { baseTrackingAccrued } = account;
    if (account.principal >= 0) {
      const indexDelta = trackingSupplyIndex - account.baseTrackingIndex;
      baseTrackingAccrued +=
        (account.principal * indexDelta) /
        trackingIndexScale /
        accrualDescaleFactor;
    } else {
      const indexDelta = trackingBorrowIndex - account.baseTrackingIndex;
      baseTrackingAccrued +=
        (-account.principal * indexDelta) /
        trackingIndexScale /
        accrualDescaleFactor;
    }

    return baseTrackingAccrued;
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
    blockTimestamp: number,
  ) {
    try {
      const totalSupplyBase = 0;
      const totalBorrowBase = 0;

      const { trackingSupplyIndex, trackingBorrowIndex, lastAccrualTime } =
        await this.getTrackingInfoInitial(market, blockNumber);

      let trackingSupplyIndex_ = trackingSupplyIndex;
      let trackingBorrowIndex_ = trackingBorrowIndex;

      const timeElapsed = `${blockTimestamp - +lastAccrualTime}`;

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
