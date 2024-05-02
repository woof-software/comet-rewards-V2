import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { DataSource } from 'typeorm';
import { WINSTON_LOGGER } from '../winston/keys';
import { AccountService } from '../account/account.service';
import { MerkleService } from '../merkle/merkle.service';
import { ProviderService } from '../providers/providerService';
import { AccruedHelper } from '../helpers/accrued/accrued.helper';
import { CampaignEntity } from '../../entities';
import { ParticipantEntity } from '../../entities/participant.entity';
import { ContractService } from '../contracts/contract.service';

@Injectable()
export class CampaignService {
  private readonly logger: Logger;

  constructor(
    @Inject(AccountService)
    private readonly accountService: AccountService,
    @Inject(ProviderService)
    private readonly providerService: ProviderService,
    @Inject(ContractService)
    private readonly contractService: ContractService,
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

  async test() {
    try {
      const cometRewards = await this.contractService.getCometRewardsContract(
        1,
        '0xc3d688b66703497daa19211eedff47f25384cdc3',
      );
      const instance = await cometRewards.getInstance();
      await instance.methods
        .getRewardOwed(
          '0xc3d688B66703497DAA19211EEdff47f25384cdc3',
          '0x00be5cbdb34636ab56efa6f8f06cf1c147dc5cbb',
        )
        .call();
      console.log();
    } catch (err) {
      console.log(err);
    }
  }

  async startNew(networkId: number, market: string, blockStart?: number) {
    try {
      // 1. fix block number, timestamp
      // eslint-disable-next-line no-param-reassign
      blockStart =
        blockStart || (await this.providerService.getBlockNumber(networkId));
      const timeStart = await this.providerService.getBlockTimestamp(
        networkId,
        blockStart,
      );

      const campaign = new CampaignEntity();
      campaign.market = market.toLowerCase();
      campaign.blockStart = blockStart;
      await this.dataSource.manager.save(campaign);

      // 2. Request accounts for campaign
      const accounts = await this.accountService.getMarketAccounts(
        networkId,
        market,
        blockStart,
      );

      // 3. Calculate accrued values for accounts
      const accountsAccrued = await this.accruedHelper.processAccounts(
        networkId,
        market,
        accounts,
        blockStart,
        timeStart,
      );

      // 4. Generate tree from accrued accounts
      const tree = this.merkleService.generateTree(accountsAccrued);

      // TODO: rework
      // eslint-disable-next-line no-restricted-syntax
      for (const [i, v] of tree.entries()) {
        const proof = tree.getProof(i);
        const participant = new ParticipantEntity();
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
