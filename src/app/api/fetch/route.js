// app/api/users/route.js
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    client.release();
    
    // Explicitly return JSON
    return new Response(JSON.stringify({ data: result.rows }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}