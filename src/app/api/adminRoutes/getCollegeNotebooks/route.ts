import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const query = 'SELECT * FROM uploaded_notebooks ORDER BY upload_date DESC';
    const result = await pool.query(query);

    return NextResponse.json({
      success: true,
      data: result.rows
    });

  } catch (error) { 
    console.error('Database error:', error);
    return NextResponse.json(
      { error: "Failed to fetch notebooks" },
      { status: 500 }
    );
  }
}
