# EmailJS Setup Guide

Your portfolio contact form requires EmailJS to send emails to your inbox. Follow these steps to set it up:

## Step 1: Create Free EmailJS Account

1. Visit [EmailJS](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Get Your Public Key

1. Login to your EmailJS dashboard
2. Go to **Account** → **API Keys**
3. Copy your **Public Key** (it looks like: `xyz123abc...`)
4. Save it - you'll need this soon

## Step 3: Connect Email Service

### Option A: Gmail Setup (Recommended)

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Follow the authentication steps (Gmail will ask for permission)
5. After successful connection, you'll see your **Service ID** (e.g., `service_abc123xyz`)
6. Save your Service ID

### Option B: Other Email Providers

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider (Outlook, Yahoo, SendGrid, etc.)
4. Follow the provider-specific setup
5. Note your **Service ID** after connection

## Step 4: Create Email Template

1. In EmailJS Dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Name it something like: `contact_form_template`
4. Set up the template as follows:

### Template Settings:
- **Service:** Select the service you connected in Step 3
- **To Email:** `{{to_email}}` (This will be your email: saad49861@gmail.com)
- **From Email:** `{{from_email}}` (Client's email)
- **Subject:** `New Message from {{from_name}}` or customize as desired
- **Email Content:** Use the following template:

```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Click **Save**
5. Note your **Template ID** (e.g., `template_abc123xyz`)

## Step 5: Add Credentials to Your Project

1. In your portfolio folder, create a file named `.env.local` (NOT `.env.example`)
2. Add the following content:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Replace the placeholder values with your actual credentials from steps 2, 3, and 4

## Example .env.local (with fake credentials):

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyzDEF456ghi789jkl_mno123
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123xyz789
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789abc456
```

## Step 6: Test Your Setup

1. Save the `.env.local` file
2. Restart your development server: `npm run dev`
3. Open your portfolio website
4. Go to the **Contact** section
5. Fill out the form and submit
6. Check your email (saad49861@gmail.com) - you should receive the message!

## Troubleshooting

### Issue: "Email sent successfully" but no email received
- Make sure your **Service ID** is correct
- Ensure the email service is properly authenticated in EmailJS
- Check that to_email in your Contact.tsx matches your inbox email

### Issue: Form shows error on submit
- Verify your **Public Key** is correct
- Check that **Template ID** matches your created template
- Look at browser console for error messages (Press F12 → Console tab)

### Issue: Environment variables not loading
- Make sure you created `.env.local` (not `.env`)
- Restart your dev server after creating the file
- Variables must start with `NEXT_PUBLIC_` to be visible in browser

## Credentials Location Summary

After setup, you'll have:
- **Public Key** → Goes in `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Service ID** → Goes in `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  
- **Template ID** → Goes in `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Your Email** → Should be `saad49861@gmail.com` (already set in config)

## Security Note

- ⚠️ The `.env.local` file is listed in `.gitignore` so it won't be pushed to GitHub (good for security)
- Your credentials are safe locally but never commit `.env.local` to version control
- When deploying to Vercel, add these environment variables in Project Settings → Environment Variables

Your contact form is now ready to receive client messages directly to your inbox!
