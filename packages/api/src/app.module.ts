import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfig } from './database/ormconfig';
import { TestModule } from './modules/test/test.module';
import { WinstonModule } from './modules/winston';

@Module({
  imports: [
    /* Service modules */
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({ ...TypeOrmConfig }),
    WinstonModule,

    /* Main modules */
    TestModule,
  ],
})
export class AppModule {}
