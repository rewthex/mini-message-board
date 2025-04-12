import pkg from "pg";

const { Pool } = pkg;

if (process.env.NODE_ENV !== 'production') {
  import('dotenv').then(dotenv => dotenv.config());
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
