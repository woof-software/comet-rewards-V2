import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_LOGGER } from '../winston/keys';
import { SubgraphService } from '../subgraph/subgraph.service';
import { Account } from './account.types';

@Injectable()
export class AccountService {
  private readonly logger: Logger;

  constructor(
    @Inject(SubgraphService)
    private readonly subgraphService: SubgraphService,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'account.service' });
  }

  async getMarketAccounts(
    market: string,
    blockNumber: number,
  ): Promise<Account[]> {
    const skip = 0;
    let accounts = [];
    // do {
    //     const res = await this.subgraphService.getAccounts(market, skip);
    //     accounts = accounts.concat(res.data.accounts);
    //     skip += 1000
    //     console.log(skip);
    // } while (accounts.length === skip);
    const res = await this.subgraphService.getAccounts(
      market,
      blockNumber,
      skip,
    );
    accounts = accounts.concat(res.data.accounts);
    return accounts;
  }

  /*
   * principal
   * trackingSupplyIndex
   *
   * */
}
