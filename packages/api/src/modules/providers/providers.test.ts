import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from '../winston';
import { ProviderService } from './providerService';

describe('providers.service', () => {
  let moduleRef: TestingModule;

  let providerService: ProviderService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule],
      providers: [ProviderService],
    }).compile();

    providerService = moduleRef.get(ProviderService);
  });

  describe('getProviderRPC', () => {
    it('should be ok', async () => {
      try {
        const provider = await providerService.getProviderRPC(1);
        console.log(provider);
      } catch (err) {
        console.log(err);
      }
    });
  });
});
