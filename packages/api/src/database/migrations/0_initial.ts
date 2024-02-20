import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE OR REPLACE FUNCTION on_update_timestamp()
    RETURNS trigger AS $$
    BEGIN
      IF NEW."updatedAt" = OLD."updatedAt" THEN
            NEW."updatedAt" = now();
      END IF;
      RETURN NEW;
    END;
    $$ language 'plpgsql';
  `);

  await knex.schema.withSchema('public').raw(`
    CREATE OR REPLACE FUNCTION make_lower_address()
      RETURNS trigger
    AS
    $$
    BEGIN
      new.address := lower(new.address);
      return new;
    END;
    $$ language plpgsql;
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw('DROP FUNCTION on_update_timestamp');
  await knex.raw('DROP FUNCTION make_lower_address');
}
