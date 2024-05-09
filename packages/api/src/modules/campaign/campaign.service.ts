import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { DataSource } from 'typeorm';

import { WINSTON_LOGGER } from '../winston/keys';
import { AccountService } from '../account';
import { MerkleService } from '../merkle/merkle.service';
import { ProviderService } from '../providers/providerService';
import { Campaign } from '../../entities';
import { ContractService } from '../contracts/contract.service';
import { JobService, JobType } from '../job';
import { CampaignEndArgs } from '../job/jobs/campaignStart/types';
import { Job } from '../../entities/job.entity';
import { CampaignJob } from '../../entities/campaignJob.entity';

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
    @Inject(MerkleService)
    private readonly merkleService: MerkleService,
    @Inject(JobService)
    private readonly jobService: JobService,
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
      const instance = cometRewards.getInstance();
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

  async getCampaigns() {
    return this.dataSource.manager.find(Campaign);
  }

  async getCampaignMerkle(id: number) {
    return this.dataSource.manager.findOne(Campaign, {
      where: { id },
      relations: ['participants'],
    });
  }

  /**
   * @desc Register and start 'campaign start' job
   * */
  async startCampaign(
    networkId: number,
    market: string,
    campaignId?: number | null,
    blockNumber?: number,
  ): Promise<Job> {
    // eslint-disable-next-line no-param-reassign
    blockNumber =
      blockNumber || (await this.providerService.getBlockNumber(networkId));

    const campaign = new Campaign();
    campaign.networkId = networkId;
    campaign.market = market.toLowerCase();
    campaign.blockStart = blockNumber;

    if (campaignId) {
      campaign.id = +campaignId;
    }
    await this.dataSource.manager.save(campaign);

    const args: CampaignEndArgs = {
      networkId,
      campaignId: campaign.id,
      market: market.toLowerCase(),
      blockNumber,
    };

    const job = await this.jobService.registerJob<CampaignEndArgs>(
      JobType.CAMPAIGN_START,
      args,
    );

    // TODO: avoid accidentally repeating jobs
    const campaignJob = new CampaignJob();
    campaignJob.campaignId = campaign.id;
    campaignJob.jobId = job.id;
    await this.dataSource.manager.save(campaignJob);

    await this.jobService.startJob(job.id);
    return job;
  }

  /**
   * @desc Register and start 'campaign end' job
   * */
  async endCampaign(campaignId: number, blockNumber?: number): Promise<Job> {
    const campaign = await this.dataSource.manager.findOne(Campaign, {
      where: { id: campaignId },
    });
    if (!campaign) {
      throw new HttpException(
        `no campaign in progress with id: ${campaignId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    // eslint-disable-next-line no-param-reassign
    blockNumber =
      blockNumber ||
      (await this.providerService.getBlockNumber(campaign.networkId));

    campaign.blockEnd = blockNumber;
    await this.dataSource.manager.save(campaign);

    const args: CampaignEndArgs = {
      networkId: campaign.networkId,
      campaignId,
      market: campaign.market.toLowerCase(),
      blockNumber,
    };

    const job = await this.jobService.registerJob<CampaignEndArgs>(
      JobType.CAMPAIGN_END,
      args,
    );

    // TODO: avoid accidentally repeating jobs
    const campaignJob = new CampaignJob();
    campaignJob.campaignId = campaign.id;
    campaignJob.jobId = job.id;
    await this.dataSource.manager.save(campaignJob);

    await this.jobService.startJob(job.id);
    return job;
  }
}
