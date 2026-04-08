import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file = data.get('arrow') as File;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public folder with a consistent name
    const filePath = path.join(process.cwd(), 'public', 'custom-arrow.png');
    await writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      path: '/custom-arrow.png'
    });
  } catch (error) {
    console.error('Error uploading arrow:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to upload arrow'
    }, { status: 500 });
  }
}
