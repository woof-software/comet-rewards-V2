import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_LOGGER } from '../winston/keys';

@Injectable()
export class TestService {
  private readonly logger: Logger;

  constructor(
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    this.logger = mainLogger.child({ scope: 'test.service.ts' });
  }

  testFunction() {
    this.logger.info('test log', { function: 'testFunction' });
    return 123;
  }
}
