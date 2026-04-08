# Google Drive Debug Guide

## 🔍 Quick Debug Test

### Step 1: Test Google Drive Configuration

Visit this URL in your browser:
```
http://localhost:3000/api/test-drive
```

This will show you:
- ✅ Which environment variables are set
- ✅ If Google Drive credentials are valid
- ✅ If a test file can be uploaded
- ❌ Detailed error messages if something fails

### Step 2: Check Server Logs

All debug information is logged to the console. Look for these prefixes:

- `[GoogleDrive]` - Google Drive operations
- `[API]` - API route processing
- `✓` - Success messages
- `ERROR` or `WARNING` - Problems

## 📋 Debug Checklist

### Environment Variables

Check your `.env` file has all 3 variables:

```bash
GOOGLE_DRIVE_FOLDER_ID=xxxxx
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxx@xxx.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

**Common Issues:**

❌ **Missing quotes around private key**
```bash
# WRONG:
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----...

# RIGHT:
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

❌ **Removed \n characters**
```bash
# WRONG:
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
MIIEvQ...
-----END PRIVATE KEY-----"

# RIGHT:
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n"
```

❌ **Service account email doesn't match**
- Must match exactly what's in your service account JSON file
- Should end with `.iam.gserviceaccount.com`

### Google Drive Folder

✅ **Verify folder is shared with service account:**

1. Go to your Google Drive folder
2. Right-click → "Share"
3. Check that your service account email is listed
4. Permission should be "Editor"

✅ **Verify folder ID:**

1. Open the folder in Google Drive
2. Look at URL: `https://drive.google.com/drive/folders/[FOLDER_ID]`
3. Copy everything after `/folders/`
4. Paste into `GOOGLE_DRIVE_FOLDER_ID`

### Service Account Permissions

✅ **Verify Google Drive API is enabled:**

1. Go to https://console.cloud.google.com
2. Select your project
3. Go to "APIs & Services" → "Library"
4. Search "Google Drive API"
5. Should show "Manage" (not "Enable")

## 🐛 Reading Debug Logs

### Successful Upload

Look for this sequence in logs:

```
[API] ===== GOOGLE DRIVE CHECK =====
[API] Has Folder ID: true
[API] Has Service Email: true
[API] Has Private Key: true
[API] Use Google Drive: true
[API] Attachments: 1 files
[API] ===== UPLOADING TO GOOGLE DRIVE =====
[GoogleDrive] ===== Starting Upload =====
[GoogleDrive] File: test.pdf
[GoogleDrive] Folder ID: 1abc...xyz
[GoogleDrive] ✓ Drive client ready
[GoogleDrive] Buffer size: 12345 bytes
[GoogleDrive] Creating/finding date folder: 2025-11-04
[GoogleDrive] ✓ Found existing date folder
[GoogleDrive] Uploading file to folder: 1def...uvw
[GoogleDrive] New filename: contact_JohnDoe_1699123456_test.pdf
[GoogleDrive] Starting file upload...
[GoogleDrive] ✓ File uploaded! ID: 1ghi...rst
[GoogleDrive] Setting file permissions (public read)...
[GoogleDrive] ✓ Permissions set
[GoogleDrive] ===== Upload Complete =====
[GoogleDrive] View Link: https://drive.google.com/...
[API] ✓ Successfully uploaded 1 files
[API] ✓ Generated file links HTML
```

### Common Error Patterns

#### Error: "Google Drive credentials not configured"

```
[GoogleDrive] Service Account Email: NOT SET
[GoogleDrive] Private Key: NOT SET
[GoogleDrive] ERROR: Google Drive credentials not configured
```

**Solution:** Add environment variables to `.env` file

---

#### Error: "GOOGLE_DRIVE_FOLDER_ID not configured"

```
[GoogleDrive] ERROR: GOOGLE_DRIVE_FOLDER_ID not configured
```

**Solution:** Add `GOOGLE_DRIVE_FOLDER_ID` to `.env` file

---

#### Error: "Permission denied" or "File not found"

```
[GoogleDrive] ===== UPLOAD FAILED =====
[GoogleDrive] Error Code: 403 or 404
[GoogleDrive] Error Message: Permission denied
```

**Solutions:**
1. Share the folder with your service account email
2. Give "Editor" permission (not just "Viewer")
3. Verify folder ID is correct

---

#### Error: "Invalid JWT" or "Invalid credentials"

```
[GoogleDrive] ERROR: Failed to get Drive client
[GoogleDrive] Error: invalid_grant
```

**Solutions:**
1. Check private key has `\n` characters
2. Private key should be wrapped in quotes
3. Copy private key directly from JSON file (don't modify it)
4. Make sure service account email matches exactly

---

#### Error: "API not enabled"

```
[GoogleDrive] Error Code: 403
[GoogleDrive] Error Message: Google Drive API has not been used
```

**Solution:**
1. Go to Google Cloud Console
2. Enable Google Drive API for your project

## 🧪 Manual Testing Steps

### Test 1: Environment Variables

Run in terminal:
```bash
cd awnguard-cloud
node -e "console.log('Folder ID:', process.env.GOOGLE_DRIVE_FOLDER_ID ? 'SET' : 'NOT SET')"
node -e "console.log('Email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? 'SET' : 'NOT SET')"
node -e "console.log('Key:', process.env.GOOGLE_PRIVATE_KEY ? 'SET' : 'NOT SET')"
```

All should show "SET"

### Test 2: Test Upload Endpoint

1. Make sure dev server is running
2. Visit: `http://localhost:3000/api/test-drive`
3. You should see JSON response with `"status": "success"`
4. Check your Google Drive folder for a test file

### Test 3: Form Submission

1. Go to contact form: `http://localhost:3000/contact`
2. Fill out form with test data
3. Upload a small test file
4. Submit
5. Open browser console (F12)
6. Look for `[GoogleDrive]` and `[API]` log messages
7. Check your email for the link
8. Check Google Drive folder for the file

## 📞 Getting Help

If you're still stuck, gather this information:

1. **Output from test endpoint:**
   - Visit `http://localhost:3000/api/test-drive`
   - Copy the JSON response

2. **Server console logs:**
   - Copy all `[GoogleDrive]` and `[API]` log lines
   - Include any error messages

3. **Browser console errors:**
   - Open F12 → Console
   - Copy any red error messages

4. **Environment check:**
   ```bash
   # Run this and share output (it won't show actual values):
   cd awnguard-cloud
   cat .env | grep GOOGLE | sed 's/=.*/=***HIDDEN***/'
   ```

Share all of this and I'll help you troubleshoot!

## ✅ Success Indicators

You'll know it's working when:

1. ✅ Test endpoint returns `"status": "success"`
2. ✅ Test file appears in your Google Drive folder
3. ✅ Form submission succeeds without errors
4. ✅ Email contains clickable Google Drive links
5. ✅ Clicking links opens files in Google Drive

## 🎯 Quick Fixes

| Problem | Quick Fix |
|---------|----------|
| Missing env vars | Copy from service account JSON file |
| Permission denied | Share folder with service account email |
| Invalid private key | Include `\n` and wrap in quotes |
| API not enabled | Enable Drive API in Cloud Console |
| Wrong folder ID | Copy from Drive folder URL |
| Service email mismatch | Must end in `.iam.gserviceaccount.com` |

## 📝 Next Steps After Success

Once it's working:

1. Test with different file types (PDF, images, ZIP)
2. Test with multiple files
3. Check files are organized by date in Drive
4. Verify email links work correctly
5. Test on different forms (contact, quote, career)

Your Google Drive integration is now fully debugged and ready to use! 🎉
