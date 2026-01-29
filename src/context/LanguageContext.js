/**
 * @file LanguageContext.js
 * @description Global language state management using React Context API
 *
 * PURPOSE:
 * Provides a centralized way to manage language preference ('en' or 'es')
 * without passing props through multiple component levels (prop-drilling).
 *
 * HOW IT WORKS:
 * - LanguageContext: The context object that holds language data
 * - LanguageProvider: Wraps components and provides language state to all children
 * - Any component can access language via useLanguage() hook or useContext(LanguageContext)
 */

import React, { createContext, useState } from "react";

/**
 * Create the language context
 * @type {React.Context<{language: string|null, setLanguage: Function}>}
 */
export const LanguageContext = createContext();

/**
 * LanguageProvider Component
 * Wraps the app and provides language state to all child components
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components that can access language context
 * @returns {React.ReactElement} Context provider wrapper
 *
 * @example
 * <LanguageProvider>
 *   <App />
 * </LanguageProvider>
 */
export const LanguageProvider = ({ children }) => {
	// State: null = no language selected, 'en' = English, 'es' = Spanish
	const [language, setLanguage] = useState(null);

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
