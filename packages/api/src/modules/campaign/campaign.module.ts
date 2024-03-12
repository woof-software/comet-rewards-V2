import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { AccountModule } from '../account';
import { ContractsModule } from '../contracts/contracts.module';
import { SubgraphModule } from '../subgraph';
import { MerkleModule } from '../merkle';
import { ProvidersModule } from '../providers';
import { HelperModule } from '../helpers/helper.module';
import { CampaignModel } from '../../models';
import { ParticipantModel } from '../../models/participant.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([CampaignModel, ParticipantModel]),
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
