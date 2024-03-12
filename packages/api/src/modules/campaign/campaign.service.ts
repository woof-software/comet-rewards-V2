import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { DataSource } from 'typeorm';
import { WINSTON_LOGGER } from '../winston/keys';
import { AccountService } from '../account/account.service';
import { MerkleService } from '../merkle/merkle.service';
import { ProviderService } from '../providers/providerService';
import { AccruedHelper } from '../helpers/accrued/accrued.helper';
import { CampaignModel } from '../../models';
import { ParticipantModel } from '../../models/participant.model';

@Injectable()
export class CampaignService {
  private readonly logger: Logger;

  constructor(
    @Inject(AccountService)
    private readonly accountService: AccountService,
    @Inject(ProviderService)
    private readonly providerService: ProviderService,
    @Inject(AccruedHelper)
    private readonly accruedHelper: AccruedHelper,
    @Inject(MerkleService)
    private readonly merkleService: MerkleService,
    @Inject(DataSource)
    private readonly dataSource: DataSource,
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

      const campaign = new CampaignModel();
      campaign.market = market.toLowerCase();
      campaign.blockStart = blockStart;
      await this.dataSource.manager.save(campaign);

      // 2. Request accounts for campaign
      const accounts = await this.accountService.getMarketAccounts(
        market,
        blockStart,
      );

      // 3. Calculate accrued values for accounts
      const accountsAccrued = await this.accruedHelper.processAccounts(
        campaign.id,
        accounts,
        market,
        blockStart,
        timeStart,
      );

      // 4. Generate tree from accrued accounts
      const tree = this.merkleService.generateTree(accountsAccrued);

      // TODO: rework
      // eslint-disable-next-line no-restricted-syntax
      for (const [i, v] of tree.entries()) {
        const proof = tree.getProof(i);
        const participant = new ParticipantModel();
        participant.campaignId = campaign.id;
        [participant.address, participant.accruedStart] = v;
        participant.proof = proof;

        await this.dataSource.manager.save(participant);
      }

      campaign.treeRoot = tree.root;
      await this.dataSource.manager.save(campaign);

      return campaign;
    } catch (err) {
      this.logger.error(err.message, {
        function: 'startNew',
        args: { market, blockStart },
      });
      throw err;
    }
  }
}
