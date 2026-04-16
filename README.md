# Muhammad Saad - Professional Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features dark/light theme toggle, project showcase, skills display, work experience, and a fully functional contact form with dual email delivery methods (EmailJS + SMTP API fallback).

**Live Site:** https://portfolio-saadimehar.vercel.app | **GitHub:** https://github.com/Saadimehar/portfolio

---

## 🎯 Key Features

### ✨ Core Features
- **🌓 Dark/Light Mode** - Seamless theme switching with persistent storage
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **✉️ Dual Email Delivery** - EmailJS (primary) + SMTP API fallback
- **🎨 Modern Design** - Clean UI with smooth animations and gradients
- **⚡ Fast Performance** - Next.js 16 with TypeScript

### 📋 Portfolio Sections
1. **Hero** - Eye-catching intro with CTA buttons and social links
2. **About** - Professional background and introduction
3. **Projects** - Portfolio with live demos and GitHub links
4. **Skills** - Categorized skills with icons
5. **Experience** - Work experience and education timeline
6. **Contact** - Email form with validation
7. **Footer** - Quick navigation and social links

### 📧 Contact Form
- **Primary:** EmailJS serverless email delivery
- **Fallback:** SMTP API route via Nodemailer for reliability
- Real-time validation and error handling
- Auto-confirmation emails to visitors
- Direct email to saad49861@gmail.com

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|---|
| **Frontend** | Next.js 16.2.2, React 19, TypeScript, Tailwind CSS 4 |
| **Email** | EmailJS (client-side), Nodemailer (server-side) |
| **Styling** | Tailwind CSS, PostCSS, clsx, tailwind-merge |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **Theme** | next-themes |
| **Tools** | ESLint, Prettier, Git |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/Saadimehar/portfolio.git
cd portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Environment Setup

Edit `.env.local` with your EmailJS credentials from https://www.emailjs.com:

```env
# EmailJS Configuration (from https://www.emailjs.com)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id

# Optional: SMTP Fallback (for automatic failover)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM_EMAIL=your_email@gmail.com
SMTP_FROM_NAME=Your Name
```

### Email Setup (EmailJS)

1. **Create Account** - Sign up at https://www.emailjs.com
2. **Add Email Service** - Connect Gmail or another email provider
3. **Get Credentials:**
   - Copy **Public Key** from Account → API Keys
   - Note **Service ID** from Email Services
   - Create Email Template with name like `contact_template`
   - Copy **Template ID**
4. **Add to .env.local** - Paste the three IDs above

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in browser. Form will send emails to saad49861@gmail.com.

### Build for Production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts     # Email API endpoint (SMTP fallback)
│   ├── layout.tsx                # Root layout with theme provider
│   ├── globals.css               # Global styles
│   └── page.tsx                  # Home page
├── components/
│   ├── Navbar.tsx                # Navigation with theme toggle
│   ├── layout/                   # Layout components
│   └── sections/                 # Page sections (Hero, About, etc.)
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── ui/                           # Reusable UI components
├── context/                      # ThemeContext for dark/light mode
├── hooks/                        # Custom hooks (useScrollspy, useTheme)
├── config/                       # Site configuration
├── data/                         # Static data (projects, skills, experience)
├── types/                        # TypeScript interfaces
└── lib/                          # Utility functions
```

---

## ✅ Recent Improvements

### 1. Hero Section - Responsive Buttons
Fixed button overlap on mobile by implementing responsive flex layout:
- Stack vertically on mobile, horizontally on sm+ screens
- Full-width buttons on mobile for accessibility

### 2. Skills Section - Right Scroll Arrow
Fixed arrow visibility by adding proper container measurement:
- Arrow shows correctly on initial page load
- Updates on window resize and category changes
- Seamless horizontal scrolling

### 3. Contact Form - Email Delivery
Implemented dual email system with automatic failover:
- **Primary:** EmailJS (fast, client-side)
- **Fallback:** SMTP API route (reliable server-side)
- Sends confirmation emails to visitor
- Form validation and error handling

---

## 🔗 Important Links

- **Portfolio:** https://portfolio-saadimehar.vercel.app
- **GitHub:** https://github.com/Saadimehar/portfolio
- **Email:** saad49861@gmail.com
- **Phone:** +92 304 9194954
- **Location:** Wah Cantt, Pakistan

### Social Links
- [LinkedIn](https://www.linkedin.com/in/muhammad-saad-a58a891a2/)
- [GitHub](https://github.com/Saadimehar)
- [Instagram](https://instagram.com/isaadimehar)
- [Figma](https://figma.com/@saadimehar)

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🐛 Troubleshooting

### Emails Not Sending?
1. Verify EmailJS Service is **Connected** (not Failed)
2. Check `.env.local` has correct Public Key, Service ID, Template ID
3. Ensure email template exists in EmailJS dashboard
4. Check browser console for error messages

### Theme Not Persisting?
- Clear browser cache and localStorage
- Restart dev server

### Build Errors?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📄 License

This portfolio is open source and available on GitHub.

---

**Last Updated:** April 2026 | **Status:** ✅ Production Ready
   - Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

4. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Build & Deploy

### Local Build
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. **Deploy to Vercel:**
   - Go to https://vercel.com/dashboard
   - Import your GitHub repository
   - Add environment variables in Vercel settings
   - Deploy

Your site will be live at `your-project.vercel.app`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Main layout wrapper
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ThemeToggle.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       ├── Experience.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   ├── config/
│   │   └── site.ts          # Site configuration & metadata
│   ├── context/
│   │   └── ThemeContext.tsx # Theme management
│   ├── data/
│   │   ├── projects.ts      # Projects data
│   │   ├── skills.ts        # Skills data
│   │   └── experience.ts    # Experience data
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useScrollspy.ts
│   └── types/
│       └── index.ts         # TypeScript types
├── public/
│   └── images/              # Static images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎯 Customization

### Update Site Information
Edit `src/config/site.ts`:
```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your-email@example.com",
  phone: "+1 (234) 567-8900",
  location: "City, Country",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    instagram: "https://instagram.com/yourusername",
    figma: "https://figma.com/yourprofile"
  }
};
```

### Add Projects
Edit `src/data/projects.ts`:
```typescript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  category: "uiux" | "fullstack" | "frontend" | "software",
  image: "/images/projects/project.jpg",
  live: "https://live-link.com",
  github: "https://github.com/username/repo",
  tags: ["React", "Tailwind CSS"],
}
```

### Update Skills
Edit `src/data/skills.ts`:
```typescript
{ name: "Skill Name", icon: "skillicon", category: "category" }
```

### Update Experience
Edit `src/data/experience.ts`:
```typescript
{
  id: 1,
  role: "Position Title",
  company: "Company Name",
  location: "Location",
  startDate: "Jan 2024",
  endDate: "Present",
  description: ["Responsibility 1", "Responsibility 2"],
  tags: ["Skill 1", "Skill 2"],
  type: "work" | "education"
}
```

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## 📧 Contact Form Setup

### EmailJS Configuration

1. **Create Account** - Visit https://www.emailjs.com
2. **Add Email Service** - Connect your email provider (Gmail, Outlook, etc.)
3. **Create Template** - Design your email template with variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content

4. **Get Credentials:**
   - Public Key: Dashboard → Account → Public Key
   - Service ID: Dashboard → Email Services
   - Template ID: Dashboard → Email Templates

## 🎨 Theme Customization

The theme system uses CSS variables in `src/app/globals.css`:

```css
--color-background: #000000;
--color-foreground: #ffffff;
--color-accent: #7c3aed;
--color-secondary: #582da3;
```

Modify these variables to change the entire color scheme.

## 📱 Features Highlight

✅ **Fully Responsive** - Works perfectly on all devices  
✅ **Dark/Light Mode** - Theme switching with persistence  
✅ **Email Integration** - Contact form with automatic notifications  
✅ **SEO Optimized** - Meta tags and structured data  
✅ **Performance** - Optimized images and code splitting  
✅ **Animations** - Smooth fade-in and scroll animations  
✅ **Accessibility** - WCAG compliant and keyboard navigable  
✅ **Type Safe** - Full TypeScript support  

## 🐛 Troubleshooting

### Contact Form Not Sending
- Verify EmailJS credentials in `.env.local`
- Check EmailJS service is active
- Review browser console for errors
- Ensure email template name matches

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Theme Not Persisting
- Check browser localStorage is enabled
- Clear browser cache and cookies
- Verify ThemeContext is properly initialized

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [EmailJS Documentation](https://www.emailjs.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Muhammad Saad**
- GitHub: [@Saadimehar](https://github.com/Saadimehar)
- Email: saad49861@gmail.com
- Location: Islamabad, Pakistan

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## ⭐ Show Your Support

If you find this portfolio template helpful, please consider:
- Giving it a star ⭐ on GitHub
- Sharing it with others
- Contributing improvements

## 🚀 Deployment Checklist

Before deploying to production:
- [ ] Update `src/config/site.ts` with your information
- [ ] Add your projects in `src/data/projects.ts`
- [ ] Update skills in `src/data/skills.ts`
- [ ] Add experience in `src/data/experience.ts`
- [ ] Setup EmailJS and add credentials
- [ ] Test contact form locally
- [ ] Run `npm run build` to verify no errors
- [ ] Deploy to Vercel or your hosting platform
- [ ] Test all features on live site

## 📞 Support

For issues, questions, or suggestions, please:
1. Check existing [GitHub Issues](https://github.com/Saadimehar/portfolio/issues)
2. Create a new issue with detailed description
3. Include screenshots or error messages

---

**Last Updated:** April 9, 2026  
**Version:** 1.0.0

Happy building! 🚀
