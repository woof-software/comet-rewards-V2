import { Test, TestingModule } from '@nestjs/testing';
import { AmqpModule } from '../amqp';
import { TokenBucketService } from './tokenBucket.service';
import { WinstonModule } from '../winston';

import '../../utils/test-helper.test';

describe('tokenBucket.service', () => {
  let moduleRef: TestingModule;

  let tokenBucketService: TokenBucketService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule, AmqpModule],
      providers: [TokenBucketService],
    }).compile();

    tokenBucketService = moduleRef.get(TokenBucketService);
  });

  describe('supplyTokens', () => {
    it('should be ok', async () => {
      await tokenBucketService.onApplicationBootstrap();
      await tokenBucketService.consumeToken();
    });
  });
});
