import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function POST(request) {
  try {
    const { role, fullName, email, password, contact, address } = await request.json()

    // Check for existing user
    const existingUser = await pool.query(
      `SELECT email FROM ${role} WHERE email = $1`,
      [email]
    )

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      )
    }

    // Insert new user
    const result = await pool.query(
      `INSERT INTO ${role} (name, email, password, contact, address)
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [fullName, email, password, contact, address]
    )

    // Remove password from response
    const { ...userWithoutPassword } = result.rows[0]

    // Return success response with user data
    return NextResponse.json({
      success: true,
      data: {
        ...userWithoutPassword,
        role // Include role in the response
      }
    }, { status: 200 })

  } catch (error) {
    console.error('Database error:', error)
    
    if (error.code === '23505') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    )
  }
}