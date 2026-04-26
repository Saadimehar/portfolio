# Muhammad Saad - Portfolio

A modern portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. Features dark/light theme, projects showcase, and EmailJS contact form.

**[🔗 Live Site](https://saadimehar.vercel.app) | [GitHub](https://github.com/Saadimehar/portfolio)**

---

## ✨ Features

- 🌓 Dark/Light Mode
- 📱 Fully Responsive
- ✉️ Contact Form (EmailJS)
- 🎨 Modern Design with Animations

---

## 🛠 Tech Stack

Next.js 16 • React 19 • TypeScript • Tailwind CSS • EmailJS • next-themes

---

## 🚀 Quick Start

```bash
git clone https://github.com/Saadimehar/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000

---

## 📧 Setup EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create email template with: `name`, `email`, `subject`, `message`
3. Create `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

4. Deploy to Vercel and add env variables in Settings

---

## 📝 Scripts

```bash
npm run dev      # Development
npm run build    # Production build
npm run lint     # Linting
```

---

## 🔗 Contact

- Email: saad49861@gmail.com
- Phone: +92 304 9194954
- [LinkedIn](https://linkedin.com/in/muhammad-saad-a58a891a2/) • [GitHub](https://github.com/Saadimehar) • [Instagram](https://instagram.com/isaadimehar)

---

**Status:** ✅ Production Ready
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
