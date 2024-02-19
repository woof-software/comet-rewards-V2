import { Global, Module } from '@nestjs/common';
import * as winston from 'winston';

import { winstonTemplate } from './winston.template';
import { WINSTON_LOGGER } from './keys';

export const mainLogger = winston.createLogger({
  format: winston.format.combine(winston.format.splat(), winston.format.simple(), winston.format.metadata()),
  level: process.env.LOGGER_LEVEL,
  exitOnError: false,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({
          level: true,
        }),
        winston.format.printf(winstonTemplate)
      ),
    }),
  ],
});

@Global()
@Module({
  providers: [
    {
      provide: WINSTON_LOGGER,
      useValue: mainLogger,
    },
  ],
  exports: [
    {
      provide: WINSTON_LOGGER,
      useValue: mainLogger,
    },
  ],
})
export class WinstonModule {}
