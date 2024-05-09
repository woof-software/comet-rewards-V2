import type { Knex } from 'knex';
import { onUpdateTrigger } from '../utils';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema('public')
    .createTable('campaign_jobs', (table) => {
      table.increments();
      table.integer('campaignId').notNullable().references('campaigns.id');
      table.integer('jobId').notNullable().references('jobs.id');
      table.unique(['campaignId', 'jobId']);

      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger('campaign_jobs')));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema('public').dropTable('campaign_jobs');
}
