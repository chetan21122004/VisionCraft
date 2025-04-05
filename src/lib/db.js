import { Pool } from '@neondatabase/serverless';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: true, // Required for Neon
});

export { pool };