import BigNumber from 'bignumber.js';
import { DeepPartial, IConfigApp } from './constraint';

require('dotenv').config();

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
  processes: {
    userBasic: {
      maxInstances: 5,
    },
  },
  networks: {
    1: {
      // mainnet
      rpcURL: process.env.RPC_URL_1,
      // eslint-disable-next-line max-len
      subgraphURL: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.SUBGRAPH_API_KEY}/subgraphs/id/5nwMCSHaTqG3Kd2gHznbTXEnZ9QNWsssQfbHhDqQSQFp`,
      markets: {
        '0xc3d688b66703497daa19211eedff47f25384cdc3': {
          accrualDescaleFactor: new BigNumber(1),
          baseScale: new BigNumber(1e6),
        },
        '0xa17581a9e3356d9a858b789d68b4d866e593ae94': {
          accrualDescaleFactor: new BigNumber(1e12),
          baseScale: new BigNumber(1e18),
        },
      },
      contracts: {
        cometRewards: '0x1b0e765f6224c21223aea2af16c1c46e38885a40',
      },
    },
    137: {
      // polygon
      rpcURL: process.env.RPC_URL_137,
      // eslint-disable-next-line max-len
      subgraphURL: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.SUBGRAPH_API_KEY}/subgraphs/id/AaFtUWKfFdj2x8nnE3RxTSJkHwGHvawH3VWFBykCGzLs`,
      markets: {
        '0xc3d688b66703497daa19211eedff47f25384cdc3': {
          accrualDescaleFactor: new BigNumber(1),
          baseScale: new BigNumber(1e6),
        },
        '0xa17581a9e3356d9a858b789d68b4d866e593ae94': {
          accrualDescaleFactor: new BigNumber(1e12),
          baseScale: new BigNumber(1e18),
        },
      },
      contracts: {
        cometRewards: '0x45939657d1ca34a8fa39a924b71d28fe8431e581',
      },
    },
    42161: {
      // arbitrum
      rpcURL: process.env.RPC_URL_42161,
      // eslint-disable-next-line max-len
      subgraphURL: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.SUBGRAPH_API_KEY}/subgraphs/id/Ff7ha9ELmpmg81D6nYxy4t8aGP26dPztqD1LDJNPqjLS`,
      markets: {
        '0xc3d688b66703497daa19211eedff47f25384cdc3': {
          accrualDescaleFactor: new BigNumber(1),
          baseScale: new BigNumber(1e6),
        },
        '0xa17581a9e3356d9a858b789d68b4d866e593ae94': {
          accrualDescaleFactor: new BigNumber(1e12),
          baseScale: new BigNumber(1e18),
        },
      },
      contracts: {
        cometRewards: '0x88730d254a2f7e6ac8388c3198afd694ba9f7fae',
      },
    },
    8453: {
      // base
      rpcURL: process.env.RPC_URL_8453,
      // eslint-disable-next-line max-len
      subgraphURL: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.SUBGRAPH_API_KEY}/subgraphs/id/2hcXhs36pTBDVUmk5K2Zkr6N4UYGwaHuco2a6jyTsijo`,
      markets: {
        '0xc3d688b66703497daa19211eedff47f25384cdc3': {
          accrualDescaleFactor: new BigNumber(1),
          baseScale: new BigNumber(1e6),
        },
        '0xa17581a9e3356d9a858b789d68b4d866e593ae94': {
          accrualDescaleFactor: new BigNumber(1e12),
          baseScale: new BigNumber(1e18),
        },
      },
      contracts: {
        cometRewards: '0x123964802e6ababbe1bc9547d72ef1b69b00a6b1',
      },
    },
  },
};

module.exports = config;
