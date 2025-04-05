import { pool } from '@/lib/db';

export async function POST(request) {
  try {
    const { name, email } = await request.json();
    const client = await pool.connect();

    const result = await client.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    client.release();
    return Response.json({ success: true, data: result.rows[0] });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}