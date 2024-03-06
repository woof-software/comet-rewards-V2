import 'source-map-support/register';
import { Web3 } from 'web3';

require('dotenv').config();
const knex = require('../database/knex');

beforeAll(async () => {
  await knex.migrate.latest();
  await knex.seed.run();
});

export const getTestRPCProvider = () => new Web3(process.env.RPC_URL_1);
