# Email Service Setup Guide

## Resend Configuration

The quote form is configured to send emails using [Resend](https://resend.com), a modern email API service.

### Setup Steps:

1. **Create a Resend Account**
   - Go to https://resend.com
   - Sign up for a free account (100 emails/day on free tier)

2. **Get Your API Key**
   - After signing up, go to https://resend.com/api-keys
   - Click "Create API Key"
   - Give it a name like "AwnGuard Production"
   - Copy the API key (it starts with `re_`)

3. **Add API Key to Environment Variables**
   - Open the `.env.local` file in the project root
   - Replace `your_resend_api_key_here` with your actual API key
   - Example: `RESEND_API_KEY=re_abc123xyz...`

4. **Configure Email Recipient**
   - Open `src/app/api/submit-quote/route.ts`
   - Find line with `to: ['contact@awnguard.com']`
   - Update with your actual email address
   - You can add multiple recipients: `to: ['email1@example.com', 'email2@example.com']`

5. **Verify Domain (Optional but Recommended)**
   - For production, verify your domain in Resend
   - Go to https://resend.com/domains
   - Add your domain and follow DNS setup instructions
   - Update the `from` field in the API route from `onboarding@resend.dev` to `quotes@yourdomain.com`

6. **Restart Development Server**
   - After adding the API key, restart the dev server
   - The form will now send emails when submitted

### Testing

1. Fill out the quote form on the `/contact` page
2. Submit the form
3. Check your email inbox for the quote request
4. If using free tier, check Resend dashboard for email logs

### Troubleshooting

- **Email not sending**: Check that `RESEND_API_KEY` is set correctly in `.env.local`
- **Server errors**: Check browser console and terminal for error messages
- **Email in spam**: Verify your domain to improve deliverability
- **Free tier limits**: Free tier allows 100 emails/day, upgrade if needed

### Alternative Email Services

If you prefer a different email service, you can modify the API route to use:
- SendGrid
- Mailgun
- Amazon SES
- Postmark

The current implementation uses Resend for its simplicity and generous free tier.
