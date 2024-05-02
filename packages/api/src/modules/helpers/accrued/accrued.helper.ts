import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import BigNumber from 'bignumber.js';

import { WINSTON_LOGGER } from '../../winston/keys';
import {
  Account,
  AccountAccrued,
  AccountBasicBN,
  AccountBasicStr,
} from '../../account/account.types';
import { CalculationService } from '../../calculations/calculation.service';
import { ProcessService } from '../../process/process.service';
import { ProcessId } from '../../process/process.mapping';
import { config } from '../../../utils/config';
import { AccruedCoefficients } from './types';
import { accrualDescaleFactor } from '../../../common/constants';
import { ContractService } from '../../contracts/contract.service';

const { maxInstances } = config.getTyped('processes').userBasic;
// const maxInstances = 1

@Injectable()
export class AccruedHelper {
  private readonly logger: Logger;

  constructor(
    @Inject(ContractService)
    private readonly contractService: ContractService,
    @Inject(ProcessService)
    private readonly processService: ProcessService,
    @Inject(CalculationService)
    private readonly calculationService: CalculationService,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'accrued.helpers' });
  }

  async processAccounts(
    networkId: number,
    market: string,
    accounts: Account[],
    blockStart: number,
    timeStart: number,
  ): Promise<any> {
    try {
      const accountsBasic = await this.getAccountsBasic(
        networkId,
        market,
        accounts,
        blockStart,
      );

      const coefficients = await this.getCoefficients(
        networkId,
        market,
        blockStart,
        timeStart,
      );

      const accountsAccrued: AccountAccrued[] = [];
      for (let i = 0; i < accountsBasic.length; i += 1) {
        const accountBasic: AccountBasicBN = {
          id: accountsBasic[i].id,
          principal: new BigNumber(accountsBasic[i].principal),
          baseTrackingAccrued: new BigNumber(
            accountsBasic[i].baseTrackingAccrued,
          ),
          baseTrackingIndex: new BigNumber(accountsBasic[i].baseTrackingIndex),
          assetsIn: new BigNumber(accountsBasic[i].assetsIn),
          _reserved: new BigNumber(accountsBasic[i]._reserved),
        };
        const accrued = this.calculationService.calculateAccrued(
          accountBasic,
          coefficients.trackingSupplyIndex,
          coefficients.trackingBorrowIndex,
          coefficients.trackingIndexScale,
          coefficients.accrualDescaleFactor,
        );

        accountsAccrued.push([
          accountBasic.id,
          // TODO: resolve negative value issue, remove ABS
          accrued.integerValue(BigNumber.ROUND_DOWN).abs().toString(),
        ]);
      }

      return accountsAccrued;
    } catch (err) {
      this.logger.error(err.message, {
        function: 'processAccounts',
      });

      throw err;
    }
  }

  private async getCoefficients(
    networkId: number,
    market: string,
    blockStart: number,
    timeStart: number,
  ): Promise<AccruedCoefficients> {
    const cometContract = await this.contractService.getCometContract(
      networkId,
      market,
    );

    const trackingIndexes =
      await this.calculationService.calculateTrackingIndexes(
        networkId,
        market,
        blockStart,
        timeStart,
      );
    const trackingIndexScale = new BigNumber(
      await cometContract.trackingIndexScale(blockStart),
    );

    return {
      trackingSupplyIndex: trackingIndexes.trackingSupplyIndex,
      trackingBorrowIndex: trackingIndexes.trackingBorrowIndex,
      trackingIndexScale,
      accrualDescaleFactor: accrualDescaleFactor[market],
    };
  }

  private async getAccountsBasic(
    networkId: number,
    market: string,
    accounts: Account[],
    blockStart: number,
  ): Promise<AccountBasicStr[]> {
    try {
      const chunks = this.splitChunks(accounts);

      const chunkPromises = [];
      for (let i = 0; i < maxInstances; i += 1) {
        const childTag = this.processService.spawnProcess(ProcessId.USER_BASIC);

        chunkPromises.push(
          new Promise((resolve) => {
            this.processService.registerHandler(childTag, 'message', resolve);
          }).then((data) => {
            this.logger.info(`received result from ${childTag}`);
            this.processService.sendDisconnect(childTag);
            return data;
          }),
        );

        const msg = {
          networkId,
          market,
          accounts: chunks[i],
          blockStart,
        };

        this.processService.sendMessage(childTag, msg);
      }
      const data: AccountBasicStr[][] = await Promise.all(chunkPromises);

      return data.flat();
    } catch (err) {
      this.logger.error(err.message, {
        function: 'processAccounts',
      });
      throw err;
    }
  }

  private splitChunks(accounts: Account[]) {
    const chunkSize = Math.ceil(accounts.length / maxInstances);
    const chunks = [];

    for (let i = 0; i < maxInstances; i += 1) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, accounts.length); // Ensure end doesn't exceed array length
      const chunk = accounts.slice(start, end);
      chunks.push(chunk);
    }

    return chunks;
  }
}
