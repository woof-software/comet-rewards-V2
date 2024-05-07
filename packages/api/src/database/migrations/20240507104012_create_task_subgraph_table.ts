import type { Knex } from 'knex';
import { onUpdateTrigger } from '../utils';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema('public')
    .createTable('task_subgraph', (table) => {
      table.increments();

      table.integer('jobId').references('jobs.id');
      table.string('type').notNullable();
      table.integer('skip').notNullable();
      table.integer('count').notNullable();
      table.boolean('finished').notNullable();

      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger('task_subgraph')));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema('public').dropTable('task_subgraph');
}
