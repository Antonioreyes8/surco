# Quick Reference Card

One-page cheat sheet for common Surco tasks.

---

## 🚀 Getting Started

```bash
cp .env.example .env              # Create env file
# Add your Supabase credentials to .env
npm install && npm start          # Start dev server
```

---

## 📁 File Locations

| What       | Where                   |
| ---------- | ----------------------- |
| Main app   | `src/App.js`            |
| Pages      | `src/pages/`            |
| Sections   | `src/sections/`         |
| Components | `src/components/`       |
| Hooks      | `src/hooks/`            |
| Context    | `src/context/`          |
| Styles     | `src/styles/`           |
| Config     | `src/supabaseClient.js` |

---

## 🎯 Common Tasks

### Add New Section

```javascript
// 1. Create file: src/sections/MySec.js
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const MySection = () => {
  const { language } = useLanguage();

  return (
    <section id="MySectionID">
      <h2>{language === 'es' ? 'Mi Sección' : 'My Section'}</h2>
      {/* Content */}
    </section>
  );
};

export default MySection;

// 2. Add to Home.js
import MySection from '../sections/MySection';

// 3. Add to Sidebar navigation
const navigationLabels = {
  en: { MySectionID: 'My Section', ... },
  es: { MySectionID: 'Mi Sección', ... },
};

const sectionIds = ['...', 'MySectionID'];

// 4. Create src/styles/my-section.css
```

### Add Bilingual Text

```javascript
// Option 1: Inline (short text)
{
	language === "es" ? "Hola" : "Hello";
}

// Option 2: Object (longer content)
const labels = {
	en: "Welcome to Surco",
	es: "Bienvenido a Surco",
};
<h1>{labels[language]}</h1>;

// Option 3: Data structure (many translations)
const webServices = [
	{
		title: { en: "Web Services", es: "Servicios Web" },
		description: { en: "Description...", es: "Descripción..." },
	},
];

const lang = language === "es" ? "es" : "en";
<h3>{webServices[0].title[lang]}</h3>;
```

### Use Global Language

```javascript
import { useLanguage } from "../hooks/useLanguage";

const MyComponent = () => {
	const { language, setLanguage } = useLanguage();

	// language = 'en', 'es', or null
	return (
		<div>
			{language === "es" ? "Hola" : "Hello"}
			<button onClick={() => setLanguage("en")}>English</button>
		</div>
	);
};
```

### Add Images to Supabase

1. Log in to [app.supabase.com](https://app.supabase.com)
2. Storage → photos → Upload file
3. Get public URL
4. Use in component:

```javascript
const SUPABASE_URL = "https://xxxx.supabase.co/storage/v1/object/public/photos";

<img src={`${SUPABASE_URL}/folder/image.jpg`} alt="Description" />;
```

### Add New Page/Route

```javascript
// 1. Create page: src/pages/NewPage.js
const NewPage = () => <div>Page content</div>;
export default NewPage;

// 2. Add to App.js
import NewPage from './pages/NewPage';

// In Router:
<Route path="/newpage" element={<NewPage />} />

// 3. Add navigation link
<Link to="/newpage">New Page</Link>
```

---

## 🎨 Styling Tips

### CSS Class Pattern

```css
.component-name {
}
.component-name-element {
}
.component-name-element.active {
}
```

### Responsive Design

```css
/* Desktop first, then add mobile adjustments */
.sidebar {
	width: 250px;
}

@media (max-width: 768px) {
	.sidebar {
		width: 200px;
	}
}
```

### Dynamic Inline Styles

```javascript
<button
	style={{
		color: activeSection === item.id ? "white" : "#666",
		fontSize: activeSection === item.id ? "1.1em" : "1em",
		transition: "all 0.3s ease",
	}}
>
	{item.label}
</button>
```

---

## 🔍 Debug Commands

```javascript
// Check language in console
const { useLanguage } = require("../hooks/useLanguage");
// Then in component: console.log(language);

// Check active section
console.log("activeSection:", activeSection);

// Check Supabase connection
import { supabase } from "./supabaseClient";
supabase.from("any_table").select().then(console.log);

// React DevTools
// Install extension → Inspect components → Check props/state
```

---

## 📋 Code Quality Checklist

- [ ] JSDoc comment at top of file
- [ ] Functions documented with @param @returns
- [ ] Bilingual text (no hardcoded English)
- [ ] Proper error handling (try/catch)
- [ ] No console.log in production
- [ ] Mobile-responsive CSS
- [ ] Descriptive variable names (no abbreviations)
- [ ] Comments explain WHY not WHAT

---

## 🚨 Common Issues & Fixes

| Issue                                              | Fix                                                             |
| -------------------------------------------------- | --------------------------------------------------------------- |
| "useLanguage must be used within LanguageProvider" | Make sure App is wrapped with LanguageProvider in index.js      |
| Language not updating                              | Check that setLanguage was called in an event handler           |
| Sidebar not highlighting                           | Verify section id attribute exists and matches sectionIds array |
| Styles not applying                                | Make sure CSS file is imported at top of component              |
| Environment variables undefined                    | Run `npm start` again after editing .env                        |
| Images not loading                                 | Verify Supabase URL is correct and file exists                  |

---

## 📚 Documentation Map

| Need             | Read               |
| ---------------- | ------------------ |
| Project overview | README.md          |
| How it works     | ARCHITECTURE.md    |
| How to do tasks  | DEVELOPMENT.md     |
| How to code      | CODE_STYLE.md      |
| This quick ref   | QUICK_REFERENCE.md |

---

## 🔐 Security Checklist

- [ ] .env file created from .env.example
- [ ] Supabase credentials in .env (never in code)
- [ ] .env added to .gitignore
- [ ] No hardcoded API keys in components
- [ ] Error messages don't expose sensitive data

---

## 🚀 Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod --dir=build
```

---

## 📞 Key Imports

```javascript
// Context & Hooks
import { useLanguage } from "../hooks/useLanguage";
import { useActiveSection } from "../hooks/useActiveSection";

// Components
import Sidebar from "../sections/Sidebar";
import { Link, Route, Routes } from "react-router-dom";

// Supabase
import { supabase } from "../supabaseClient";
```

---

## 💡 Pro Tips

- Use DevTools React tab to inspect state/props
- Use React DevTools Profiler to check re-renders
- Add `// TODO:` comments for future improvements
- Test on mobile early (use device preview in DevTools)
- Commit frequently with descriptive messages
- Pull before pushing to avoid conflicts

---

## 🆘 Need Help?

1. **Check code comments** - Most files have detailed JSDoc
2. **Read DEVELOPMENT.md** - Common tasks with examples
3. **Review related code** - Look at similar components
4. **Check browser console** - Errors and warnings shown there
5. **Ask in team chat** - Slack, Discord, or email

---

**Print this page for your desk!** 📋

Last Updated: January 28, 2026
