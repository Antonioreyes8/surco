/**
 * @file Language.js
 * @description Language selection screen component
 *
 * PURPOSE:
 * Shows user a full-screen modal to select between English and Spanish.
 * This is displayed after the intro video (or on mobile devices).
 * Selection sets the global language context for the entire app.
 *
 * DESIGN:
 * - Full viewport overlay with black background
 * - Bilingual prompt (English / Español)
 * - Two prominent button options
 * - High z-index to appear above all content
 */

import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/language.css";

/**
 * Language Selection Component
 *
 * @component
 * @returns {React.ReactElement} Full-screen language selection modal
 *
 * @example
 * <Language />
 */
const Language = () => {
	// Get setLanguage from global context
	// When user clicks a button, this updates the global language state
	const { setLanguage } = useLanguage();

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				background: "black",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				zIndex: 9999, // Appears above all other content
			}}
		>
			{/* Bilingual header prompt */}
			<h2 className="Language-Header">
				Choose your language / Elige tu idioma
			</h2>

			{/* Language selection buttons */}
			<div style={{ display: "flex", gap: "2rem" }}>
				<button
					className="LanguageButton"
					onClick={() => setLanguage("en")}
					aria-label="Select English language"
				>
					English
				</button>
				<button
					className="LanguageButton"
					onClick={() => setLanguage("es")}
					aria-label="Seleccionar idioma español"
				>
					Español
				</button>
			</div>
		</div>
	);
};

export default Language;
