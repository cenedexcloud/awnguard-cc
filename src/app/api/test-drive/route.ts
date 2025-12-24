import { NextResponse } from 'next/server';
import { uploadToGoogleDrive } from '@/lib/googleDrive';

export const dynamic = 'force-dynamic';

/**
 * Test endpoint to verify Google Drive configuration
 * Visit: http://localhost:3000/api/test-drive
 */
export async function GET() {
  const debugInfo: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    status: 'checking',
    environment: {},
    test: {},
  };

  try {
    // Check environment variables
    debugInfo.environment = {
      hasFolderId: !!process.env.GOOGLE_DRIVE_FOLDER_ID,
      hasServiceEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      folderId: process.env.GOOGLE_DRIVE_FOLDER_ID ?
        `${process.env.GOOGLE_DRIVE_FOLDER_ID.substring(0, 10)}...` : 'NOT SET',
      serviceEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || 'NOT SET',
      privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length || 0,
      privateKeyStart: process.env.GOOGLE_PRIVATE_KEY?.substring(0, 30) || 'NOT SET',
    };

    // Check if all required env vars are present
    if (!process.env.GOOGLE_DRIVE_FOLDER_ID ||
        !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
        !process.env.GOOGLE_PRIVATE_KEY) {
      debugInfo.status = 'not_configured';
      debugInfo.message = 'Google Drive not configured. Missing environment variables.';
      const missing: string[] = [];

      if (!process.env.GOOGLE_DRIVE_FOLDER_ID) {
        missing.push('GOOGLE_DRIVE_FOLDER_ID');
      }
      if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
        missing.push('GOOGLE_SERVICE_ACCOUNT_EMAIL');
      }
      if (!process.env.GOOGLE_PRIVATE_KEY) {
        missing.push('GOOGLE_PRIVATE_KEY');
      }
      debugInfo.missing = missing;


      return NextResponse.json(debugInfo, { status: 200 });
    }

    debugInfo.test = { action: 'Attempting test upload...' };

    const testContent = 'This is a test file created by the Google Drive test endpoint.';
    const testBuffer = Buffer.from(testContent, 'utf-8');

    try {
      const result = await uploadToGoogleDrive(
        {
          content: testBuffer,
          filename: 'test-upload.txt',
          mimeType: 'text/plain',
        },
        'test',
        'SystemTest'
      );

      debugInfo.test = {
        success: true,
        fileId: result.fileId,
        fileName: result.fileName,
        webViewLink: result.webViewLink,
        webContentLink: result.webContentLink,
      };
      debugInfo.status = 'success';
      debugInfo.message = 'Google Drive is configured correctly! Test file uploaded successfully.';

    } catch (uploadError) {
      const error = uploadError as Error & { message: string; stack?: string };
      debugInfo.test = {
        success: false,
        error: error.message,
        errorDetails: error.toString(),
        stack: error.stack,
      };
      debugInfo.status = 'upload_failed';
      debugInfo.message = 'Google Drive credentials found but upload failed. Check error details.';
    }

  } catch (mainError) {
    const error = mainError as Error & { message: string; stack?: string };
    debugInfo.status = 'error';
    debugInfo.error = {
      message: error.message,
      details: error.toString(),
      stack: error.stack,
    };
  }

  return NextResponse.json(debugInfo, { status: 200 });
}
