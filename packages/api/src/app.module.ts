import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfig } from './database/ormconfig';

@Module({
    imports: [
        /* Service modules */
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        TypeOrmModule.forRoot({ ...TypeOrmConfig }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
