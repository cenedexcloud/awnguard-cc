import { generateFileLinksHtml, uploadMultipleFiles } from "@/lib/googleDrive";
import { NextResponse } from "next/server";

// Configure route settings
export const maxDuration = 60;
export const dynamic = "force-dynamic";
// Note: Body size limits in App Router are controlled by the Vercel/platform settings
// Default is typically 4.5MB for Vercel. For larger files, consider direct upload to storage.

interface Attachment {
  filename: string;
  content: string;
  type: string;
}

export async function POST(request: Request) {
  try {
    // Try to parse the request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error:
            "Request payload too large or invalid. Please try with smaller files or fewer attachments.",
        },
        { status: 400 },
      );
    }

    const { formType, formData, attachments } = body;

    // Validate required fields
    if (!formType) {
      return NextResponse.json(
        { success: false, error: "formType is required" },
        { status: 400 },
      );
    }

    if (!formData) {
      return NextResponse.json(
        { success: false, error: "formData is required" },
        { status: 400 },
      );
    }

    // Upload attachments to Google Drive if present
    let fileLinksHtml = "";
    const useGoogleDrive =
      process.env.GOOGLE_DRIVE_FOLDER_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY;

    if (attachments && attachments.length > 0) {
      if (useGoogleDrive) {
        try {
          const uploadResults = await uploadMultipleFiles(
            attachments.map((att: Attachment) => ({
              content: att.content,
              filename: att.filename,
              mimeType: att.type,
            })),
            formType,
            formData.name || "Unknown",
          );
          fileLinksHtml = generateFileLinksHtml(uploadResults);
        } catch {
          // Fall back to listing filenames only
          const fileNames = attachments
            .map((a: Attachment) => a.filename)
            .join(", ");
          fileLinksHtml = `<p><strong>Files uploaded:</strong> ${fileNames}</p><p><em>Note: File links temporarily unavailable. Files were received.</em></p>`;
        }
      } else {
        const fileNames = attachments
          .map((a: Attachment) => a.filename)
          .join(", ");
        fileLinksHtml = `<p><strong>Attached Files:</strong> ${fileNames}</p><p><em>Note: Configure Google Drive to receive actual file links.</em></p>`;
      }
    }

    // Create email content based on form type
    let emailSubject = "";
    let emailContent = "";
    let smsContent = "";

    // Format the data based on form type
    switch (formType) {
      case "contact":
        emailSubject = "New Contact Form Submission";
        emailContent = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Service:</strong> ${formData.service || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
          ${fileLinksHtml}
        `;
        smsContent = `New Contact: ${formData.name}, ${formData.phone}, Service: ${formData.service || "N/A"}`;
        break;

      case "quote":
        emailSubject = "New Quote Request";
        emailContent = `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Address:</strong> ${formData.address || "N/A"}</p>
          <p><strong>City:</strong> ${formData.city || "N/A"}</p>
          <p><strong>Services:</strong> ${formData.services?.join(", ") || "N/A"}</p>
          <p><strong>Details:</strong></p>
          <p>${formData.details || "N/A"}</p>
          ${fileLinksHtml}
        `;
        smsContent = `New Quote: ${formData.name}, ${formData.phone}, Services: ${formData.services?.join(", ") || "N/A"}`;
        break;

      case "quick-quote":
        emailSubject = "New Quick Quote Request";
        emailContent = `
          <h2>New Quick Quote Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
        `;
        smsContent = `New Quick Quote: ${formData.name}, ${formData.phone}`;
        break;

      case "career":
        emailSubject = "New Career Application";
        emailContent = `
          <h2>New Career Application</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message || "N/A"}</p>
          ${fileLinksHtml}
        `;
        smsContent = `New Career App: ${formData.name}, ${formData.phone}`;
        break;

      case "review": {
        const stars =
          "★".repeat(formData.rating) + "☆".repeat(5 - formData.rating);
        emailSubject = `New Customer Review - ${formData.rating} Stars`;
        emailContent = `
          <h2 style="color: #1e4d7b;">New Customer Review Submitted</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 24px; color: #ab772c; margin-bottom: 10px;">${stars}</p>
            <p style="font-size: 18px; color: #333; font-style: italic; margin-bottom: 15px;">"${formData.review}"</p>
            <p style="color: #666;">
              <strong>${formData.name}</strong><br/>
              ${formData.role || "Customer"}${formData.company ? ` | ${formData.company}` : ""}
            </p>
          </div>
          <h3 style="color: #1e4d7b;">Contact Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company || "Not specified"}</p>
          <p><strong>Role:</strong> ${formData.role || "Customer"}</p>
          <p><strong>Rating:</strong> ${formData.rating}/5 Stars</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;"/>
          <p style="font-size: 12px; color: #999;">
            This review was submitted through the AwnGuard website testimonials page.
          </p>
        `;
        smsContent = `New ${formData.rating}★ Review: ${formData.name} - "${formData.review.substring(0, 60)}..."`;
        break;
      }

      default:
        emailSubject = "New Form Submission";
        emailContent = `
          <h2>New Form Submission</h2>
          <pre>${JSON.stringify(formData, null, 2)}</pre>
        `;
        smsContent = `New form submission from ${formData.name || "Unknown"}`;
    }

    // Send via mini-mailer
    const mailerUrl = process.env.MAILER_URL;
    const mailerApiKey = process.env.MAILER_API_KEY;

    if (!mailerUrl || !mailerApiKey) {
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully",
        warning: "Email notifications require configuration",
      });
    }

    const recipients = ["contact@awnguard.com"];

    try {
      const results = await Promise.allSettled(
        recipients.map((to) =>
          fetch(`${mailerUrl}/send`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${mailerApiKey}`,
            },
            body: JSON.stringify({
              to,
              subject: emailSubject,
              html: emailContent,
            }),
          }).then(async (res) => {
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
            return { to, ...data };
          }),
        ),
      );

      const succeeded = results.filter((r) => r.status === "fulfilled");

      // Send SMS via email gateway (fire-and-forget)
      fetch(`${mailerUrl}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${mailerApiKey}`,
        },
        body: JSON.stringify({
          to: "3108939219@msg.fi.google.com",
          subject: " ",
          text: smsContent.substring(0, 160),
        }),
        signal: AbortSignal.timeout(10_000),
      }).catch(() => {});

      if (succeeded.length === 0) {
        throw new Error("All email sends failed");
      }

      return NextResponse.json({
        success: true,
        message: "Notifications sent successfully",
        emailId: (
          succeeded[0] as PromiseFulfilledResult<{ messageId?: string }>
        ).value.messageId,
      });
    } catch (emailError) {
      const error = emailError as Error;
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email: " + (error.message || "Unknown error"),
        },
        { status: 500 },
      );
    }
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to process notification: " + (err.message || "Unknown error"),
      },
      { status: 500 },
    );
  }
}
