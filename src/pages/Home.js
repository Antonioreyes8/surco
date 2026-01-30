/**
 * @file Home.js
 * @description Main portfolio page showcasing Surco's work and services
 *
 * STRUCTURE:
 * - Sidebar: Fixed navigation with scroll detection
 * - Sections: Multiple content sections displaying different service categories
 *   - About: Company mission and values
 *   - Web: Web development services
 *   - Design: Graphic and UX design services
 *   - PhotoVideo: Photography and videography services
 *   - Prints: Printing and physical media services
 *   - Promos: Special offers and packages
 *   - Footer: Contact and social links
 *
 * LAYOUT:
 * The sidebar stays fixed on the left while content scrolls on the right.
 * Uses CSS classes "push-content-right" to offset main content.
 */

import React from "react";
import Sidebar from "../sections/Navbar";
import Web from "../sections/Web";
import Design from "../sections/Design";
import PhotoVideo from "../sections/PhotoVideo";
import Prints from "../sections/Prints";
import About from "../sections/About";
import Promos from "../sections/Promos";
import Footer from "../sections/Footer";

/**
 * Home Page Component
 *
 * @component
 * @returns {React.ReactElement} Portfolio page with navigation and multiple sections
 */
const Home = () => {
	return (
		<div>
			{/* Fixed sidebar navigation - stays visible while scrolling */}
			<Sidebar />

			{/* Main content area - pushed right to account for sidebar */}
			<div className="push-content-right">
				{/* Portfolio sections in order of appearance */}
				<About />
				<Web />
				<Design />
				<PhotoVideo />
				<Prints />
				<Promos />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
