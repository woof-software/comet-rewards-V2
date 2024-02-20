import { DeepPartial, IConfigApp } from './constraint';

const config: DeepPartial<IConfigApp> = {
  app: {
    port: 3000,
  },
  postgres: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5450,
      database: 'comet',
      user: 'comet',
      password: 'comet',
    },
    migrations: {
      directory: '../dist/database/migrations',
      loadExtensions: ['.js'],
    },
    seeds: {
      directory: '../dist/database/seeds/dev',
    },
    maxOpenConnections: 20,
  },
};

module.exports = config;
