/**
 * @file App.js
 * @description Main application component that orchestrates the entire user experience.
 *
 * APP ARCHITECTURE:
 * - Manages intro video display with mobile detection
 * - Handles language selection flow
 * - Routes between Home and Store pages using React Router
 *
 * FLOW:
 * 1. On app load: Show intro video (desktop only)
 * 2. After video ends: Display language selection prompt
 * 3. After language selection: Show app content (Home or Store)
 */

import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Language from "./pages/Language";
import { LanguageContext } from "./context/LanguageContext";

// Import global stylesheets
import "./styles/global.css";
import "./styles/sidebar.css";
import "./styles/about.css";
import "./styles/promos.css";
import "./styles/intro.css";
import "./styles/footer.css";
import "./styles/language.css";
import "./styles/store.css";

// Import intro video asset
import introVideo from "./assets/videos/intro.mp4";

/**
 * App Component
 *
 * @component Main application wrapper
 * @returns {React.ReactElement} Complete app with routing and conditional rendering
 */
const App = () => {
	// Get language from global context (set by Language selection component)
	const { language } = useContext(LanguageContext);

	// STATE MANAGEMENT:
	const [showIntro, setShowIntro] = useState(true); // Controls intro video visibility
	const [fadeOut, setFadeOut] = useState(false); // Controls intro fade-out animation
	const [showVideo, setShowVideo] = useState(true); // Hides video on mobile devices

	useEffect(() => {
		// 1. Check mobile immediately
		if (window.innerWidth < 700) {
			setShowVideo(false);
			setShowIntro(false);
		}
	}, []);

	/**
	 * Handles video completion
	 * - Triggers fade-out CSS animation
	 * - Removes component from DOM after animation finishes (1200ms)
	 */
	const handleVideoEnd = () => {
		// 2. Start fade out ONLY when video actually finishes
		setFadeOut(true);
		// Wait for the CSS transition to finish before unmounting
		setTimeout(() => setShowIntro(false), 1200);
	};

	return (
		<>
			{/* CONDITIONAL RENDERING - Three states of the app: */}

			{/* STATE 1: Show intro video (desktop only) */}
			{showIntro && showVideo ? (
				<div className={`intro-container${fadeOut ? " fade-out" : ""}`}>
					<video
						className="intro-video"
						src={introVideo}
						autoPlay
						muted
						playsInline
						// Important: Ensure the video is ready
						onCanPlayThrough={() => console.log("Video ready")}
						onEnded={handleVideoEnd}
					/>
				</div>
			) : language === null ? (
				// STATE 2: Show language selection (after video or on mobile)
				<Language />
			) : (
				// STATE 3: Show main app with navigation and pages
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/store" element={<Store />} />
					</Routes>
				</Router>
			)}
		</>
	);
};

export default App;
