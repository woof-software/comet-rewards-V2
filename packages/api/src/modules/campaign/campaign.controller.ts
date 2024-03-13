import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller('/campaign')
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
}
