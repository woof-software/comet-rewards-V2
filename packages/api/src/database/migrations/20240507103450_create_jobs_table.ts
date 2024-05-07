import type { Knex } from 'knex';
import { onUpdateTrigger } from '../utils';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema('public')
    .createTable('jobs', async (table) => {
      table.increments();

      table.string('type').notNullable();
      table.string('status').notNullable();

      table.jsonb('args');

      table.string('error');

      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger('jobs')));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema('public').dropTable('jobs');
}
