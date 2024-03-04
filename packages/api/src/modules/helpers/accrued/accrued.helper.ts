import { Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { fork } from 'node:child_process';

import * as process from 'process';
import { ChildProcess } from 'child_process';
import { WINSTON_LOGGER } from '../../winston/keys';
import { MarketAccount } from '../../account/account.types';
import { CalculationService } from '../../calculations/calculation.service';

export class AccruedHelper {
  private readonly logger: Logger;

  constructor(
    @Inject(CalculationService)
    private readonly calculationService: CalculationService,
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'accrued.helpers' });
  }

  async processAccounts(
    accounts: MarketAccount[],
    blockStart: number,
    timeStart: number,
  ): Promise<any> {
    try {
      const controller = new AbortController();
      const { signal } = controller;

      const modulePath = 'app/modules/helpers/processes/userBasic.process.ts';
      const resolveModulePath = import.meta.resolve(modulePath);
      const childProcess = fork(resolveModulePath, ['childish'], {
        // execArgv: ['--inspect=4554'],
        signal,
      });

      await new Promise((resolve) => {
        setTimeout(resolve, 10000);
      });

      controller.abort();

      process.on('exit', () => {
        console.log();
        abortHandler(childProcess);
      });
    } catch (err) {
      this.logger.error(err.message, {
        function: 'processAccounts',
      });
      throw err;
    }
  }
}

const abortHandler = (child: ChildProcess) => {
  child.kill();
};
