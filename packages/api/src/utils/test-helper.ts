require('dotenv').config();
const knex = require('../database/knex');

beforeAll(async () => {
  await knex.migrate.latest();
  await knex.seed.run();
});
