import { Test, TestingModule } from '@nestjs/testing';

import { WinstonModule } from '../winston';
import { ContractsModule } from '../contracts/contracts.module';
import { SubgraphModule } from '../subgraph';
import { CalculationService } from './calculation.service';

describe('calculation.service', () => {
  let moduleRef: TestingModule;

  let calculationService: CalculationService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule, ContractsModule, SubgraphModule],
      providers: [CalculationService],
    }).compile();

    calculationService = moduleRef.get(CalculationService);
  });
});
