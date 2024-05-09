import type { Knex } from 'knex';
import { onUpdateTrigger } from '../utils';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema('public')
    .createTable('campaigns', (table) => {
      table.increments();

      table.integer('networkId').notNullable();
      table.string('market').notNullable();
      table.integer('blockStart').notNullable();
      table.integer('blockEnd');
      table.string('treeRootStart');
      table.string('treeRootEnd');

      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger('campaigns')));
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema('public').dropTable('campaigns');
}
