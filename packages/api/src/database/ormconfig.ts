import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from '../utils/config';

require('dotenv').config();

const postgresConfig = config.getTyped('postgres');

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.CR_API_DB_HOST ?? postgresConfig.connection.host,
  port: process.env.CR_API_DB_PORT
    ? +process.env.CR_API_DB_PORT
    : +postgresConfig.connection.port,
  database: process.env.CR_API_DB_NAME ?? postgresConfig.connection.database,
  username: process.env.CR_API_DB_USER ?? postgresConfig.connection.user,
  password: process.env.CR_API_DB_PASS ?? postgresConfig.connection.password,
  entities: ['./dist/entities/*.entity.*'],
  migrationsRun: false,
};
