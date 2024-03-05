import '../../../utils/test-helper';
import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from '../../winston';
import { SubgraphModule } from '../../subgraph';
import { AccruedHelper } from './accrued.helper';
import { CalculationModule } from '../../calculations';
import { ProcessModule } from '../../process/process.module';

describe('accrued.helper', () => {
  let moduleRef: TestingModule;

  let accruedHelper: AccruedHelper;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        WinstonModule,
        ProcessModule,
        SubgraphModule,
        CalculationModule,
      ],
      providers: [AccruedHelper],
    }).compile();

    accruedHelper = moduleRef.get(AccruedHelper);
  });

  describe('processAccounts', () => {
    it('should be ok', async () => {
      try {
        const res = await accruedHelper.processAccounts([], '', 0, 0);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    });
  });
});
