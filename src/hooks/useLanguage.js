/**
 * @file useLanguage.js
 * @description Custom React hook for accessing language context
 *
 * PURPOSE:
 * Provides a convenient, type-safe way for components to access the global language state.
 * Throws an error if used outside of LanguageProvider (helpful for debugging).
 *
 * USAGE:
 * import { useLanguage } from '../hooks/useLanguage';
 *
 * function MyComponent() {
 *   const { language, setLanguage } = useLanguage();
 *   return <div>{language === 'es' ? 'Hola' : 'Hello'}</div>;
 * }
 *
 * BENEFITS:
 * - Cleaner code than useContext(LanguageContext)
 * - Built-in error checking
 * - Centralized hook for easier maintenance
 */

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

/**
 * useLanguage Hook
 *
 * @hook
 * @returns {Object} Language context value
 * @returns {string|null} language - Current language ('en', 'es', or null)
 * @returns {Function} setLanguage - Function to update language
 * @throws {Error} If hook is used outside of LanguageProvider
 *
 * @example
 * const { language, setLanguage } = useLanguage();
 */
export const useLanguage = () => {
	const context = useContext(LanguageContext);

	// Safety check: ensure hook is used within LanguageProvider
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}

	return context;
};
