/**
 * @file index.js
 * @description Entry point for the React application
 *
 * SETUP:
 * - Wraps the entire App with LanguageProvider for global language state management
 * - Mounts React app to the #root DOM element
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";

// Get the root DOM element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app with strict mode (catches potential issues in development)
// and wrap with LanguageProvider to enable global language context
root.render(
	<React.StrictMode>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</React.StrictMode>,
);
