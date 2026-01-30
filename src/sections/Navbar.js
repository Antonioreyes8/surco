/**
 * @file Sidebar.js
 * @description Fixed navigation sidebar with scroll detection
 *
 * FEATURES:
 * - Fixed positioning on left side of screen
 * - Auto-highlights current section based on scroll position
 * - Bilingual labels (English/Spanish)
 * - Smooth scrolling to sections
 * - Mobile-responsive (adjusts offset for better UX)
 * - Supabase-hosted logo image
 *
 * INTERACTION:
 * 1. User scrolls page
 * 2. useActiveSection hook detects which section is in viewport
 * 3. Sidebar button for that section highlights
 * 4. User can click any navigation item to jump to that section
 */

import React from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/navbar.css";

// Supabase CDN URL for hosting images and assets
const SUPABASE_URL =
	"https://mmdfoamzwrlzlukgubaf.supabase.co/storage/v1/object/public/photos";

/**
 * Bilingual navigation labels
 * Maps section IDs to human-readable labels in English and Spanish
 */
const navigationLabels = {
	en: {
		AboutSection: "About us",
		WebSection: "Web",
		DesignSection: "Design",
		PhotoVideoSection: "Photo/Video",
		PrintsSection: "Prints",
		PromosSection: "Promos",
		Store: "Work with us",
	},
	es: {
		AboutSection: "Sobre nosotros",
		WebSection: "Web",
		DesignSection: "Diseño",
		PhotoVideoSection: "Foto/Video",
		PrintsSection: "Impresión",
		PromosSection: "Promociones",
		Store: "Trabaja con nosotros",
	},
};

/**
 * Sidebar Component
 *
 * @component
 * @returns {React.ReactElement} Fixed sidebar navigation with section detection
 *
 * STATE MANAGEMENT:
 * - Gets language from global LanguageContext via useLanguage hook
 * - Gets activeSection from useActiveSection hook (scroll-based)
 */
const Navbar = () => {
	// Get current language from global context
	const { language } = useLanguage();

	// Array of section IDs that the hook will monitor
	// These must match the 'id' attributes on section elements
	const sectionIds = [
		"AboutSection", // About company
		"WebSection", // Web development services
		"DesignSection", // Graphic design work
		"PhotoVideoSection", // Photography & video portfolio
		"PrintsSection", // Printing services
		"PromosSection", // Special packages and offers
	];

	// Custom hook: detects which section is currently visible in viewport
	// Returns the ID of the active section (e.g., 'WebSection')
	const activeSection = useActiveSection(sectionIds);

	// Determine language for display ('en' or 'es')
	const lang = language === "es" ? "es" : "en";

	// Create navigation items array from section IDs and labels
	const navigationItems = sectionIds.map((id) => ({
		id,
		label: navigationLabels[lang][id],
	}));

	return (
		<div className="navbar">
			{/* Logo */}
			<img
				src={`${SUPABASE_URL}/images/SurcoLogo.png`}
				alt="Surco logo"
				className="navbar-img"
			/>

			{/* Navigation List */}
			<ul className="navbar-list">
				{/* PORTFOLIO SECTION LINKS */}
				{navigationItems.map((item) => (
					<li key={item.id} className="navbar-words">
						<button
							onClick={() => {
								// Find the target section by ID
								const target = document.getElementById(item.id);
								if (!target) return; // Safety check

								// RESPONSIVE SCROLLING:
								if (window.innerWidth <= 768) {
									// MOBILE: Scroll with offset to account for fixed navbars/headers
									const offset = -100; // Adjust to match your nav height
									const y =
										target.getBoundingClientRect().top +
										window.pageYOffset +
										offset;

									window.scrollTo({
										top: y,
										behavior: "smooth",
									});
								} else {
									// DESKTOP: Scroll section to center of viewport
									target.scrollIntoView({
										behavior: "smooth",
										block: "center",
									});
								}
							}}
							className={`navbar-button ${activeSection === item.id ? "active" : ""}`}
						>
							{item.label}
						</button>
					</li>
				))}

				{/* STORE LINK */}
				<li className="navbar-words navbar-store-item">
					<Link to="/store" className="navbar-store-link">
						{navigationLabels[lang].Store}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
