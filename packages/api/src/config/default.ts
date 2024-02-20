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
      directory: './database/migrations',
      loadExtensions: ['.ts'],
    },
    seeds: {
      directory: './database/seeds/dev',
      loadExtensions: ['.ts'],
    },
    maxOpenConnections: 20,
  },
};

module.exports = config;
