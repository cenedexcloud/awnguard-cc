# Project Todos

## Completed
- [x] Add file upload functionality to ContactForm component
- [x] Support JPG, PNG, PDF, DOC/DOCX, TXT, ZIP formats
- [x] Validate file types and sizes (max 10MB per file)
- [x] Convert files to base64 for email attachments via Resend API
- [x] Ensure attachments are sent to info@tradeblaze.net
- [x] Embed Vimeo testimonial video on /testimonials page using provided link (Vimeo ID 1133989794)

## Current Status
All contact forms on the website now support file attachments:
1. **Contact Form** (`/contact` page) - Added file upload with 2 slots
2. **Quote Form** (`/quote` page) - Already had file upload with 4 slots
3. **Career Form** (`/careers` page) - Already had file upload for resume and cover letter

The Resend API properly handles attachments and sends them to the recipient's email.
