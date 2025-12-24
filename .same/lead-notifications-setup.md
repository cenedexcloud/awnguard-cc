# Lead Notification Setup Guide

This guide explains how to set up email and SMS notifications when customers submit forms on your website.

## ✅ Current Configuration (ACTIVE & TESTED)

All form submissions automatically send notifications to:
- **Email TO**: info@tradeblaze.net
- **Email FROM**: forms@tradeblaze.net
- **SMS**: (310) 893-9219 (Google Fi)
- **Service**: Resend API
- **API Key**: re_NZCjiu92_9TRSnQdjywYZZSvASC9pMUim
- **Status**: ✅ WORKING (Last tested: Successfully delivered)

## ✅ Test Results

Latest test email:
- **Email ID**: d37663d0-a58c-4651-add5-184c84e27327
- **Sent From**: forms@tradeblaze.net
- **Sent To**: info@tradeblaze.net
- **Status**: Successfully delivered
- **Response**: 200 OK

## How It Works

### Email Notifications
- Uses Resend API to send HTML emails
- Sent from: **forms@tradeblaze.net**
- Sent to: **info@tradeblaze.net**
- Contains all form details (name, email, phone, service, message)
- Sent instantly when a form is submitted

### SMS Notifications
- Uses Google Fi's email-to-SMS gateway (3108939219@msg.fi.google.com)
- Sends a shortened version of the notification
- Limited to 160 characters
- Free via your Google Fi plan

## Forms That Send Notifications

The following forms are configured to send notifications:
- ✅ Contact Form (`/contact`)
- ✅ Quick Quote Form (popup)
- ✅ Full Quote Request (`/quote`)
- ✅ Career Applications (`/careers`)

## What You Receive

When someone submits the **Contact Form**, you'll receive an email at **info@tradeblaze.net** with:
- **Subject**: "New Contact Form Submission"
- **From**: AwnGuard Forms <forms@tradeblaze.net>
- **To**: info@tradeblaze.net
- **Content**:
  - Customer Name
  - Customer Email
  - Customer Phone
  - Service (if selected)
  - Message

## Testing

To test the contact form:
1. Go to `/contact` on your website
2. Fill out the form with test information
3. Submit the form
4. Check **info@tradeblaze.net** inbox
5. You should receive the email within seconds

## Resend Dashboard

You can monitor all sent emails at: https://resend.com/emails

- View delivery status
- Check bounces
- See email content
- Monitor quota usage

## Current Quota

**Resend Free Tier:**
- 3,000 emails per month
- 100 emails per day
- 1 verified domain (tradeblaze.net)
- Current daily quota: 18 emails used today

## Troubleshooting

### Not receiving emails?
1. ✅ API key is configured correctly
2. ✅ Domain (tradeblaze.net) is verified in Resend
3. Check your spam/junk folder at info@tradeblaze.net
4. Check the Resend dashboard logs at https://resend.com/emails
5. Verify the inbox exists and is accessible

### Forms not submitting?
1. Check browser console for errors
2. Verify the development server is running
3. Check the `/api/send-notification` route is accessible

### Check Server Logs
When a form is submitted, you should see in the server logs:
```
Sending email to info@tradeblaze.net...
Email sent successfully: { data: { id: 'xxx-xxx-xxx' }, error: null }
SMS sent successfully
```

## Changing Notification Recipients

To change who receives notifications:

### Email Recipient
Edit `/src/app/api/send-notification/route.ts` around line 99:
```typescript
to: ['info@tradeblaze.net'],  // Change to your desired email
```

### Email Sender
Edit `/src/app/api/send-notification/route.ts` around line 98:
```typescript
from: 'AwnGuard Forms <forms@tradeblaze.net>',  // Must use @tradeblaze.net
```

### SMS
Edit `/src/app/api/send-notification/route.ts` around line 109:
```typescript
to: ['3108939219@msg.fi.google.com'],  // Change to your number@carrier.net
```

## Domain Configuration

The Resend account is configured with:
- **Verified Domain**: tradeblaze.net
- **Sender Email**: forms@tradeblaze.net
- **Recipient Email**: info@tradeblaze.net
- **API Key**: Configured in `.env` file

## Environment Variables

Located in `awnguard-cloud/.env`:
```
RESEND_API_KEY=re_NZCjiu92_9TRSnQdjywYZZSvASC9pMUim
```

**Important**: Never commit the `.env` file to Git (already in `.gitignore`)

## Quick Reference

- **Contact Form Path**: `/contact`
- **API Endpoint**: `/api/send-notification`
- **Recipient**: info@tradeblaze.net
- **Sender**: forms@tradeblaze.net
- **Dashboard**: https://resend.com/emails
