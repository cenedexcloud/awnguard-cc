# Chunked Video Upload Guide

## Overview

This implementation provides a robust solution for uploading large video files by breaking them into 500KB chunks. This approach offers better reliability, progress tracking, and compatibility with server limitations.

## Files Created

### 1. `/src/lib/chunkedUpload.ts`
Core utility functions for chunking and uploading files.

**Key Functions:**
- `splitFileIntoChunks(file, chunkSize)` - Splits a file into chunks
- `uploadFileInChunks(options)` - Uploads a file in chunks with progress tracking
- `uploadMultipleFilesInChunks(files, uploadUrl, options)` - Uploads multiple files

### 2. `/src/app/api/upload-chunk/route.ts`
Next.js API route that receives chunks, stores them temporarily, and reassembles the complete file.

**Process:**
1. Receives chunk + metadata
2. Stores chunk in temporary directory
3. Checks if all chunks received
4. If complete, reassembles file and cleans up chunks

### 3. `/src/components/ChunkedVideoUpload.tsx`
Reusable React component with UI for video upload with progress tracking.

### 4. `/src/app/video-upload/page.tsx`
Demo page showing how to use the component.

## How to Use

### Basic Usage (Using the Component)

```tsx
import ChunkedVideoUpload from '@/components/ChunkedVideoUpload';

function MyPage() {
  return (
    <ChunkedVideoUpload
      onUploadComplete={(fileName) => console.log('Done:', fileName)}
      onUploadError={(error) => console.error('Error:', error)}
      maxSizeMB={500}
    />
  );
}
```

### Advanced Usage (Direct API)

```tsx
import { uploadFileInChunks } from '@/lib/chunkedUpload';

async function handleUpload(file: File) {
  try {
    await uploadFileInChunks({
      file,
      uploadUrl: '/api/upload-chunk',
      onProgress: (progress) => {
        console.log(`Progress: ${progress}%`);
      },
      onChunkComplete: (chunkIndex, totalChunks) => {
        console.log(`Chunk ${chunkIndex + 1}/${totalChunks} uploaded`);
      },
      headers: {
        // Add custom headers if needed
        'Authorization': 'Bearer token',
      },
    });
    console.log('Upload complete!');
  } catch (error) {
    console.error('Upload failed:', error);
  }
}
```

### Integration with Existing Form (Quote Page)

To integrate chunked upload into your existing quote form:

```tsx
// In src/app/quote/page.tsx

import { uploadFileInChunks } from '@/lib/chunkedUpload';

// Add upload progress state
const [uploadProgress, setUploadProgress] = useState<Record<number, number>>({});
const [isUploadingFiles, setIsUploadingFiles] = useState(false);

// Modify handleSubmit to upload files in chunks
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  setIsUploadingFiles(true);

  try {
    // Upload files in chunks
    const uploadPromises = files
      .filter(file => file !== undefined)
      .map((file, index) =>
        uploadFileInChunks({
          file,
          uploadUrl: '/api/upload-chunk',
          onProgress: (progress) => {
            setUploadProgress(prev => ({ ...prev, [index]: progress }));
          },
        })
      );

    await Promise.all(uploadPromises);

    // Now submit the form data
    // ... rest of your form submission logic

    setSubmitStatus('success');
  } catch (error) {
    console.error('Upload error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setIsUploadingFiles(false);
  }
};
```

## Configuration

### Chunk Size
Default is 500KB. To change:

```tsx
await uploadFileInChunks({
  file,
  uploadUrl: '/api/upload-chunk',
  chunkSize: 1024 * 1024, // 1MB chunks
});
```

### Upload Directory
Default is `uploads/` in project root. To change, modify in `/src/app/api/upload-chunk/route.ts`:

```ts
const UPLOAD_DIR = join(process.cwd(), 'your-custom-dir');
```

### File Validation
In the component, customize accepted formats and max size:

```tsx
<ChunkedVideoUpload
  acceptedFormats="video/mp4,video/webm,video/quicktime"
  maxSizeMB={1000}
/>
```

## Security Considerations

### 1. File Type Validation
Always validate file types on both client and server:

```ts
// Server-side in API route
if (!metadata.fileType.startsWith('video/')) {
  return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
}
```

### 2. File Size Limits
Set maximum file size to prevent abuse:

```ts
const MAX_FILE_SIZE = 1000 * 1024 * 1024; // 1GB
if (metadata.fileSize > MAX_FILE_SIZE) {
  return NextResponse.json({ error: 'File too large' }, { status: 400 });
}
```

### 3. Rate Limiting
Consider adding rate limiting to prevent abuse (use middleware or a library like `@upstash/ratelimit`).

### 4. Authentication
Add authentication to protect the upload endpoint:

```ts
// In API route
const session = await getServerSession();
if (!session) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
```

## Storage Options

### Current: Local File System
Files are stored in the `uploads/` directory. This works for development and small deployments.

### Production: Cloud Storage
For production, consider integrating with cloud storage:

**AWS S3:**
```ts
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: 'us-east-1' });

// After reassembling file
await s3Client.send(new PutObjectCommand({
  Bucket: 'your-bucket',
  Key: fileName,
  Body: finalBuffer,
}));
```

**Vercel Blob:**
```ts
import { put } from '@vercel/blob';

const blob = await put(fileName, finalBuffer, {
  access: 'public',
});
```

## Testing

### Visit Demo Page
Navigate to `/video-upload` to see the component in action.

### Test Different Scenarios
1. Upload a small video (< 500KB) - should be 1 chunk
2. Upload a medium video (1-5MB) - multiple chunks
3. Upload a large video (50MB+) - many chunks
4. Test network interruption handling

## Troubleshooting

### Chunks not reassembling
- Check that all chunks have the same `fileName` in metadata
- Verify chunks are being stored in the correct directory
- Check server logs for errors

### Progress not updating
- Ensure `onProgress` callback is properly connected to state
- Check browser console for errors

### API route timeout
- For very large files, you may need to adjust Vercel/deployment timeout settings
- Consider using serverless functions with longer timeouts

## Next Steps

1. **Add Resume Capability**: Store chunk upload state to allow resuming interrupted uploads
2. **Add Retry Logic**: Automatically retry failed chunks
3. **Implement Parallel Uploads**: Upload multiple chunks simultaneously
4. **Add Compression**: Compress video before chunking for faster uploads
5. **Add Preview**: Generate and show video thumbnail after upload

## Example: Complete Integration

See `/src/app/video-upload/page.tsx` for a complete working example.
