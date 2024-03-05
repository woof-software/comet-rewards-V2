import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_LOGGER } from '../winston/keys';
import { AccountService } from '../account/account.service';
import { CometContract } from '../contracts/Comet.contract';
import { MerkleService } from '../merkle/merkle.service';
import { ProviderService } from '../providers/providerService';
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
    @Inject(AccruedHelper)
    private readonly accruedHelper: AccruedHelper,
    @Inject(MerkleService)
    private readonly merkleService: MerkleService,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'campaign.service' });
  }

  async startNew(market: string, blockStart?: number) {
    try {
      // 1. fix block number, timestamp
      // eslint-disable-next-line no-param-reassign
      blockStart = blockStart || (await this.providerService.getBlockNumber());
      const timeStart =
        await this.providerService.getBlockTimestamp(blockStart);

      // 2. Request accounts for campaign
      const accounts = await this.accountService.getMarketAccounts(
        market,
        blockStart,
      );

      // 3. Calculate accrued values for accounts
      const accountsAccrued = await this.accruedHelper.processAccounts(
        accounts,
        market,
        blockStart,
        timeStart,
      );

      // 4. Generate tree from accrued accounts
      const res = this.merkleService.generateTree(accountsAccrued);

      return res;
    } catch (err) {
      this.logger.error(err.message, {
        function: 'startNew',
        args: { market, blockStart },
      });
      throw err;
    }
  }
}
