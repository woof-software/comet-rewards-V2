import type { Knex } from 'knex';
import { onUpdateTrigger } from '../utils';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('stage_account_accrued', (table) => {
      table.increments();
      table.integer('jobId').references('jobs.id').unique().notNullable();
      table.boolean('merkleRequested');

      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger('stage_account_accrued')));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('stage_account_accrued');
}
