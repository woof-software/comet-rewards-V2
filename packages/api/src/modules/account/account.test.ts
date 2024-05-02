import { Test, TestingModule } from '@nestjs/testing';
import { FMT_BYTES, FMT_NUMBER } from 'web3-types';
import { AccountService } from './account.service';
import { WinstonModule } from '../winston';
import { SubgraphModule } from '../subgraph';
import { getTestRPCProvider } from '../../utils/test-helper.test';

describe('account.service', () => {
  let moduleRef: TestingModule;

  let accountService: AccountService;

  const provider = getTestRPCProvider();

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [WinstonModule, SubgraphModule],
      providers: [AccountService],
    }).compile();

    accountService = moduleRef.get(AccountService);
  });

  describe('getMarketAccounts', () => {
    const market = '0xc3d688b66703497daa19211eedff47f25384cdc3';

    it('should be ok', async () => {
      try {
        const block = await provider.eth.getBlockNumber({
          number: FMT_NUMBER.NUMBER,
          bytes: FMT_BYTES.HEX,
        });
        const res = await accountService.getMarketAccounts(1, market, block);
        expect(res).toBeTruthy();
      } catch (err) {
        console.log(err);
      }
    });
  });
});
