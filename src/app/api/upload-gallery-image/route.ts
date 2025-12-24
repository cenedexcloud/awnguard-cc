import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');

    // Ensure directory exists
    try {
      await mkdir(galleryDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Read all files from gallery directory
    const files = await readdir(galleryDir);

    // Filter for image files only and parse metadata from filename
    const images = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
      })
      .map(file => {
        // Parse category from filename (format: category-timestamp-random.ext)
        const parts = file.split('-');
        let category = 'awning-cleaning'; // default

        if (parts.length >= 3) {
          // Check if it's a known category
          const possibleCategory = parts.slice(0, -2).join('-');
          if (['awning-cleaning', 'awning-manufacture', 'solar-panel'].includes(possibleCategory)) {
            category = possibleCategory;
          }
        }

        return {
          url: `/gallery/${file}`,
          category,
          fileName: file
        };
      });

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error loading gallery images:', error);
    return NextResponse.json(
      { error: 'Failed to load gallery images' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    if (!category) {
      return NextResponse.json(
        { error: 'No category specified' },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size too large. Maximum size is 10MB.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const extension = file.name.split('.').pop();
    const fileName = `${category}-${timestamp}-${randomString}.${extension}`;

    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'gallery');
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      // Directory might already exist, that's fine
    }

    // Write file
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    // Return the public URL
    const publicUrl = `/gallery/${fileName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      category,
      fileName
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get('fileName');

    if (!fileName) {
      return NextResponse.json(
        { error: 'No filename provided' },
        { status: 400 }
      );
    }

    // Security check: ensure filename doesn't contain path traversal
    if (fileName.includes('..') || fileName.includes('/') || fileName.includes('\\')) {
      return NextResponse.json(
        { error: 'Invalid filename' },
        { status: 400 }
      );
    }

    // Delete file from gallery directory
    const filePath = path.join(process.cwd(), 'public', 'gallery', fileName);

    try {
      const { unlink } = await import('fs/promises');
      await unlink(filePath);

      return NextResponse.json({
        success: true,
        message: 'File deleted successfully'
      });
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
        return NextResponse.json(
          { error: 'File not found' },
          { status: 404 }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete file' },
      { status: 500 }
    );
  }
}
