import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { AccountModule } from '../account';
import { ContractsModule } from '../contracts/contracts.module';
import { SubgraphModule } from '../subgraph';
import { MerkleModule } from '../merkle';

@Module({
  imports: [AccountModule, ContractsModule, SubgraphModule, MerkleModule],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}
