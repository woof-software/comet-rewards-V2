import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { AccountModule } from '../account';
import { ContractsModule } from '../contracts/contracts.module';
import { SubgraphModule } from '../subgraph';
import { MerkleModule } from '../merkle';
import { ProvidersModule } from '../providers';
import { HelperModule } from '../helpers/helper.module';

@Module({
  imports: [
    AccountModule,
    ContractsModule,
    SubgraphModule,
    MerkleModule,
    ProvidersModule,
    HelperModule,
  ],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}
