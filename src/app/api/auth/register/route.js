import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function POST(request) {
  try {
    const { role, fullName, email, password, contact, address } = await request.json()

    // If it's a retailer, include a default shop name
    if (role === 'retailers') {
      const result = await pool.query(
        `INSERT INTO retailers (name, email, password, contact, address, shop_name)
         VALUES ($1, $2, $3, $4, $5, $6) 
         RETURNING *`,
        [fullName, email, password, contact, address, fullName + "'s Shop"] // Using fullName as temporary shop name
      )
      return NextResponse.json({ success: true, data: result.rows[0] })
    }else{

      
      // For other roles, continue with existing logic
      const result = await pool.query(
        `INSERT INTO ${role} (name, email, password, contact, address)
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING *`,
        [fullName, email, password, contact, address]
      )
      return NextResponse.json({ success: true, data: result.rows[0] })
    }


  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to insert data. Please check server logs.' },
      { status: 500 }
    )
  }
}