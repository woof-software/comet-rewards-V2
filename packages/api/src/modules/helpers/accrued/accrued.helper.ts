import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_LOGGER } from '../../winston/keys';
import {
  Account,
  AccountAccrued,
  AccountBasic,
  AccountBasicStr,
} from '../../account/account.types';
import { CalculationService } from '../../calculations/calculation.service';
import { ProcessService } from '../../process/process.service';
import { ProcessId } from '../../process/process.mapping';
import { config } from '../../../utils/config';
import { AccruedCoefficients } from './types';
import { CometContract } from '../../contracts/Comet.contract';
import { accrualDescaleFactor } from '../../../common/constants';

const { maxInstances } = config.getTyped('processes').userBasic;
// const maxInstances = 1

@Injectable()
export class AccruedHelper {
  private readonly logger: Logger;

  constructor(
    @Inject(CometContract)
    private readonly cometContract: CometContract,
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
    accounts: Account[],
    market: string,
    blockStart: number,
    timeStart: number,
  ): Promise<any> {
    try {
      const accountsBasic = await this.getAccountsBasic(
        accounts,
        market,
        blockStart,
      );

      const coefficients = await this.getCoefficients(
        market,
        blockStart,
        timeStart,
      );

      const accountsAccrued: AccountAccrued[] = [];
      for (let i = 0; i < accountsBasic.length; i += 1) {
        const accountBasic: AccountBasic = {
          id: accountsBasic[i].id,
          principal: BigInt(accountsBasic[i].principal),
          baseTrackingAccrued: BigInt(accountsBasic[i].baseTrackingAccrued),
          baseTrackingIndex: BigInt(accountsBasic[i].baseTrackingIndex),
          assetsIn: BigInt(accountsBasic[i].assetsIn),
          _reserved: BigInt(accountsBasic[i]._reserved),
        };
        const accrued = this.calculationService.calculateAccrued(
          accountBasic,
          coefficients.trackingSupplyIndex,
          coefficients.trackingBorrowIndex,
          coefficients.trackingIndexScale,
          coefficients.accrualDescaleFactor,
        );

        accountsAccrued.push([accountBasic.id, accrued.toString()]);
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
    market: string,
    blockStart: number,
    timeStart: number,
  ): Promise<AccruedCoefficients> {
    const trackingIndexes =
      await this.calculationService.calculateTrackingIndexes(
        market,
        blockStart,
        timeStart,
      );
    const trackingIndexScale = await this.cometContract.trackingIndexScale(
      market,
      blockStart,
    );

    return {
      trackingSupplyIndex: trackingIndexes.trackingSupplyIndex,
      trackingBorrowIndex: trackingIndexes.trackingBorrowIndex,
      trackingIndexScale,
      accrualDescaleFactor: accrualDescaleFactor[market],
    };
  }

  private async getAccountsBasic(
    accounts: Account[],
    market: string,
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
          accounts: chunks[i],
          market,
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
