# File Attachments Setup - Complete

## Overview
All contact forms on the tradeblaze.net website now support file attachments. Files are uploaded by users and sent as email attachments to **info@tradeblaze.net** using the Resend API.

## Supported Forms

### 1. Contact Form (`/contact`)
- **Location**: `src/components/ContactForm.tsx`
- **File Slots**: 2 optional file uploads
- **Use Case**: General inquiries with supporting documents

### 2. Quote Form (`/quote`)
- **Location**: `src/app/quote/page.tsx`
- **File Slots**: 4 file uploads (first one marked as required)
- **Use Case**: Quote requests with project photos/documents

### 3. Career Application Form (`/careers`)
- **Location**: `src/app/careers/page.tsx`
- **File Slots**: 2 dedicated uploads (Resume & Cover Letter)
- **Use Case**: Job applications

## File Requirements

### Supported Formats
- **Images**: JPG, JPEG, PNG
- **Documents**: PDF, DOC, DOCX, TXT
- **Archives**: ZIP

### File Size Limits
- Maximum 10MB per file
- No limit on total attachments (but Resend has a 40MB total limit per email)

## Technical Implementation

### Client-Side (React)
1. File input with accept attribute for format validation
2. File size and type validation
3. FileReader API to convert files to base64
4. Base64 data sent in JSON payload to API

### Server-Side (Next.js API Route)
- **Endpoint**: `/api/send-notification`
- **File**: `src/app/api/send-notification/route.ts`
- Receives attachments as base64-encoded strings
- Converts to Resend-compatible format
- Sends via Resend API to info@tradeblaze.net

### Code Example
```typescript
// File validation
const allowedTypes = [
  'image/jpeg',
  'image/png',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'application/zip',
  'application/x-zip-compressed'
];

// Convert to base64
const base64 = await new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    const base64String = reader.result as string;
    resolve(base64String.split(',')[1]);
  };
  reader.readAsDataURL(file);
});

// Send to API
const response = await fetch('/api/send-notification', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    formType: 'contact',
    formData: formData,
    attachments: [{
      filename: file.name,
      content: base64,
      type: file.type
    }]
  })
});
```

## Email Delivery
- **Sender**: AwnGuard Forms <forms@tradeblaze.net>
- **Recipient**: info@tradeblaze.net
- **Subject**: Varies by form type (e.g., "New Contact Form Submission")
- **Attachments**: All uploaded files are attached to the email

## Testing
To test the file attachment feature:
1. Navigate to any form (contact, quote, or careers)
2. Fill out the required fields
3. Upload one or more files (JPG, PNG, PDF, DOC, TXT, or ZIP)
4. Submit the form
5. Check info@tradeblaze.net inbox for the email with attachments

## Environment Variables Required
```bash
RESEND_API_KEY=re_your_api_key_here
```

## Notes
- Files are NOT stored on the server
- Files are temporarily held in memory during upload
- Base64 encoding increases file size by ~33%
- Resend has a 40MB total email size limit (including all attachments)
- File validation prevents malicious uploads
