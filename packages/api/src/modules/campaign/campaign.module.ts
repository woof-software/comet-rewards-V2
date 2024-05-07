import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { AccountModule } from '../account';
import { ContractsModule } from '../contracts/contracts.module';
import { SubgraphModule } from '../subgraph';
import { MerkleModule } from '../merkle';
import { ProvidersModule } from '../providers';
import { CampaignEntity, ParticipantEntity } from '../../entities';
import { JobModule } from '../job';

@Module({
  imports: [
    TypeOrmModule.forFeature([CampaignEntity, ParticipantEntity]),
    AccountModule,
    ContractsModule,
    SubgraphModule,
    MerkleModule,
    ProvidersModule,
    JobModule,
  ],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}
