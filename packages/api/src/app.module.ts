import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfig } from './database/ormconfig';
import { WinstonModule } from './modules/winston';
import { CampaignModule } from './modules/campaign';
import { InitializationModule } from './modules/job/intitalization';
import { TokenBucketModule } from './modules/tokenBucket/tokenBucket.module';

@Module({
  imports: [
    /* Service modules */
    ConfigModule.forRoot({
      envFilePath: `../.env`,
    }),
    TypeOrmModule.forRoot({ ...TypeOrmConfig }),
    WinstonModule,

    /* Main modules */
    TokenBucketModule,
    InitializationModule,
    CampaignModule,
  ],
})
export class AppModule {}
