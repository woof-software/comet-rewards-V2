import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { Job } from '../../entities/job.entity';

@Controller('campaign')
export class CampaignController {
  constructor(
    @Inject(CampaignService)
    private readonly campaignService: CampaignService,
  ) {}

  @Post('/new')
  async startNew(
    @Body('networkId') networkId: number,
    @Body('market') market: string,
    @Body('blockStart') blockStart: number,
  ) {
    return this.campaignService.startNew(networkId, market, blockStart);
  }

  @Post('start')
  async startCampaign(
    @Body('campaignId') campaignId: number,
    @Body('networkId') networkId: number,
    @Body('market') market: string,
    @Body('blockStart') blockStart: number,
  ): Promise<Job> {
    return this.campaignService.startCampaign(
      networkId,
      campaignId,
      market,
      blockStart,
    );
  }
}
