/**
 * @file Store.js
 * @description E-commerce store page
 *
 * PURPOSE:
 * Displays merchandise and products for sale.
 * Supports bilingual content (English and Spanish).
 *
 * FUTURE ENHANCEMENTS:
 * - Integrate Packages component for product listings
 * - Add shopping cart functionality
 * - Implement payment processing
 * - Display product inventory
 */

import React from "react";
import { useLanguage } from "../hooks/useLanguage";

/**
 * Store Page Component
 *
 * @component
 * @returns {React.ReactElement} Store page with product listings
 */
const Store = () => {
	// Access language from global context
	const { language } = useLanguage();

	return (
		<div className="store-page" style={{ padding: "2rem", color: "white" }}>
			<h1>{language === "es" ? "Tienda" : "Store"}</h1>
			<p>
				{language === "es"
					? "Aquí va el contenido de la tienda."
					: "Store content goes here."}
			</p>
			{/* TODO: Add StoreItems or Packages components here */}
		</div>
	);
};

export default Store;
