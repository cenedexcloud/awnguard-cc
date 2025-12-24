# Email & SMS Notification Setup

## Quick Start

Your contact form is already configured to send notifications to:
- **Email**: morrisonmicheal606@gmail.com
- **SMS**: (310) 893-9219 (Google Fi)

You just need to add your Resend API key to activate it!

## 3-Step Setup

### 1. Get Your Free Resend API Key
1. Go to https://resend.com and sign up
2. Navigate to "API Keys" and create a new key
3. Copy the key (starts with `re_`)

### 2. Add the API Key
Open the `.env` file in this directory and add your key:
```env
RESEND_API_KEY=re_your_actual_key_here
```

### 3. Restart Your Server
```bash
# Stop the server (Ctrl+C) and restart it
bun run dev
```

## Test It

1. Go to your website's contact page
2. Fill out and submit a test form
3. You should receive:
   - An email at morrisonmicheal606@gmail.com
   - An SMS at (310) 893-9219

## Need Help?

See the full documentation: `.same/lead-notifications-setup.md`

## Forms That Send Notifications

All these forms automatically send notifications:
- Contact Form
- Quote Request
- Quick Quote Popup
- Career Applications
