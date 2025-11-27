# Google Drive API Setup Guide

## Overview
This guide shows how to upload contact form attachments to Google Drive and send shareable links via email instead of embedding files directly.

## Benefits
- No email size limits (Resend 40MB limit eliminated)
- Files permanently stored and backed up
- Recipients can preview files in browser
- Better user experience with clickable links
- Organized file management in Google Drive

## Setup Steps

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name it "AwnGuard Contact Forms" or similar
4. Click "Create"

### 2. Enable Google Drive API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Drive API"
3. Click on it and press "Enable"

### 3. Create Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Name: `awnguard-forms-uploader`
4. Description: "Service account for uploading contact form attachments"
5. Click "Create and Continue"
6. Skip optional steps and click "Done"

### 4. Create Service Account Key

1. Click on the service account you just created
2. Go to "Keys" tab
3. Click "Add Key" → "Create New Key"
4. Choose "JSON" format
5. Click "Create"
6. **Save the downloaded JSON file securely** (you'll need it)

### 5. Create Google Drive Folder

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder called "Contact Form Attachments"
3. Right-click the folder → "Share"
4. Add your service account email (found in the JSON file, looks like `xxx@xxx.iam.gserviceaccount.com`)
5. Give it "Editor" permission
6. Copy the folder ID from URL: `https://drive.google.com/drive/folders/[FOLDER_ID]`

### 6. Configure Environment Variables

Add to your `.env` file:

```bash
# Google Drive Configuration
GOOGLE_DRIVE_FOLDER_ID=your_folder_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@xxx.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"
```

**How to get these values from the JSON file:**
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Copy from `client_email` field
- `GOOGLE_PRIVATE_KEY`: Copy from `private_key` field (keep the `\n` characters)

### 7. Install Dependencies

```bash
cd awnguard-cloud
bun add googleapis
```

## Security Notes

- ⚠️ **Never commit the service account JSON file to Git**
- ⚠️ **Never commit the private key to Git**
- ✅ Keep credentials in `.env` file only
- ✅ Add `.env` to `.gitignore`
- ✅ Use separate service accounts for dev/production

## File Organization

Files will be organized in Google Drive like this:

```
Contact Form Attachments/
├── 2025-11-04/
│   ├── contact_JohnDoe_1699123456_file1.pdf
│   ├── quote_JaneSmith_1699123789_file2.jpg
│   └── career_BobJones_1699124012_resume.pdf
└── 2025-11-05/
    └── ...
```

## Next Steps

After setup:
1. Update API route to use Google Drive upload
2. Send shareable links in emails instead of attachments
3. Test with sample files
4. Monitor uploads in Google Drive folder
