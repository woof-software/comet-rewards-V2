import { DeepPartial, IConfigApp } from './constraint';

const config: DeepPartial<IConfigApp> = {
  app: {
    port: 3000,
  },
  postgres: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5451,
      database: 'comet',
      user: 'comet',
      password: 'comet',
    },
    migrations: {
      directory: './src/database/migrations',
      loadExtensions: ['.ts'],
    },
    seeds: {
      directory: './src/database/seeds/test',
      loadExtensions: ['.ts'],
    },
    maxOpenConnections: 5,
  },
};

module.exports = config;
