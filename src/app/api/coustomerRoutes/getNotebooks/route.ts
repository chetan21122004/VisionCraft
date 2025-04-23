import { NextResponse } from "next/server"
import { pool } from "@/lib/db"

export async function GET() {
    try {
        // Query to get all notebooks
        const query = ` SELECT * FROM notebooks `
        
        const result = await pool.query(query)
        
        return NextResponse.json(result.rows, { status: 200 })
    } catch (error) {
        console.error('Error fetching notebooks:', error)
        return NextResponse.json(
            { error: 'Failed to fetch notebooks' },
            { status: 500 }
        )
    }
}
