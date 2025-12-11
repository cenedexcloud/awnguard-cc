import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { uploadMultipleFiles, generateFileLinksHtml } from '@/lib/googleDrive';

// Configure route settings
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

interface Attachment {
  filename: string;
  content: string;
  type: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, formData, attachments } = body;

    // Log incoming data for debugging
    console.log('=== Incoming Form Submission ===');
    console.log('Form Type:', formType);
    console.log('Attachments received:', attachments?.length || 0);
    if (attachments && attachments.length > 0) {
      console.log('Attachment details:', attachments.map((a: Attachment) => ({
        filename: a.filename,
        type: a.type,
        size: a.content?.length || 0
      })));
    }

    // Upload attachments to Google Drive if present
    let fileLinksHtml = '';
    const useGoogleDrive = process.env.GOOGLE_DRIVE_FOLDER_ID &&
                          process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
                          process.env.GOOGLE_PRIVATE_KEY;

    console.log('[API] ===== GOOGLE DRIVE CHECK =====');
    console.log('[API] Has Folder ID:', !!process.env.GOOGLE_DRIVE_FOLDER_ID);
    console.log('[API] Has Service Email:', !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    console.log('[API] Has Private Key:', !!process.env.GOOGLE_PRIVATE_KEY);
    console.log('[API] Use Google Drive:', useGoogleDrive);
    console.log('[API] Attachments:', attachments?.length || 0, 'files');

    if (attachments && attachments.length > 0) {
      if (useGoogleDrive) {
        try {
          console.log('[API] ===== UPLOADING TO GOOGLE DRIVE =====');
          console.log('[API] Uploading', attachments.length, 'files...');
          const uploadResults = await uploadMultipleFiles(
            attachments.map((att: Attachment) => ({
              content: att.content,
              filename: att.filename,
              mimeType: att.type,
            })),
            formType,
            formData.name || 'Unknown'
          );
          console.log('[API] ✓ Successfully uploaded', uploadResults.length, 'files');
          fileLinksHtml = generateFileLinksHtml(uploadResults);
          console.log('[API] ✓ Generated file links HTML');
        } catch (driveError) {
          const error = driveError as Error & { message: string; stack?: string };
          console.error('[API] ===== GOOGLE DRIVE ERROR =====');
          console.error('[API] Error:', error);
          console.error('[API] Message:', error.message);
          console.error('[API] Stack:', error.stack);
          // Fall back to listing filenames only
          const fileNames = attachments.map((a: Attachment) => a.filename).join(', ');
          fileLinksHtml = `<p><strong>Files uploaded:</strong> ${fileNames}</p><p><em>Note: File links temporarily unavailable. Files were received.</em></p>`;
        }
      } else {
        console.log('Google Drive not configured - listing filenames only');
        const fileNames = attachments.map((a: Attachment) => a.filename).join(', ');
        fileLinksHtml = `<p><strong>Attached Files:</strong> ${fileNames}</p><p><em>Note: Configure Google Drive to receive actual file links.</em></p>`;
      }
    }

    // Create email content based on form type
    let emailSubject = '';
    let emailContent = '';
    let smsContent = '';

    // Format the data based on form type
    switch (formType) {
      case 'contact':
        emailSubject = 'New Contact Form Submission';
        emailContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Service:</strong> ${formData.service || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
          ${fileLinksHtml}
        `;
        smsContent = `New Contact: ${formData.name}, ${formData.phone}, Service: ${formData.service || 'N/A'}`;
        break;

      case 'quote':
        emailSubject = 'New Quote Request';
        emailContent = `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Address:</strong> ${formData.address || 'N/A'}</p>
          <p><strong>City:</strong> ${formData.city || 'N/A'}</p>
          <p><strong>Services:</strong> ${formData.services?.join(', ') || 'N/A'}</p>
          <p><strong>Details:</strong></p>
          <p>${formData.details || 'N/A'}</p>
          ${fileLinksHtml}
        `;
        smsContent = `New Quote: ${formData.name}, ${formData.phone}, Services: ${formData.services?.join(', ') || 'N/A'}`;
        break;

      case 'quick-quote':
        emailSubject = 'New Quick Quote Request';
        emailContent = `
          <h2>New Quick Quote Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
        `;
        smsContent = `New Quick Quote: ${formData.name}, ${formData.phone}`;
        break;

      case 'career':
        emailSubject = 'New Career Application';
        emailContent = `
          <h2>New Career Application</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message || 'N/A'}</p>
          ${fileLinksHtml}
        `;
        smsContent = `New Career App: ${formData.name}, ${formData.phone}`;
        break;

      default:
        emailSubject = 'New Form Submission';
        emailContent = `
          <h2>New Form Submission</h2>
          <pre>${JSON.stringify(formData, null, 2)}</pre>
        `;
        smsContent = `New form submission from ${formData.name || 'Unknown'}`;
    }

    // Initialize Resend if API key is available
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured. Notifications will not be sent.');
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully',
        warning: 'Email notifications require configuration'
      });
    }

    const resend = new Resend(resendApiKey);

    try {
      // Send email to info@tradeblaze.net
      console.log('Sending email to info@tradeblaze.net...');

      // Prepare email data
      const emailData: {
        from: string;
        to: string[];
        subject: string;
        html: string;
        attachments?: { filename: string; content: Buffer }[];
      } = {
        from: 'AwnGuard Forms <forms@tradeblaze.net>',
        to: ['info@tradeblaze.net'],
        subject: emailSubject,
        html: emailContent,
      };

      // Add attachments if they exist
      if (attachments && attachments.length > 0) {
        console.log(`Adding ${attachments.length} attachment(s) to email...`);

        // Validate and prepare attachments
        const validAttachments: Array<{ filename: string; content: Buffer }> = [];
        for (const att of attachments) {
          // Validate attachment
          if (!att.filename || !att.content) {
            console.error('Invalid attachment - missing filename or content:', att.filename);
            continue;
          }

          // Validate base64 content
          try {
            const buffer = Buffer.from(att.content, 'base64');
            // Check if buffer is valid base64 (length > 0 and not just empty string)
            if (buffer.length === 0 && att.content.length > 0) {
              console.error(`Attachment ${att.filename} has invalid base64 content (empty buffer)`);
              continue;
            }
            console.log(`Valid attachment: ${att.filename}, Size: ${(buffer.length / 1024).toFixed(2)} KB`);
            validAttachments.push({
              filename: att.filename,
              content: buffer,
            });
          } catch (error) {
            console.error(`Invalid base64 content for attachment: ${att.filename}`, error);
          }
        }

        if (validAttachments.length > 0) {
          emailData.attachments = validAttachments;
          console.log('Email payload with attachments:', {
            from: emailData.from,
            to: emailData.to,
            subject: emailData.subject,
            attachmentCount: emailData.attachments?.length || 0
          });
        } else {
          console.warn('No valid attachments to send');
        }
      }

      console.log('Sending email via Resend...');
      const emailResult = await resend.emails.send(emailData);
      console.log('Email sent successfully! ID:', emailResult.data?.id);
      console.log('Full response:', JSON.stringify(emailResult, null, 2));

      // Send SMS via email gateway (optional)
      try {
        console.log('Sending SMS to 3108939219@msg.fi.google.com...');
        await resend.emails.send({
          from: 'AwnGuard Forms <forms@tradeblaze.net>',
          to: ['3108939219@msg.fi.google.com'],
          subject: '',
          text: smsContent.substring(0, 160),
        });
        console.log('SMS sent successfully');
      } catch (smsError) {
        console.error('SMS failed (non-critical):', smsError);
        // Don't fail the whole request if SMS fails
      }

      return NextResponse.json({
        success: true,
        message: 'Notifications sent successfully',
        emailId: emailResult.data?.id
      });

    } catch (emailError) {
      const error = emailError as Error & { statusCode?: number; response?: unknown };
      console.error('=== Error sending email via Resend ===');
      console.error('Error object:', error);
      console.error('Error message:', error.message);
      console.error('Error statusCode:', error.statusCode);
      console.error('Error response:', error.response);
      console.error('Error data:', JSON.stringify(error, null, 2));

      return NextResponse.json({
        success: false,
        error: 'Failed to send email: ' + (error.message || 'Unknown error')
      }, { status: 500 });
    }

  } catch (error) {
    const err = error as Error;
    console.error('Error processing request:', error);
    console.error('Error stack:', err.stack);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process notification: ' + (err.message || 'Unknown error')
      },
      { status: 500 }
    );
  }
}
