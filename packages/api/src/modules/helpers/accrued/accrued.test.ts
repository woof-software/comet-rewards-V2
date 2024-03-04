import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from '../../winston';
import { SubgraphModule } from '../../subgraph';
import { AccruedHelper } from './accrued.helper';
import { CalculationModule } from '../../calculations';

describe('accrued.helper', () => {
  let moduleRef: TestingModule;

  let accruedHelper: AccruedHelper;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule, SubgraphModule, CalculationModule],
      providers: [AccruedHelper],
    }).compile();

    accruedHelper = moduleRef.get(AccruedHelper);
  });

  describe('processAccounts', () => {
    it('should be ok', async () => {
      try {
        const res = await accruedHelper.processAccounts([], 0, 0);
        console.log();
      } catch (err) {
        console.log(err);
      }
    });
  });
});
