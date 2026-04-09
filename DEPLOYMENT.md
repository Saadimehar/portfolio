# Portfolio Deployment Guide

## Prerequisites
- GitHub account (for hosting the code)
- Vercel account (for deployment) - https://vercel.com
- EmailJS account (for contact form) - https://www.emailjs.com

## Step 1: Setup EmailJS for Contact Form

1. **Create EmailJS Account**
   - Visit https://www.emailjs.com and sign up
   - Verify your email

2. **Add Email Service**
   - Go to Dashboard → Email Services
   - Click "Add New Service"
   - Select your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

3. **Create Email Template**
   - Go to Dashboard → Email Templates
   - Click "Create New Template"
   - Name it: `contact_form_template`
   - Set the template content:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   From: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

4. **Get Your Credentials**
   - Public Key: Dashboard → Account → Public Key
   - Service ID: Dashboard → Email Services (shown in the service box)
   - Template ID: Dashboard → Email Templates (shown in the template box)

5. **Create .env.local File**
   - Copy `.env.local.example` to `.env.local`
   - Add your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key_here
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

6. **Test Locally**
   - Run `npm run dev`
   - Go to Contact section
   - Submit the form to verify emails are sent

## Step 2: Push to GitHub

1. **Initialize Git Repository (if not already done)**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create a repository named `portfolio`
   - Don't initialize with README (we already have code)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

1. **Connect Vercel to GitHub**
   - Go to https://vercel.com/dashboard
   - Click "New Project"
   - Click "Import Git Repository"
   - Select your `portfolio` repository
   - Click "Import"

2. **Configure Environment Variables**
   - In Vercel project settings:
   - Go to Settings → Environment Variables
   - Add all three EmailJS variables:
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - Paste the values from your EmailJS account

3. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `your-name.vercel.app`

## Step 4: Setup Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your custom domain (e.g., muhammadsaad.com)

2. **Update Domain DNS Settings**
   - Follow Vercel's DNS instructions
   - Point your domain to Vercel

## Step 5: Test Live Site

1. Visit your deployed site
2. Test the Contact Form:
   - Fill in the form
   - Submit
   - Check your email (should receive the notification)
3. Test all navigation links
4. Test light/dark mode toggle
5. Verify all project links work
6. Test responsive design on mobile

## Accessing Client Messages

When a client submits your contact form:
1. **Email Notification**: You'll receive an email at your email address with their message
2. **Extract Information**: From the email, you'll see:
   - Client's name
   - Client's email
   - Subject of their inquiry
   - Full message content

To respond to the client:
- Reply directly to the email with your response
- The client will have your email from the form notification

## Environment Variables Reference

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
- Type: Public (safe to expose in browser)
- Where to find: EmailJS Dashboard → Account → Public Key
- Used for: Client-side form submission

NEXT_PUBLIC_EMAILJS_SERVICE_ID
- Type: Public (safe to expose in browser)
- Where to find: EmailJS Dashboard → Email Services
- Used for: Identifying which email service to use

NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- Type: Public (safe to expose in browser)
- Where to find: EmailJS Dashboard → Email Templates
- Used for: Identifying which template to use for formatting
```

## Troubleshooting

### Contact Form Not Sending
1. Check .env.local variables are correct
2. Verify EmailJS template name matches
3. Check browser console for errors
4. Ensure EmailJS service is active

### Deploy Failed
1. Check build logs in Vercel
2. Ensure all dependencies are installed
3. Check for TypeScript errors: `npm run build`
4. Verify environment variables are set in Vercel

### Custom Domain Not Working
1. Wait 24-48 hours for DNS propagation
2. Check DNS settings in your domain registrar
3. Verify Vercel's DNS configuration

## Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Custom Domain Guide](https://vercel.com/docs/concepts/projects/domains)

---

**Your portfolio is now ready for deployment! 🚀**
