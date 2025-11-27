# Video Chunked Upload - Quick Start Guide

## 🎯 Overview

Your project now has **chunked video upload** functionality that automatically splits large video files into **500KB chunks** before uploading to the backend. This provides:

- ✅ Better reliability for large file uploads
- ✅ Progress tracking with percentage and chunk count
- ✅ Server compatibility (works with file size limits)
- ✅ Automatic file reassembly on the server

## 🚀 Quick Start

### Option 1: Use the Pre-built Component

The easiest way to add video upload to any page:

```tsx
import ChunkedVideoUpload from '@/components/ChunkedVideoUpload';

export default function MyPage() {
  return (
    <ChunkedVideoUpload
      onUploadComplete={(fileName) => {
        console.log('Upload complete:', fileName);
        // Add your custom logic here
      }}
      onUploadError={(error) => {
        console.error('Upload failed:', error);
      }}
      maxSizeMB={500}  // Optional: max file size
    />
  );
}
```

### Option 2: Use the Utility Functions Directly

For custom implementations:

```tsx
import { uploadFileInChunks } from '@/lib/chunkedUpload';

async function handleVideoUpload(file: File) {
  try {
    await uploadFileInChunks({
      file,
      uploadUrl: '/api/upload-chunk',
      onProgress: (progress) => {
        console.log(`Upload progress: ${progress}%`);
      },
      onChunkComplete: (chunkIndex, totalChunks) => {
        console.log(`Uploaded chunk ${chunkIndex + 1} of ${totalChunks}`);
      },
    });
    console.log('Upload complete!');
  } catch (error) {
    console.error('Upload failed:', error);
  }
}
```

## 📁 Files Created

| File | Purpose |
|------|---------|
| `/src/lib/chunkedUpload.ts` | Core utility functions for chunking and uploading |
| `/src/app/api/upload-chunk/route.ts` | Backend API that receives and reassembles chunks |
| `/src/components/ChunkedVideoUpload.tsx` | Ready-to-use React component with UI |
| `/src/app/video-upload/page.tsx` | Demo page showing the component in action |

## 🎬 Demo

Visit **`/video-upload`** in your browser to see a working demo with:
- File selection
- Progress tracking
- Chunk upload visualization
- Success/error handling

## 🔧 Integration Examples

### Example 1: Add to Existing Quote Form

Update `/src/app/quote/page.tsx` to use chunked upload:

```tsx
import { uploadFileInChunks } from '@/lib/chunkedUpload';

// In your component
const [uploadProgress, setUploadProgress] = useState<Record<number, number>>({});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Upload files in chunks
  for (let i = 0; i < files.length; i++) {
    if (files[i]) {
      await uploadFileInChunks({
        file: files[i],
        uploadUrl: '/api/upload-chunk',
        onProgress: (progress) => {
          setUploadProgress(prev => ({ ...prev, [i]: progress }));
        },
      });
    }
  }

  // Submit form after files uploaded
  // ... rest of your form logic
};
```

### Example 2: Multiple File Upload

```tsx
import { uploadMultipleFilesInChunks } from '@/lib/chunkedUpload';

async function uploadAll(files: File[]) {
  await uploadMultipleFilesInChunks(files, '/api/upload-chunk', {
    onFileProgress: (fileIndex, progress) => {
      console.log(`File ${fileIndex}: ${progress}%`);
    },
    onFileComplete: (fileIndex, fileName) => {
      console.log(`${fileName} uploaded successfully`);
    },
  });
}
```

## ⚙️ Configuration

### Change Chunk Size

Default is 500KB. To customize:

```tsx
await uploadFileInChunks({
  file,
  uploadUrl: '/api/upload-chunk',
  chunkSize: 1024 * 1024, // 1MB chunks
});
```

### Change Upload Directory

Edit `/src/app/api/upload-chunk/route.ts`:

```ts
const UPLOAD_DIR = join(process.cwd(), 'my-custom-uploads');
```

### Add Custom Headers (e.g., Authentication)

```tsx
await uploadFileInChunks({
  file,
  uploadUrl: '/api/upload-chunk',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});
```

## 🔒 Security Best Practices

1. **File Type Validation**: Always validate file types on both client and server
2. **File Size Limits**: Set maximum file size to prevent abuse
3. **Authentication**: Add authentication to the upload endpoint
4. **Rate Limiting**: Consider adding rate limiting to prevent abuse

Example server-side validation in `/src/app/api/upload-chunk/route.ts`:

```ts
// Validate file type
if (!metadata.fileType.startsWith('video/')) {
  return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
}

// Validate file size
const MAX_SIZE = 500 * 1024 * 1024; // 500MB
if (metadata.fileSize > MAX_SIZE) {
  return NextResponse.json({ error: 'File too large' }, { status: 400 });
}
```

## 📤 Where Files Are Stored

- **Development**: Files are stored in `uploads/` directory (git-ignored)
- **Production**: For production deployments, integrate with cloud storage:
  - AWS S3
  - Google Cloud Storage
  - Vercel Blob
  - Azure Blob Storage

## 🐛 Troubleshooting

**Problem**: Chunks not reassembling
- Check server logs in `/src/app/api/upload-chunk/route.ts`
- Verify all chunks have the same `fileName` in metadata

**Problem**: Progress not updating
- Ensure state is properly connected to the `onProgress` callback
- Check browser console for errors

**Problem**: Upload timeout
- For very large files, you may need to adjust serverless function timeout settings
- Consider using longer timeout settings in your deployment platform

## 📚 Additional Documentation

For more detailed information, see `.same/chunked-upload-guide.md`

## 🎉 Next Steps

1. Test the demo page at `/video-upload`
2. Integrate chunked upload into your existing forms
3. Add custom error handling for your use case
4. Consider adding resume capability for interrupted uploads
5. Implement cloud storage integration for production

---

**Need Help?** Check the demo page or the detailed guide in `.same/chunked-upload-guide.md`
