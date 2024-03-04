import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller('/campaign')
export class CampaignController {
  constructor(
    @Inject(CampaignService)
    private readonly campaignService: CampaignService,
  ) {}

  @Post('/new')
  async startNew(@Body('market') market: string) {
    return this.campaignService.startNew(market);
  }

  @Post('/test')
  async test() {
    return this.campaignService.test();
  }
}
