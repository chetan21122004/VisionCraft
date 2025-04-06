import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function POST(request) {
  try {
    const { email, password, role } = await request.json()

   
    // Query the database to find the user
    const result = await pool.query(
      `SELECT * FROM ${role} WHERE email = $1`,
      [email]
    )
console.log('====================================');
console.log("from the server login", result.rows[0]);
console.log('====================================');
    // Check if user exists
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const user = result.rows[0]

    // Compare the plain text password
    if (password !== user.password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Remove password from response for security

    return NextResponse.json({ 
      success: true, 
      data: user 
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed. Please try again.' },
      { status: 500 }
    )
  }
}