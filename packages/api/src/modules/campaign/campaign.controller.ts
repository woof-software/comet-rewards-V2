import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { Job } from '../../entities/job.entity';

@Controller('campaign')
export class CampaignController {
  constructor(
    @Inject(CampaignService)
    private readonly campaignService: CampaignService,
  ) {}

  @Get('/')
  async getCampaigns() {
    return this.campaignService.getCampaigns();
  }

  @Get('/:id/merkle')
  async getCampaignMerkle(@Param('id') id: string) {
    return this.campaignService.getCampaignMerkle(+id);
  }

  @Post('start')
  async startCampaign(
    @Body('campaignId') campaignId: string,
    @Body('networkId') networkId: string,
    @Body('market') market: string,
    @Body('blockStart') blockStart: string,
  ): Promise<Job> {
    return this.campaignService.startCampaign(
      +networkId,
      market,
      +campaignId,
      +blockStart,
    );
  }

  @Post('end')
  async endCampaign(
    @Body('campaignId') campaignId: string,
    @Body('blockStart') blockStart: string,
  ): Promise<Job> {
    return this.campaignService.endCampaign(+campaignId, +blockStart);
  }
}
