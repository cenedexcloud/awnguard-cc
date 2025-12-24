# Gmail SMTP Setup Guide

This guide will help you set up Gmail to send email notifications from your contact forms.

## Step 1: Enable 2-Factor Authentication (Required)

Gmail App Passwords only work if you have 2-Factor Authentication enabled.

1. Go to your Google Account: https://myaccount.google.com
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", click on **2-Step Verification**
4. Follow the prompts to set up 2-Step Verification if not already enabled

## Step 2: Generate Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App passwords
2. You might be asked to sign in again
3. Under "Select app", choose **Mail**
4. Under "Select device", choose **Other (Custom name)**
5. Type: **AwnGuard Website**
6. Click **Generate**
7. Google will show you a 16-character password like: `abcd efgh ijkl mnop`
8. **COPY THIS PASSWORD** - you won't be able to see it again!

## Step 3: Add App Password to .env File

1. Open the `.env` file in the `awnguard-cloud` directory
2. Find the line: `GMAIL_APP_PASSWORD=your_gmail_app_password_here`
3. Replace `your_gmail_app_password_here` with your App Password
4. **Remove all spaces** from the password (use: `abcdefghijklmnop`)

Your `.env` file should look like this:
```
GMAIL_USER=morrisonmicheal606@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

## Step 4: Restart the Development Server

After updating the `.env` file, restart your server for changes to take effect.

## Step 5: Test the Contact Form

1. Go to `/contact` on your website
2. Fill out the form with test data
3. Click Submit
4. Check **morrisonmicheal606@gmail.com** inbox for the notification

## Troubleshooting

### "Invalid login" error?
- Make sure you're using an App Password, NOT your regular Gmail password
- Ensure 2-Factor Authentication is enabled on your Google account
- Check that you removed all spaces from the App Password

### Not receiving emails?
- Check your spam/junk folder
- Verify the GMAIL_USER email is correct
- Make sure you restarted the dev server after updating .env

### "Less secure app access" message?
- You don't need to enable "Less secure app access"
- Use App Passwords instead (requires 2FA)

## Security Notes

- **Never commit your .env file to Git** - it contains sensitive credentials
- The `.env` file is already in `.gitignore`
- App Passwords are safer than using your main password
- You can revoke App Passwords anytime from your Google Account

## What Emails Will Be Sent?

All form submissions will send to: **morrisonmicheal606@gmail.com**

Forms include:
- Contact Form (`/contact`)
- Quote Request (`/quote`)
- Quick Quote (popup)
- Career Applications (`/careers`)

## Email Format

You'll receive HTML emails with:
- **Subject**: "New Contact Form Submission" (or Quote/Career)
- **From**: AwnGuard Forms <morrisonmicheal606@gmail.com>
- **Content**: All form fields (name, email, phone, message, etc.)
