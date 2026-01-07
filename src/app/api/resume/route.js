import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf')
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Resume not found', { status: 404 })
    }
    
    const fileBuffer = fs.readFileSync(filePath)
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error serving resume:', error)
    return new NextResponse(`Error: ${error.message}`, { status: 500 })
  }
}

