import { Knex } from 'knex';
import { tables } from '../../info';

export const seed = async (knex: Knex) => {
  await knex(tables.PARTICIPANTS).del();
  await knex(tables.CAMPAIGNS).del();
};
