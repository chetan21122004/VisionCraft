import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function POST(request) {
  try {
    const {
      college_id,
      college_name,
      caption,
      notebook_image,
      weight_kg,
      total_price,
      status = 'pending'  // Default value if not provided
    } = await request.json();

    // Validate required fields
    if (!college_id || !college_name) {
      return NextResponse.json(
        { error: "College ID and name are required" },
        { status: 400 }
      );
    }

    if (!notebook_image) {
      return NextResponse.json(
        { error: "Notebook image URL is required" },
        { status: 400 }
      );
    }

    if (!weight_kg || !total_price) {
      return NextResponse.json(
        { error: "Weight and price are required" },
        { status: 400 }
      );
    }

    // Validate status against allowed values
    const validStatuses = ['pending', 'picked_up', 'completed'];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status. Must be one of: pending, picked_up, completed" },
        { status: 400 }
      );
    }

    // Insert into database using your exact schema
    const result = await pool.query(
      `INSERT INTO uploaded_notebooks 
       (college_id, college_name, caption, notebook_image, weight_kg, total_price, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING 
         upload_id,
         college_id,
         college_name,
         caption,
         notebook_image,
         weight_kg,
         total_price,
         status,
         upload_date`,
      [
        college_id,
        college_name,
        caption,
        notebook_image,
        weight_kg,
        total_price,
        status
      ]
    );

    // Return the newly created notebook data
    return NextResponse.json({
      success: true,
      data: result.rows[0]
    });

  } catch (error) {
    console.error('Database error:', error);

    // Handle specific PostgreSQL errors
    if (error.code === '22P02') {
      return NextResponse.json(
        { error: "Invalid UUID format for college_id" },
        { status: 400 }
      );
    }

    if (error.code === '23514') {
      return NextResponse.json(
        { error: "Invalid status value. Must be 'pending', 'picked_up', or 'completed'" },
        { status: 400 }
      );
    }

    if (error.code === '23502') {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: "Failed to upload notebook data. Please try again." },
      { status: 500 }
    );
  }
}