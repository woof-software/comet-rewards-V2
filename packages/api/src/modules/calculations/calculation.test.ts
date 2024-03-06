import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from '../winston';
import { CalculationService } from './calculation.service';
import { SubgraphModule } from '../subgraph';
import { ContractsModule } from '../contracts/contracts.module';

describe('account.service', () => {
  let moduleRef: TestingModule;

  let calculationService: CalculationService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule, SubgraphModule, ContractsModule],
      providers: [CalculationService],
    }).compile();

    calculationService = moduleRef.get(CalculationService);
  });

  const market = '0xc3d688b66703497daa19211eedff47f25384cdc3';

  describe('getTrackingInfoInitial', () => {
    it('should be ok', async () => {
      const block = 19375067;
      const trackingInfo = await calculationService.getTrackingInfoInitial(
        market,
        block,
      );
      console.log(trackingInfo);
    });
  });
});
