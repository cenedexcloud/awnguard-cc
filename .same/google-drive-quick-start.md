# Google Drive Quick Start Guide

## ✅ What You Get

✨ **No Email Size Limits** - Upload files of any size (Google Drive handles it)
✨ **Better for Recipients** - Clickable links in email, view files in browser
✨ **Permanent Storage** - All files backed up in your Google Drive
✨ **Organized** - Files automatically sorted by date in folders

## 🚀 5-Minute Setup

### Step 1: Create Google Cloud Project (2 min)

1. Go to https://console.cloud.google.com/
2. Click **"Select a project"** → **"New Project"**
3. Name: `AwnGuard Forms`
4. Click **"Create"**

### Step 2: Enable Google Drive API (1 min)

1. In your project, click **"APIs & Services"** → **"Library"**
2. Search for **"Google Drive API"**
3. Click **"Enable"**

### Step 3: Create Service Account (2 min)

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** → **"Service Account"**
3. Name: `forms-uploader`
4. Click **"Create and Continue"** → **"Done"**
5. Click on the service account you just created
6. Go to **"Keys"** tab
7. Click **"Add Key"** → **"Create New Key"** → **"JSON"**
8. **Download the JSON file** (save it somewhere safe!)

### Step 4: Create & Share Google Drive Folder (1 min)

1. Go to https://drive.google.com
2. Create a new folder: **"Contact Form Attachments"**
3. Right-click the folder → **"Share"**
4. In the JSON file you downloaded, find the `client_email` (looks like `xxx@xxx.iam.gserviceaccount.com`)
5. Add that email address to the folder with **"Editor"** permission
6. Copy the **Folder ID** from the URL:
   - URL looks like: `https://drive.google.com/drive/folders/1abc...xyz`
   - The ID is the part after `/folders/`: `1abc...xyz`

### Step 5: Configure Environment Variables

Open `awnguard-cloud/.env` and add these three lines:

```bash
GOOGLE_DRIVE_FOLDER_ID=paste_the_folder_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=paste_client_email_from_json_here
GOOGLE_PRIVATE_KEY="paste_private_key_from_json_here"
```

**How to get the values:**
1. Open the JSON file you downloaded
2. Copy `client_email` value → paste into `GOOGLE_SERVICE_ACCOUNT_EMAIL`
3. Copy `private_key` value → paste into `GOOGLE_PRIVATE_KEY`
   - **IMPORTANT:** Keep the quotes and `\n` characters as-is!
   - Should look like: `"-----BEGIN PRIVATE KEY-----\nMIIE....\n-----END PRIVATE KEY-----\n"`

### Step 6: Test It! 🎉

1. Restart your dev server (if running)
2. Go to the contact form
3. Upload a test file
4. Submit the form
5. Check your email - you should see a clickable link to the file
6. Check your Google Drive folder - the file should be there!

## 📁 How Files are Organized

Your Google Drive folder will look like this:

```
Contact Form Attachments/
├── 2025-11-04/
│   ├── contact_JohnDoe_1699123456_document.pdf
│   ├── quote_JaneSmith_1699123789_photo.jpg
│   └── career_BobJones_1699124012_resume.pdf
└── 2025-11-05/
    └── contact_AliceWilliams_1699234567_project.zip
```

## 🔒 Security

✅ Service account only has access to the specific folder you shared
✅ Private key stored securely in `.env` file (never commit this!)
✅ Files are only accessible via shareable links
✅ You can revoke access anytime from Google Drive

## ❓ Troubleshooting

### "Google Drive credentials not configured"
- Make sure all 3 environment variables are in `.env`
- Restart your dev server after adding them

### "Permission denied"
- Make sure you shared the Google Drive folder with the service account email
- Check the email matches `GOOGLE_SERVICE_ACCOUNT_EMAIL` exactly

### "Invalid private key"
- Make sure you copied the entire private key including the BEGIN/END lines
- Keep the `\n` characters (don't replace them with actual newlines)
- Make sure it's wrapped in quotes

### Files not appearing in Drive
- Check the folder ID is correct
- Make sure the service account has "Editor" permission
- Check the date folder (files are organized by date)

## 💡 Tips

- You can have multiple people access the folder by sharing it with their emails
- Set up notifications in Google Drive to get alerts when new files are added
- Use Google Drive search to find files by customer name or date
- Archive old date folders to keep things organized

## 🎯 What Happens When Someone Submits a Form

1. User uploads files through contact/quote/career form
2. Files are uploaded to your Google Drive folder
3. System creates a dated subfolder (if needed)
4. Files are renamed with form type, name, and timestamp
5. Files are made shareable (anyone with link can view)
6. Email is sent to info@tradeblaze.net with clickable links to the files
7. You click the link and view/download the file in Google Drive!

That's it! Your forms now support unlimited file attachments through Google Drive! 🚀
