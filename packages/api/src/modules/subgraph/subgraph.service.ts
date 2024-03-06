import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';

import { WINSTON_LOGGER } from '../winston/keys';
import { execute } from '../../.graphclient';

@Injectable()
export class SubgraphService {
  private readonly logger: Logger;

  constructor(
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'subgraph.service' });
  }

  async getAccounts(
    market: string,
    blockNumber: number,
    skip = 0,
    first = 1000,
  ): Promise<any> {
    return execute(
      `
            {
              accounts(first: ${first}, skip: ${skip},
              where: {
                positions_: {market: "${market}"},
                creationBlockNumber_lte: ${blockNumber}
              })
              {
                id
              }
            }
        `,
      {},
    );
  }

  async getMarketAccounting(
    market: string,
    blockNumber: string,
    first = 1,
    skip = 0,
  ) {
    return execute(
      `
            {
              marketAccountings(
                orderBy: lastAccountingUpdatedBlockNumber,
                first: ${first}, skip: ${skip},
                where: {
                  market_: {id: "${market}"},
                  lastAccountingUpdatedBlockNumber_lte: "${blockNumber}"
                }
              ) {
                lastAccountingUpdatedBlockNumber,
                trackingSupplyIndex,
                trackingBorrowIndex,
                baseSupplyIndex,
                baseBorrowIndex,
                lastAccrualTime,
              }
            }
        `,
      {},
    );
  }
}
