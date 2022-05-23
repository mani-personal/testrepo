const dotenv = require('dotenv');

dotenv.config({ path: `env/${process.env.NODE_ENV}.env` });

module.exports = {
  [process.env.NODE_ENV]: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds/prod/'
    },
    useNullAsDefault: true
  }
};