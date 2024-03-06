import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from '../winston';
import { ProcessService } from './process.service';
import { ProcessModule } from './process.module';
import { ProcessId } from './process.mapping';
import { ProviderService } from '../providers/providerService';

describe('process.service', () => {
  let moduleRef: TestingModule;

  let processService: ProcessService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule, ProcessModule],
      providers: [ProviderService],
    }).compile();

    processService = moduleRef.get(ProcessService);
  });

  describe('getModulePath', () => {
    it('should be ok', () => {
      const res = processService.getModulePath(ProcessId.USER_BASIC);
      console.log(res);
    });
  });
});
