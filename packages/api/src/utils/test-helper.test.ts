import 'source-map-support/register';
import { Web3 } from 'web3';
import { MessagePropertyHeaders } from 'amqplib/properties';

require('dotenv').config();
const knex = require('../database/knex');

beforeAll(async () => {
  await knex.migrate.latest();
  await knex.seed.run();
});

export const getTestRPCProvider = () => new Web3(process.env.RPC_URL_1);

export const constructAmqpMessage = (
  message: any,
  headers: MessagePropertyHeaders = {},
) => {
  const content = Buffer.from(JSON.stringify(message));

  return {
    properties: {
      headers,
    },
    content,
  };
};

export const generateArray = (length = 10, element = '') => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(element);
  }
  return arr;
};
