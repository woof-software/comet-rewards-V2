import '../../utils/test-helper.test';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersModule } from '../providers';
import { ContractsModule } from '../contracts/contracts.module';
import { AccountModule } from '../account';
import { WinstonModule } from '../winston';
import { CampaignService } from './campaign.service';
import { SubgraphModule } from '../subgraph';
import { MerkleModule } from '../merkle';
import { HelperModule } from '../helpers/helper.module';
import { TypeOrmConfig } from '../../database/ormconfig';

describe('campaign.service', () => {
  let moduleRef: TestingModule;

  let campaignService: CampaignService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({ keepConnectionAlive: true, ...TypeOrmConfig }),
        TypeOrmModule.forFeature([]),
        WinstonModule,
        ProvidersModule,
        ContractsModule,
        HelperModule,
        AccountModule,
        SubgraphModule,
        MerkleModule,
      ],
      providers: [CampaignService],
    }).compile();

    campaignService = moduleRef.get(CampaignService);
  });

  describe('startNew', () => {
    const market = '0xc3d688b66703497daa19211eedff47f25384cdc3';

    it('should be ok', async () => {
      try {
        const res = await campaignService.startNew(1, market);
        console.log(res);
      } catch (err) {
        console.log();
      }
    });
  });

  describe('test', () => {
    it('try', async () => {
      const res = await campaignService.test();
      console.log(res);
    });
  });
});
