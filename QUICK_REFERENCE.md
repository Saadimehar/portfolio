# Quick Reference Card

## 🚀 Launch Your Portfolio in 4 Steps

### Step 1: EmailJS Setup (30 min)
```
1. Go to emailjs.com → Sign up
2. Add email service (Gmail/Outlook)
3. Create template: contact_form_template
4. Get: Public Key, Service ID, Template ID
5. Create .env.local with these 3 values
6. Test: npm run dev → submit form → check email
```

### Step 2: Push to GitHub (5 min)
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### Step 3: Deploy to Vercel (10 min)
```
1. Go to vercel.com → Sign up
2. "Import Git Repository" → select your repo
3. Add 3 environment variables from Step 1
4. Click Deploy
5. Wait 2-3 minutes
6. You get a live URL!
```

### Step 4: Test Live Site (10 min)
- Check all sections load
- Toggle dark/light mode
- Test contact form
- Verify email arrives

**TOTAL TIME: ~1 hour**

---

## 📁 Where Things Are

| What | Where |
|------|-------|
| Contact Form | src/components/sections/Contact.tsx |
| Projects Data | src/data/projects.ts |
| Email Config | src/config/site.ts |
| Resume File | public/Muhammad_Saad_CV.pdf |
| Theme System | src/context/ThemeContext.tsx |
| Email Settings | .env.local (create this) |

---

## 💻 Commands You Need

```bash
npm run dev      # Start development (test locally)
npm run build    # Create production build
npm run lint     # Check for errors
```

---

## 🔑 Keep These Safe

After EmailJS setup, you'll have:
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

Store in `.env.local` (local) and add to Vercel dashboard (production)

---

## 📧 When Client Submits Form

```
Client fills form
        ↓
EmailJS processes
        ↓
Email sent to: saad49861@gmail.com
        ↓
You receive email
        ↓
Click Reply in your email client
        ↓
Client receives your response
```

---

## 🎯 Key URLs After Deployment

- **Your Live Site**: `https://your-project.vercel.app`
- **Vercel Dashboard**: https://vercel.com/dashboard
- **EmailJS Dashboard**: https://dashboard.emailjs.com

---

## ✅ Verification Checklist

Before considering complete:
- [ ] Build runs without errors
- [ ] All 7 sections visible
- [ ] Dark/light mode works
- [ ] Contact form submits
- [ ] Email received in inbox
- [ ] Projects display correctly
- [ ] Resume downloads
- [ ] Site responsive on mobile

---

## 🆘 If Something Breaks

| Problem | Solution |
|---------|----------|
| Contact not sending | Check Vercel env variables match exactly |
| Dark mode broken | Hard refresh: Ctrl+F5 |
| Site won't deploy | Check Vercel build logs for errors |
| Images not showing | Verify image paths in projects.ts |

---

## 📚 Documentation Files

- **LAUNCH_GUIDE.md** ← You are here
- **DEPLOYMENT.md** - Detailed deployment steps
- **CONTACT_SYSTEM.md** - How email system works
- **DELIVERABLES.md** - Complete feature checklist
- **PROJECT_STATUS.md** - Full project details

---

## 🎉 YOU'RE READY!

Everything is built, tested, and ready to launch.

Just follow the 4 steps above and you're live! 🚀

Got stuck? Check the detailed docs or see troubleshooting section.

**Good luck! 💪**

---

**Print or bookmark this card for quick reference!**
