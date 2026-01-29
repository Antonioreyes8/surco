/**
 * @file Store.js
 * @description E-commerce store page
 *
 * PURPOSE:
 * Displays merchandise and products for sale.
 * Supports bilingual content (English and Spanish).
 */

import React from "react";
import Cart from "../sections/Cart.js";
import StoreItems from "../sections/StoreItems.js";
import "../styles/store.css";

/**
 * Store Page Component
 *
 * @component
 * @returns {React.ReactElement} Store page with product listings
 */
const Store = () => {
	return (
		<div
			className="store-page"
			style={{ color: "white", fontFamily: "Delight, sans-serif" }}
		>
			<StoreItems />
			<Cart />
		</div>
	);
};

export default Store;
