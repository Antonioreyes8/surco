# Surco Creative Studio

**Professional portfolio and e-commerce platform for Surco Creative Studio**

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?logo=supabase&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Key Concepts](#key-concepts)
- [Development Guide](#development-guide)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

---

## 🎯 Overview

Surco is a professional creative studio specializing in:

- **Web Development** - Custom websites, e-commerce, APIs
- **Graphic Design** - Visual identity, branding, print design
- **Photography & Video** - Commercial shoots, motion content
- **Print Media** - Business cards, signage, collateral

This repository contains the official digital home of Surco, built with modern React architecture and best practices.

**Live Site:** [surco.studio](https://surco.studio)  
**Founded:** 2025  
**Mission:** Support underrepresented voices and emerging brands through thoughtful design and technology.

---

## ✨ Features

### User Experience

- ✅ **Intro Video** - Branded video introduction (desktop only)
- ✅ **Language Selection** - Full English/Spanish bilingual support
- ✅ **Smooth Navigation** - Scroll-based section highlighting
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Asset CDN** - Images and media hosted on Supabase

### Developer Experience

- ✅ **Context API** - Global language state without prop-drilling
- ✅ **Custom Hooks** - Reusable `useLanguage()` and `useActiveSection()`
- ✅ **Component Structure** - Clear separation of pages, sections, and components
- ✅ **Comprehensive Comments** - Every file includes detailed documentation
- ✅ **Error Handling** - Graceful fallbacks and error boundaries

---

## 🏗️ Architecture

### Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                     index.js                            │
│              (App Entry Point)                          │
│          ↓                                              │
│     LanguageProvider                                    │
│     (Global Language State)                             │
│          ↓                                              │
│        App.js                                           │
│   (Orchestrates Flow)                                   │
│     ├─ Intro Video (Desktop)                           │
│     ├─ Language Selection Modal                         │
│     └─ Router                                           │
│        ├─ Home Page                                     │
│        │  ├─ Sidebar (Fixed Navigation)                │
│        │  └─ Sections (Content)                        │
│        │     ├─ About                                   │
│        │     ├─ Web Services                           │
│        │     ├─ Design Work                            │
│        │     ├─ Photos/Videos                          │
│        │     ├─ Prints                                 │
│        │     ├─ Promos                                 │
│        │     └─ Footer                                 │
│        └─ Store Page (E-commerce)                      │
└─────────────────────────────────────────────────────────┘
```

### State Management

**Global Context:**

- `LanguageContext` - Stores user's language preference ('en' or 'es')
- Accessed via `useLanguage()` hook from any component

**Local State:**

- `App.js` - Intro video display and fade-out animation
- Individual sections - Any component-specific state

---

## 📁 Project Structure

```
surco/
├── public/                    # Static files
│   ├── index.html            # HTML entry point
│   ├── manifest.json         # PWA manifest
│   └── robots.txt            # SEO robots directive
│
├── src/                      # Source code (all logic here)
│   ├── index.js              # React app entry point
│   ├── App.js                # Main app orchestrator
│   ├── supabaseClient.js     # Supabase database config
│   │
│   ├── context/              # Global state management
│   │   └── LanguageContext.js # Language selection context
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useLanguage.js    # Hook to access language context
│   │   └── useActiveSection.js # Hook to detect active section while scrolling
│   │
│   ├── pages/                # Full page components
│   │   ├── Home.js           # Main portfolio page
│   │   ├── Store.js          # E-commerce page
│   │   └── Language.js       # Language selection modal
│   │
│   ├── sections/             # Reusable content sections
│   │   ├── Sidebar.js        # Fixed navigation
│   │   ├── About.js          # Company mission & values
│   │   ├── Web.js            # Web services portfolio
│   │   ├── Design.js         # Design work showcase
│   │   ├── PhotoVideo.js     # Photography & video portfolio
│   │   ├── Prints.js         # Print media services
│   │   ├── Promos.js         # Special offers & packages
│   │   └── Footer.js         # Contact & social links
│   │
│   ├── components/           # Reusable UI components
│   │   ├── Packages.js       # Product package display
│   │   └── StoreItems.js     # Store product listings
│   │
│   ├── layouts/              # Layout wrappers (optional)
│   │   └── Layout.js         # Main layout component
│   │
│   ├── styles/               # CSS stylesheets
│   │   ├── global.css        # Global styles
│   │   ├── sidebar.css       # Sidebar navigation
│   │   ├── about.css         # About section
│   │   ├── intro.css         # Intro video
│   │   ├── footer.css        # Footer
│   │   ├── promos.css        # Promos section
│   │   └── language.css      # Language selection
│   │
│   └── assets/               # Images, videos, fonts
│       ├── videos/           # Video files
│       │   └── intro.mp4     # Intro animation
│       └── fonts/            # Custom fonts
│           └── Delight-*.woff2
│
├── build/                    # Production build (generated)
├── package.json              # Dependencies & scripts
├── README.md                 # This file
└── LICENSE                   # MIT License
```

---

## 💻 Tech Stack

### Core Framework

- **React** 18.3.1 - UI library
- **React Router DOM** 6.22.3 - Client-side routing
- **React DOM** 18.3.1 - DOM rendering

### Backend & Data

- **Supabase** - Database, authentication, file storage
- **@supabase/supabase-js** 2.39.0 - Supabase client library

### Development

- **React Scripts** 5.0.1 - Build tool (from Create React App)
- **npm** - Package manager

### Additional Tools

- **FontAwesome** - Icon library
- **Web Vitals** - Performance metrics
- **ESLint** - Code quality (built-in with Create React App)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (comes with Node.js)
- **Supabase Account** (for database/storage)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/surco.git
cd surco
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
REACT_APP_SUPABASE_URL=your_supabase_url_here
REACT_APP_SUPABASE_KEY=your_supabase_anon_key_here
```

4. **Start development server**

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Start development server
npm start

# Create production build
npm run build

# Run tests
npm test

# Eject configuration (⚠️ irreversible)
npm run eject
```

---

## 🎓 Key Concepts

### 1. Context API for Language Management

**Problem:** Passing language prop through multiple levels (prop-drilling) is tedious.

**Solution:** Global Context stores language state, accessible anywhere.

```javascript
// Any component can access language like this:
import { useLanguage } from "../hooks/useLanguage";

function MyComponent() {
	const { language, setLanguage } = useLanguage();

	return <div>{language === "es" ? "Hola" : "Hello"}</div>;
}
```

### 2. Scroll-Based Navigation

The `useActiveSection` hook uses **Intersection Observer API** to detect which section is currently in view, enabling the sidebar to highlight the active section automatically.

```javascript
const sectionIds = ["AboutSection", "WebSection", "DesignSection"];
const activeSection = useActiveSection(sectionIds);
// activeSection = 'WebSection' when Web section is in viewport
```

### 3. Mobile-Responsive Intro

- Desktop: Shows full intro video before language selection
- Mobile: Skips video (too bandwidth-heavy), goes straight to language selection

### 4. Bilingual Content

All text content supports English ('en') and Spanish ('es'). Handled in sections like:

```javascript
const title = language === "es" ? "Sobre nosotros" : "About Us";
```

---

## 👨‍💻 Development Guide

### Adding a New Section

1. **Create section component** in `src/sections/NewSection.js`
2. **Import in Home.js** and add to layout
3. **Add unique ID** for navigation: `<section id="NewSectionID">`
4. **Add to sidebar labels** in `Sidebar.js`
5. **Style with CSS** in `src/styles/`

### Adding Bilingual Text

Always use the ternary pattern:

```javascript
{
	language === "es" ? "Texto en español" : "English text";
}
```

Or better, use a data object:

```javascript
const labels = {
	en: "English title",
	es: "Título en español",
};

// Then use:
{
	labels[language];
}
```

### Styling Guidelines

- Use **CSS classes** for major components
- Use **inline styles** for dynamic styling based on state
- Mobile-first approach: Start with mobile, then add larger breakpoints

### Performance Tips

- Images hosted on **Supabase CDN** for fast delivery
- Lazy-load videos and heavy assets
- Use React DevTools to check for unnecessary re-renders
- Monitor Core Web Vitals with `web-vitals` package

---

## 🔒 Security Notes

⚠️ **Important:** Never commit sensitive data to version control!

- Supabase keys should be in `.env` file
- Add `.env` to `.gitignore`
- Use `.env.example` template for team reference

```bash
# .env (DO NOT COMMIT)
REACT_APP_SUPABASE_URL=xxxxx
REACT_APP_SUPABASE_KEY=xxxxx

# .env.example (Safe to commit)
REACT_APP_SUPABASE_URL=
REACT_APP_SUPABASE_KEY=
```

---

## 📦 Deployment

### Build for Production

```bash
npm run build
```

Creates optimized `build/` folder ready for hosting.

### Hosting Options

- **Vercel** (Recommended) - Seamless React deployments
- **Netlify** - Simple deployment pipeline
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Scalable CDN solution

### Deploy to Vercel (Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact

**Antonio Reyes-Campuzano**  
📱 Phone: 972-746-6608  
🌐 Website: [surco.studio](https://surco.studio)  
📧 Email: [contact@surco.studio](mailto:contact@surco.studio)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Founded 2025 with family support
- Built to empower underrepresented voices and emerging brands
- Inspired by modern React best practices and web standards

---

**Last Updated:** January 28, 2026  
**Version:** 1.0.0
f2.arc.8@gmail.com
