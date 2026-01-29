# Surco Architecture Documentation

Complete technical documentation of Surco's codebase structure, design patterns, and development concepts.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture Layers](#architecture-layers)
3. [State Management](#state-management)
4. [Key Design Patterns](#key-design-patterns)
5. [Component Lifecycle](#component-lifecycle)
6. [Data Flow](#data-flow)
7. [Styling Architecture](#styling-architecture)
8. [Performance Considerations](#performance-considerations)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Surco** is a React-based creative studio portfolio with e-commerce capabilities.

**Tech Stack:**

- React 18.3.1 (UI library)
- React Router DOM 6.22.3 (SPA routing)
- Supabase (Database + Storage)
- Context API (State management)
- Custom Hooks (Logic reuse)
- Plain CSS (Styling)

**Key Metrics:**

- ~15 React components
- 2 main pages (Home, Store)
- 1 global context (LanguageContext)
- 2 custom hooks (useLanguage, useActiveSection)
- 7 portfolio sections

---

## Architecture Layers

### 1. Entry Point Layer

```
index.js
└─ Wraps app with LanguageProvider
└─ Mounts to #root DOM element
```

### 2. App Orchestration Layer

```
App.js
├─ Manages: Intro video, language selection, routing
├─ State: showIntro, fadeOut, showVideo
└─ Routes to: Home or Store pages
```

### 3. Page Layer

```
pages/
├─ Home.js        (Main portfolio page)
├─ Store.js       (E-commerce page)
└─ Language.js    (Language selection modal)
```

### 4. Section Layer (Content)

```
sections/
├─ Sidebar.js         (Fixed navigation)
├─ About.js           (Company info)
├─ Web.js             (Web services)
├─ Design.js          (Design work)
├─ PhotoVideo.js      (Media portfolio)
├─ Prints.js          (Print services)
├─ Promos.js          (Special offers)
└─ Footer.js          (Contact info)
```

### 5. Component Layer (Reusable UI)

```
components/
├─ Packages.js        (Product packages)
└─ StoreItems.js      (Store items listing)
```

### 6. Context Layer (Global State)

```
context/
└─ LanguageContext.js
   ├─ LanguageContext (context object)
   └─ LanguageProvider (provider component)
```

### 7. Hook Layer (Logic)

```
hooks/
├─ useLanguage.js      (Access language context)
└─ useActiveSection.js (Detect scroll position)
```

### 8. Style Layer (Presentation)

```
styles/
├─ global.css         (Global styles)
├─ sidebar.css        (Navigation)
├─ about.css          (About section)
├─ intro.css          (Video animation)
├─ footer.css         (Footer styles)
├─ promos.css         (Promotions)
└─ language.css       (Language selection)
```

---

## State Management

### Global State (Context API)

#### LanguageContext

**Purpose:** Store user's language preference globally  
**Values:**

- `language`: 'en' | 'es' | null
- `setLanguage`: Function to update language

**Usage:**

```javascript
import { useLanguage } from "../hooks/useLanguage";

function MyComponent() {
	const { language, setLanguage } = useLanguage();
	// language = 'en', 'es', or null
	// setLanguage('en') updates global state
}
```

**Flow:**

```
User selects language in Language.js
    ↓
setLanguage() called from context
    ↓
LanguageContext.Provider value updates
    ↓
All subscribed components re-render with new language
```

### Local Component State

**App.js:**

- `showIntro` - Is intro video visible?
- `fadeOut` - Is fade-out animation playing?
- `showVideo` - Should video be shown? (false on mobile)

**Sidebar.js:**

- `activeSection` - Which section is in viewport? (from hook)

**Language.js:**

- No local state (uses context setLanguage directly)

### No Server State Management

Surco doesn't currently use Redux, Zustand, or Recoil because:

- Language context is the only global state
- App complexity is manageable with hooks
- Performance is acceptable

---

## Key Design Patterns

### 1. Context API Pattern

Provides global state without prop-drilling.

```javascript
// Step 1: Create context
const LanguageContext = createContext();

// Step 2: Create provider
export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(null);
	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

// Step 3: Create custom hook
export const useLanguage = () => useContext(LanguageContext);

// Step 4: Use in component
const MyComponent = () => {
	const { language } = useLanguage();
};
```

### 2. Custom Hook Pattern

Encapsulates reusable logic.

```javascript
// Hook: useActiveSection.js
export const useActiveSection = (sectionIds) => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		});

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => {
			sectionIds.forEach((id) => {
				const el = document.getElementById(id);
				if (el) observer.unobserve(el);
			});
		};
	}, [sectionIds]);

	return activeSection;
};

// Usage in Sidebar
const activeSection = useActiveSection(["AboutSection", "WebSection"]);
// activeSection = 'WebSection' when Web section is in viewport
```

### 3. Data Structure Pattern

Store bilingual content in objects.

```javascript
const labels = {
	en: "Hello",
	es: "Hola",
};

// Use with language state
<h1>{labels[language]}</h1>;
```

### 4. Component Composition Pattern

Break large features into smaller components.

```javascript
// Home.js composes multiple sections
<Home>
	<Sidebar />
	<div>
		<About />
		<Web />
		<Design />
		...
	</div>
</Home>
```

---

## Component Lifecycle

### App Lifecycle

```
1. App mounts
   ├─ Check viewport width
   ├─ Hide video on mobile
   └─ Set showIntro = true

2. Video plays
   └─ User watches intro

3. Video ends (handleVideoEnd)
   ├─ setFadeOut(true)
   └─ After 1200ms: setShowIntro(false)

4. Show Language selection
   └─ User selects language

5. Show Main app
   ├─ Router renders
   └─ Home page loads with all sections
```

### Section Lifecycle

```
1. Sidebar mounts
   ├─ useActiveSection hook initializes
   ├─ IntersectionObserver created
   └─ Listening to section visibility

2. User scrolls page
   ├─ IntersectionObserver detects intersections
   └─ activeSection state updates

3. activeSection updates
   ├─ Sidebar re-renders
   └─ Active link highlighted

4. User clicks navigation link
   ├─ Find target section
   ├─ Smooth scroll to it
   └─ activeSection updates (user scrolls into view)
```

---

## Data Flow

### Language Selection Flow

```
index.js
  └─ LanguageProvider wraps App

App.js
  └─ useContext(LanguageContext) gets { language, setLanguage }
  └─ Renders Language component if language === null

Language.js
  └─ useLanguage() gets setLanguage
  └─ onClick handler calls setLanguage('en') or setLanguage('es')

LanguageContext.Provider
  └─ value updates
  └─ All components using useLanguage() re-render

Home.js + Sections
  └─ useLanguage() returns new language value
  └─ Bilingual text updates
```

### Scroll Detection Flow

```
Sidebar.js
  └─ useActiveSection(['AboutSection', 'WebSection', ...])

Home.js (renders sections)
  └─ <section id="AboutSection">About content</section>
  └─ <section id="WebSection">Web content</section>
  └─ ...

User scrolls
  └─ IntersectionObserver fires callbacks
  └─ activeSection state updates

Sidebar re-renders
  └─ Active section link highlights
```

### Image/Asset Loading

```
Sections (Web.js, About.js, etc.)
  └─ Reference Supabase CDN URL
  └─ <img src={`${SUPABASE_URL}/images/example.gif`} />

Supabase Storage
  └─ Serves images from CDN
  └─ Fast delivery worldwide
```

---

## Styling Architecture

### CSS Structure

**global.css** - Global styles, resets, typography
**Component CSS** - Each component has its own CSS file

- sidebar.css → Sidebar.js
- about.css → About.js
- footer.css → Footer.js
- etc.

### Inline Styles

Used for:

- Dynamic styles based on component state
- One-off styles that won't be reused
- Example: `activeSection === item.id ? "white" : "#666"`

### CSS Classes

Used for:

- Reusable styles
- Complex layouts (grid, flexbox)
- Animations
- Media queries

### Naming Convention

```
.sidebar              (component name)
.sidebar-img         (sub-element)
.sidebar-words       (sub-element)
.section             (common class)
.section-image       (sub-element)
.section-words       (sub-element)
```

---

## Performance Considerations

### What's Good

✅ Lazy-load sections (rendered on-demand)  
✅ Images on Supabase CDN (optimized delivery)  
✅ IntersectionObserver (efficient scroll detection)  
✅ Minimal re-renders (Context API is optimized)

### Potential Improvements

⏳ Add image lazy-loading (`loading="lazy"`)  
⏳ Implement code splitting (split pages into chunks)  
⏳ Optimize video size (reduce file size for faster load)  
⏳ Add service worker (PWA caching)

### Best Practices Followed

✅ No unnecessary re-renders  
✅ Event handlers properly cleanup (useEffect cleanup)  
✅ Efficient array rendering with `.map()`  
✅ Avoid inline arrow functions in render (performance)

---

## Best Practices

### Component Organization

```javascript
// ✅ Good: Comments first, then imports, then component
/**
 * @file MyComponent.js
 * @description What this component does
 */
import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const MyComponent = () => {
	// Component logic
};

export default MyComponent;
```

### State Management

```javascript
// ✅ Good: Use hooks at top of component
const MyComponent = () => {
	const { language } = useLanguage();
	const [count, setCount] = useState(0);

	return <div>{count}</div>;
};

// ❌ Avoid: State inside loops or conditionals
const MyComponent = ({ items }) => {
	return items.map((item) => {
		const [state] = useState(); // ❌ Bad!
	});
};
```

### Bilingual Content

```javascript
// ✅ Good: Use ternary or object lookup
{
	language === "es" ? "Hola" : "Hello";
}
{
	labels[language];
}

// ❌ Avoid: Hardcoded text
<h1>Hello</h1>; // Missing Spanish!
```

### Event Handlers

```javascript
// ✅ Good: Named functions
const handleClick = () => { /* ... */ };
<button onClick={handleClick}>Click</button>

// ✅ Also Good: Arrow function for params
<button onClick={() => setLanguage('en')}>English</button>

// ❌ Avoid: Inline function definitions in JSX
<button onClick={function() { setLanguage('en'); }}>English</button>
```

### Cleanup Functions

```javascript
// ✅ Good: Cleanup in useEffect
useEffect(() => {
	const observer = new IntersectionObserver(callback);

	return () => {
		observer.disconnect(); // Cleanup
	};
}, [dependencies]);
```

---

## Troubleshooting

### Issue: Language state not updating

**Diagnosis:**

- Check if component is inside LanguageProvider
- Verify useLanguage() is called (not useContext directly)
- Check if setLanguage was called in event handler

**Solution:**

```javascript
// Make sure LanguageProvider wraps the component tree
<LanguageProvider>
	<App />
</LanguageProvider>;

// Use useLanguage hook
const { language, setLanguage } = useLanguage();
```

### Issue: Sidebar not highlighting active section

**Diagnosis:**

- Check if section IDs match in useActiveSection
- Verify sections have id attribute: `<section id="WebSection">`
- Check if window resize is interfering with observer

**Solution:**

```javascript
// Ensure section IDs match
const sectionIds = ['AboutSection', 'WebSection'];
<section id="AboutSection">...</section>
<section id="WebSection">...</section>

// Test with browser DevTools
// - Open Elements tab
// - Find section in DOM
// - Verify id attribute exists
```

### Issue: Environment variables not loading

**Diagnosis:**

- .env file not created
- Variable name doesn't start with REACT*APP*
- App not restarted after changing .env

**Solution:**

```bash
# Create .env file
cp .env.example .env

# Fill in values
REACT_APP_SUPABASE_URL=https://xxxx.supabase.co
REACT_APP_SUPABASE_KEY=eyJhbGc...

# Restart dev server
npm start
```

### Issue: Supabase credentials exposed in code

**Diagnosis:**

- Keys hardcoded in supabaseClient.js
- Keys visible in git history

**Solution:**

```bash
# Move to .env
REACT_APP_SUPABASE_URL=your_url
REACT_APP_SUPABASE_KEY=your_key

# Update supabaseClient.js
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

# Remove from git (if already committed)
git rm --cached src/supabaseClient.js
git commit -m "Remove credentials from tracking"
```

---

## Learning Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Supabase Documentation](https://supabase.com/docs)
- [Context API Guide](https://react.dev/reference/react/useContext)
- [Custom Hooks](https://react.dev/reference/react/useRef)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

**Last Updated:** January 28, 2026  
**Document Version:** 1.0.0
