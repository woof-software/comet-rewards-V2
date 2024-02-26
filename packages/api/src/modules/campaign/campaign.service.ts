import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_LOGGER } from '../winston/keys';
import { AccountService } from '../account/account.service';
import { CometContract } from '../contracts/Comet.contract';
import { SubgraphService } from '../subgraph/subgraph.service';
import { accrualDescaleFactor } from '../../common/constants';
import { MerkleService } from '../merkle/merkle.service';

@Injectable()
export class CampaignService {
  private readonly logger: Logger;

  constructor(
    @Inject(AccountService)
    private readonly accountService: AccountService,
    @Inject(CometContract)
    private readonly cometContract: CometContract,
    @Inject(SubgraphService)
    private readonly subgraphService: SubgraphService,
    @Inject(MerkleService)
    private readonly merkleService: MerkleService,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'campaign.service' });
  }

  async startNew(market: string) {
    try {
      console.time('time');
      const accountsPrepared = [];
      // const res = await this.cometContract.getUserBasic(market, '0xd57dcb52b93dfd5133084779a4cbc57cbb9b6c32')
      const accounts = await this.accountService.collectAccounts(market);

      /* Coefficients */
      const trackingIndexes = await this.getTrackingIndexes(market);
      const trackingIndexScale =
        await this.cometContract.trackingIndexScale(market);
      // ===== i=9
      // const userBasic = await this.cometContract.getUserBasic(market, accounts[9].id)
      // accounts[9] = {...accounts[9], ...userBasic.toObject()};
      // this.accountService.calculateAccrued(
      //   accounts[9],
      //   trackingIndexes.trackingSupplyIndex,
      //   trackingIndexes.trackingBorrowIndex,
      //   trackingIndexScale,
      //   accrualDescaleFactor[market],
      // );
      // =====

      for (let i = 0; i < 10; i += 1) {
        const userBasic = await this.cometContract.getUserBasic(
          market,
          accounts[i].id,
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

  async getTrackingIndexes(
    market: string,
  ): Promise<{ trackingSupplyIndex: bigint; trackingBorrowIndex: bigint }> {
    const marketAccounting =
      await this.subgraphService.getMarketAccounting(market);
    return {
      trackingSupplyIndex: BigInt(
        marketAccounting.data.marketAccountings[0].trackingSupplyIndex,
      ),
      trackingBorrowIndex: BigInt(
        marketAccounting.data.marketAccountings[0].trackingBorrowIndex,
      ),
    };
  }
}
