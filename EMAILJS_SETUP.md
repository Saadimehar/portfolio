# EmailJS Contact Form Setup Guide

## Overview
This portfolio uses **EmailJS** for client-side email sending via the contact form. The contact form is fully client-side with no backend API required.

## Architecture
- **Frontend Framework**: Next.js 16.2.2
- **Email Service**: EmailJS (@emailjs/browser)
- **Form Handling**: React hooks (useState, useRef)
- **Environment Variables**: Next.js NEXT_PUBLIC_ prefix (browser-accessible)
- **Deployment**: Vercel

## Environment Variables

### Local Development (.env.local)
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xPB2wRXh8nJMbvOBI
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_saadimehar
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_uprzefv
```

### Production (Vercel Dashboard)
Set the same three variables in Vercel Dashboard → Settings → Environment Variables for:
- Production
- Preview
- Development

**IMPORTANT**: Use Vercel Dashboard, not CLI, as CLI commands may not persist.

## How It Works

### 1. Initialization
Located in `src/components/sections/Contact.tsx` (lines 8-18):
```typescript
if (typeof window !== "undefined") {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
}
```

### 2. Form Submission
When user submits the contact form:
1. Form data is validated
2. Environment variables are checked
3. Temporary form element is created with all fields
4. `emailjs.sendForm()` is called with:
   - Service ID
   - Template ID
   - Form element containing: name, email, subject, message, to_email
5. Success/error message is displayed to user

### 3. Debug Logging
Console logs show:
- EmailJS initialization status
- Environment variable loading status
- Form submission data (message truncated for privacy)
- Email send response or error details

Example console output:
```
🔧 EmailJS Public Key loaded: ✓ Present
✅ EmailJS initialized successfully
📧 EmailJS Configuration Check:
  - Service ID: ✓ Loaded
  - Template ID: ✓ Loaded
  - Public Key: ✓ Loaded
📤 Sending email with form data: {...}
✅ Email sent successfully! {...response...}
```

## EmailJS Configuration

### Account Setup
1. Create account at https://www.emailjs.com/
2. Go to Account → API Keys
3. Copy your **Public Key** (starts with alphanumeric characters)

### Service Configuration
1. Email Services → Add Service (e.g., Gmail, Outlook)
2. Connect your email account
3. Copy **Service ID** (format: service_xxxxx)

### Template Configuration
1. Email Templates → Create Template
2. Template should accept these variables:
   - `name` - sender's name
   - `email` - sender's email
   - `subject` - email subject
   - `message` - email message
   - `to_email` - recipient email

3. Copy **Template ID** (format: template_xxxxx)

Example template:
```
Name: {{name}}
Email: {{email}}
Subject: {{subject}}
To: {{to_email}}

Message:
{{message}}
```

## Form Fields

The contact form uses these fields (must match EmailJS template):
- **name** - Full name (required)
- **email** - Email address (required)
- **subject** - Message subject (required)
- **message** - Message body (required)
- **to_email** - Recipient email (from siteConfig.email, auto-filled)

## Troubleshooting

### "EmailJS configuration is missing" Error
**Solution**: Check Vercel Dashboard that all three NEXT_PUBLIC_EMAILJS_* variables are set for Production.

### Form doesn't send on production
**Solution**:
1. Check browser console (F12) for error messages
2. Verify environment variables are set on Vercel Dashboard
3. Redeploy after setting variables: `npx vercel --prod`

### Error in browser console
**Solution**: 
1. Check console for detailed error messages (prefixed with ❌)
2. Verify Service ID and Template ID are correct in EmailJS dashboard
3. Ensure template contains all required variables

### Testing Locally
1. `npm run dev` - starts dev server on http://localhost:3001
2. Open browser DevTools (F12)
3. Navigate to Contact section
4. Submit form
5. Check Console tab for logs showing:
   - ✅ "EmailJS initialized successfully"
   - 📧 Configuration check results
   - ✅ Email sent confirmation

## Production Deployment

### After making changes:
```bash
# 1. Commit changes
git add -A
git commit -m "Update: EmailJS configuration"

# 2. Push to GitHub
git push origin main

# 3. (Optional) Manually verify Vercel Dashboard has env vars set
# Then Vercel auto-deploys on push

# 4. (Or manually deploy)
npx vercel --prod
```

### Vercel Auto-Deployment
- Vercel automatically deploys when code is pushed to `main` branch
- Check deployment status at https://vercel.com/dashboard
- Production URL: https://saadimehar.vercel.app

## Security Notes

⚠️ **Important**: The Public Key is intentionally public (it's in NEXT_PUBLIC_). This is safe because:
- EmailJS Public Key is designed to be public
- Rate limiting is handled by EmailJS
- Service ID and Template ID are semi-private (visible in code but not sensitive)
- No actual email credentials are exposed

The `.env.local` file is in `.gitignore` and never committed to Git.

## Related Files
- `src/components/sections/Contact.tsx` - Contact form component
- `.env.local` - Local environment variables (not in Git)
- `.env.example` - Template for environment variables
- `.env.production` - Production environment variables (for reference)

## Version History
- **v2.0** (8f4e3f7) - Refactored to use emailjs.sendForm() with improved error handling
- **v1.0** (a225fc1) - Initial EmailJS implementation replacing backend API
