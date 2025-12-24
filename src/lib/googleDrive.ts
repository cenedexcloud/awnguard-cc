import { google } from 'googleapis';
import { Readable } from 'stream';

interface UploadResult {
  fileId: string;
  fileName: string;
  webViewLink: string;
  webContentLink: string;
}

/**
 * Initialize Google Drive API client
 */
function getDriveClient() {
  console.log('[GoogleDrive] Initializing Drive client...');

  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  console.log('[GoogleDrive] Service Account Email:', serviceAccountEmail ? 'SET' : 'NOT SET');
  console.log('[GoogleDrive] Private Key:', privateKey ? `SET (${privateKey.length} chars)` : 'NOT SET');

  if (!serviceAccountEmail || !privateKey) {
    const error = new Error('Google Drive credentials not configured. Please set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in .env');
    console.error('[GoogleDrive] Error:', error.message);
    throw error;
  }

  try {
    const auth = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    console.log('[GoogleDrive] JWT auth created successfully');
    return google.drive({ version: 'v3', auth });
  } catch (error) {
    console.error('[GoogleDrive] Error creating JWT auth:', error);
    throw error;
  }
}

/**
 * Upload a file to Google Drive
 * @param file - File object with content (Buffer or base64 string), filename, and mimeType
 * @param formType - Type of form (contact, quote, career) for organization
 * @param userName - Name of person who submitted the form
 */
export async function uploadToGoogleDrive(
  file: {
    content: Buffer | string;
    filename: string;
    mimeType: string;
  },
  formType: string,
  userName: string
): Promise<UploadResult> {
  console.log('[GoogleDrive] ===== Starting Upload =====');
  console.log('[GoogleDrive] File:', file.filename);
  console.log('[GoogleDrive] MIME Type:', file.mimeType);
  console.log('[GoogleDrive] Form Type:', formType);
  console.log('[GoogleDrive] User Name:', userName);

  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!folderId) {
    console.error('[GoogleDrive] ERROR: GOOGLE_DRIVE_FOLDER_ID not configured');
    throw new Error('GOOGLE_DRIVE_FOLDER_ID not configured in .env');
  }

  console.log('[GoogleDrive] Folder ID:', folderId);

  let drive;
  try {
    drive = getDriveClient();
    console.log('[GoogleDrive] ✓ Drive client ready');
  } catch (error) {
    console.error('[GoogleDrive] ERROR: Failed to get Drive client:', error);
    throw error;
  }

  // Convert base64 to Buffer if needed
  console.log('[GoogleDrive] Converting file content to buffer...');
  const buffer = typeof file.content === 'string'
    ? Buffer.from(file.content, 'base64')
    : file.content;

  console.log('[GoogleDrive] Buffer size:', buffer.length, 'bytes');

  // Create a readable stream from buffer
  const bufferStream = new Readable();
  bufferStream.push(buffer);
  bufferStream.push(null);

  // Generate organized filename with timestamp
  const timestamp = Date.now();
  const sanitizedUserName = userName.replace(/[^a-zA-Z0-9]/g, '');
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const newFilename = `${formType}_${sanitizedUserName}_${timestamp}_${file.filename}`;

  try {
    // Create subfolder for the date if it doesn't exist
    const dateFolderName = date;
    let dateFolderId = folderId;

    console.log('[GoogleDrive] Creating/finding date folder:', dateFolderName);

    try {
      // Check if date folder exists
      console.log('[GoogleDrive] Searching for existing date folder...');
      const folderSearch = await drive.files.list({
        q: `name='${dateFolderName}' and '${folderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
        fields: 'files(id, name)',
      });

      if (folderSearch.data.files && folderSearch.data.files.length > 0) {
        dateFolderId = folderSearch.data.files[0].id || folderId;
        console.log('[GoogleDrive] ✓ Found existing date folder:', dateFolderId);
      } else {
        // Create date folder
        const folderMetadata = {
          name: dateFolderName,
          mimeType: 'application/vnd.google-apps.folder',
          parents: [folderId],
        };

        const folder = await drive.files.create({
          requestBody: folderMetadata,
          fields: 'id',
        });

        dateFolderId = folder.data.id || folderId;
      }
    } catch (folderError) {
      console.error('Error creating/finding date folder, using root folder:', folderError);
      // Continue with root folder if date folder creation fails
    }

    // Upload file to Google Drive
    const fileMetadata = {
      name: newFilename,
      parents: [dateFolderId],
    };

    const media = {
      mimeType: file.mimeType,
      body: bufferStream,
    };

    const uploadedFile = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, name, webViewLink, webContentLink',
    });

    // Make file accessible via link (anyone with link can view)
    await drive.permissions.create({
      fileId: uploadedFile.data.id!,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    console.log(`File uploaded successfully: ${uploadedFile.data.name}`);

    return {
      fileId: uploadedFile.data.id!,
      fileName: uploadedFile.data.name!,
      webViewLink: uploadedFile.data.webViewLink!,
      webContentLink: uploadedFile.data.webContentLink!,
    };
  } catch (uploadError) {
    const error = uploadError as Error & { code?: string; response?: { data?: unknown }; stack?: string };
    console.error('[GoogleDrive] ===== UPLOAD FAILED =====');
    console.error('[GoogleDrive] Error:', error);
    console.error('[GoogleDrive] Error Message:', error.message);
    console.error('[GoogleDrive] Error Code:', error.code);
    console.error('[GoogleDrive] Error Response:', error.response?.data);
    console.error('[GoogleDrive] Stack:', error.stack);

    const errorMessage = error.message || 'Unknown error';
    const errorCode = error.code || 'UNKNOWN';

    throw new Error(`Failed to upload file to Google Drive: [${errorCode}] ${errorMessage}`);
  }
}

/**
 * Upload multiple files to Google Drive
 */
export async function uploadMultipleFiles(
  files: Array<{
    content: Buffer | string;
    filename: string;
    mimeType: string;
  }>,
  formType: string,
  userName: string
): Promise<UploadResult[]> {
  const uploadPromises = files.map(file =>
    uploadToGoogleDrive(file, formType, userName)
  );

  return Promise.all(uploadPromises);
}

/**
 * Generate HTML list of file links for email
 */
export function generateFileLinksHtml(uploadResults: UploadResult[]): string {
  if (uploadResults.length === 0) {
    return '';
  }

  const fileLinks = uploadResults.map(result =>
    `<li><a href="${result.webViewLink}" target="_blank">${result.fileName}</a></li>`
  ).join('');

  return `
    <p><strong>Attached Files:</strong></p>
    <ul>
      ${fileLinks}
    </ul>
  `;
}
