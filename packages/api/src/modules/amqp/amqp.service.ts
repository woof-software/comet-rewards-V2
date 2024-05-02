import { Inject, Injectable } from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_LOGGER } from '../winston/keys';
import { Amqp } from './amqp';

@Injectable()
export class AmqpService extends Amqp {
  constructor(
    @Inject(WINSTON_LOGGER)
    mainLogger: Logger,
  ) {
    super(mainLogger);
  }
}
