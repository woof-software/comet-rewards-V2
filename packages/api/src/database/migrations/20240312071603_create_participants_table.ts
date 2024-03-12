import type { Knex } from 'knex';
import { onUpdateTrigger } from '../utils';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema('public')
    .createTable('participants', (table) => {
      table.increments();
      table.integer('campaignId').references('campaigns.id').notNullable();

      table.string('address').notNullable();
      table.string('accruedStart');
      table.string('accruedEnd');
      table.specificType('proof', 'varchar[]');

      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger('participants')));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema('public').dropTable('participants');
}
