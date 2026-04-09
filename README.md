# Muhammad Saad - Professional Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Showcasing projects, skills, experience, and facilitating client contact through an integrated email system.

## 🌐 Live Demo

**Website:** https://portfolio-saad.vercel.app  
**GitHub Repository:** https://github.com/Saadimehar/portfolio

## ✨ Features

### 🎨 Modern Design
- **Dark/Light Mode Theme** - Seamless theme switching with persistent storage
- **Responsive Design** - Perfectly optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Fade-in effects, scroll animations, and interactive elements
- **Professional UI** - Clean, modern interface with gradient accents

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with CTA buttons and social links
2. **About** - Personal introduction and professional background
3. **Projects** - Showcase of completed work with live links and GitHub repositories
4. **Skills** - Comprehensive skill display with categories (Languages, Frontend, Backend, Design, Tools)
5. **Experience** - Detailed work experience and educational background
6. **Contact** - Professional contact form and multiple contact methods
7. **Footer** - Quick links and social media integration

### 📧 Email Integration
- **EmailJS Integration** - Serverless email delivery for contact form submissions
- **Email Notifications** - Automatic email alerts when visitors submit inquiries
- **Direct Response** - Reply to inquiries directly from your email

### 🔧 Technologies Used
- **Framework:** Next.js 16.2.2
- **React:** 19.2.4
- **Type Safety:** TypeScript
- **Styling:** Tailwind CSS 4.x
- **Email Service:** EmailJS
- **Version Control:** Git & GitHub
- **Deployment:** Vercel

## 📋 Section Details

### **Hero Section**
- Animated name and title
- Call-to-action buttons (Let's Talk, Download Resume)
- Social media links (GitHub, LinkedIn, Instagram, Figma)
- Responsive layout for all screen sizes

### **About Section**
- Personal introduction
- Professional highlight
- Key skills preview

### **Projects**
- Project cards with images
- Category filtering (UI/UX Design, Full Stack, Frontend, Other)
- Live demo and GitHub code links
- Technology tags and descriptions

### **Skills**
- Categorized skills display
- Horizontal scrolling skill cards
- Icons for visual representation
- Categories: Languages, Frontend, Backend, Design, Tools, Additional

### **Experience**
- Work experience timeline
- Education background
- Detailed descriptions and responsibilities
- Date ranges and company information

### **Contact**
- Contact form with EmailJS integration
- Email, phone, location, and availability cards
- Real-time form validation
- Success/error feedback messages

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Saadimehar/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Setup EmailJS (for contact form):**
   - Visit https://www.emailjs.com and create an account
   - Get your Public Key, Service ID, and Template ID
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
