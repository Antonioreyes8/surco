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
		PromosSection: "Work with us",
		Store: "Store",
	},
	es: {
		AboutSection: "Sobre nosotros",
		WebSection: "Web",
		DesignSection: "Diseño",
		PhotoVideoSection: "Foto/Video",
		PrintsSection: "Impresión",
		PromosSection: "Trabaja con nosotros",
		Store: "Tienda",
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
const Sidebar = () => {
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
		<div className="sidebar">
			{/* Logo image from Supabase CDN */}
			<img
				src={`${SUPABASE_URL}/images/SurcoLogo.png`}
				alt="Surco logo"
				className="sidebar-img"
			/>

			{/* Navigation List */}
			<ul
				style={{
					listStyle: "none",
					padding: 0,
				}}
			>
				{/* PORTFOLIO SECTION LINKS */}
				{navigationItems.map((item) => (
					<li key={item.id} className="sidebar-words">
						<button
							onClick={() => {
								// Find the target section by ID
								const target = document.getElementById(item.id);
								if (!target) return; // Safety check

								// RESPONSIVE SCROLLING:
								if (window.innerWidth <= 768) {
									// MOBILE: Scroll with offset to account for fixed sidebars/headers
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
							style={{
								background: "none",
								border: "none",
								padding: 0,
								fontFamily: "Delight, sans-serif",
								// Highlight active section with larger font and white color
								fontWeight: activeSection === item.id ? 800 : 800,
								fontSize: activeSection === item.id ? "1.1em" : "1em",
								color: activeSection === item.id ? "white" : "#666",
								cursor: "pointer",
								textAlign: "left",
								textDecoration: "none",
								transition: "all 0.3s ease",
							}}
						>
							{item.label}
						</button>
					</li>
				))}

				{/* STORE LINK */}
				<li className="sidebar-words" style={{ marginTop: "20px" }}>
					<Link
						to="/store"
						style={{
							display: "block",
							fontFamily: "Delight, sans-serif",
							fontWeight: 800,
							fontSize: "1em",
							color: "#666",
							textDecoration: "none",
							transition: "all 0.3s ease",
						}}
						// Hover effect: change text to white
						onMouseEnter={(e) => (e.target.style.color = "white")}
						onMouseLeave={(e) => (e.target.style.color = "#666")}
					>
						{navigationLabels[lang].Store}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
