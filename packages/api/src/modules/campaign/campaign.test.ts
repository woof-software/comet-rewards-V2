import { Test, TestingModule } from '@nestjs/testing';
import { ProvidersModule } from '../providers';
import { ContractsModule } from '../contracts/contracts.module';
import { AccountModule } from '../account';
import { WinstonModule } from '../winston';
import { CampaignService } from './campaign.service';
import { SubgraphModule } from '../subgraph';
import { MerkleModule } from '../merkle';
import { ProviderService } from '../providers/providerService';

describe('campaign.service', () => {
  let moduleRef: TestingModule;

  let campaignService: CampaignService;
  let providerService: ProviderService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        WinstonModule,
        ProvidersModule,
        ContractsModule,
        AccountModule,
        SubgraphModule,
        MerkleModule,
      ],
      providers: [CampaignService],
    }).compile();

    campaignService = moduleRef.get(CampaignService);
    providerService = moduleRef.get(ProviderService);
  });

  describe('getTrackingIndexes', () => {
    it('should be ok', async () => {
      try {
        const market = '0xc3d688b66703497daa19211eedff47f25384cdc3';
        const account = '0x00204281a93bbc87d4b794e69bc908a3037592ea';

        const res = await campaignService.getTrackingInfoInitial(market, '123');

        console.log();
      } catch (err) {
        console.log();
      }
    });
  });

  describe('calculateTrackingIndexes', () => {
    it('should be ok', async () => {
      try {
        const market = '0xc3d688b66703497daa19211eedff47f25384cdc3';
        const provider = await providerService.getProviderRPC();
        const blockNumber = await provider.eth.getBlockNumber();
        const { timestamp } = await provider.eth.getBlock(blockNumber);
        const blockTimestamp = timestamp.toString();

        const res = await campaignService.calculateTrackingIndexes(
          market,
          blockNumber,
          blockTimestamp,
        );
        console.log();
      } catch (err) {
        console.log(err);
      }
    });
  });

  describe('startNew', () => {
    const market = '0xc3d688b66703497daa19211eedff47f25384cdc3';

    it('should be ok', async () => {
      try {
        const res = await campaignService.startNew2(market);
        console.log();
      } catch (err) {
        console.log();
      }
    });
  });
});
