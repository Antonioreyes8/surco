import React, { useState } from "react";
import Cart from "../sections/Cart";
import StoreItems from "../sections/StoreItems";
import "../styles/store.css";

/**
 * Store
 * -----
 * Main container component responsible for:
 * - Managing cart state
 * - Handling add/remove cart actions
 * - Controlling cart visibility
 *
 * This component acts as the single source of truth
 * for cart-related data and behavior.
 */
const Store = () => {
	/**
	 * Indicates whether the cart UI (drawer/modal)
	 * is currently visible to the user.
	 */
	const [cartOpen, setCartOpen] = useState(false);

	/**
	 * Array of items currently in the cart.
	 * Each item represents a unique product entry.
	 */
	const [cart, setCart] = useState([]);

	/**
	 * Internal counter used to assign a unique identifier
	 * to each cart entry.
	 *
	 * This ID is separate from the product identity and
	 * is used solely for cart operations (e.g. removal).
	 */
	const [nextId, setNextId] = useState(0);

	/**
	 * Toggles the cart open/close state.
	 * Used primarily by the floating action button (FAB).
	 */
	const toggleCart = () => {
		setCartOpen((prev) => !prev);
	};

	/**
	 * Adds a product to the cart.
	 *
	 * - Prevents duplicate products from being added
	 * - Assigns a unique cart-specific ID
	 * - Opens the cart UI after successful addition
	 *
	 * @param {Object} item - Product object received from StoreItems
	 */
	const addToCart = (item) => {
		setCart((prev) => {
			/**
			 * Check whether the product already exists in the cart.
			 * Comparison is based on product name, assuming
			 * names are unique across all products.
			 */
			const exists = prev.some((i) => i.name === item.name);

			// If the product is already in the cart, do nothing
			if (exists) return prev;

			/**
			 * Create a new cart entry.
			 * - `id` is a cart-specific identifier
			 * - Product data is spread from the item object
			 */
			const entry = { id: nextId, ...item };

			/**
			 * Increment the ID counter to ensure the next
			 * cart entry receives a unique identifier.
			 */
			setNextId((n) => n + 1);

			// Return a new cart array including the new entry
			return [...prev, entry];
		});

		// Automatically open the cart after adding an item
		setCartOpen(true);
	};

	/**
	 * Removes an item from the cart.
	 *
	 * Filters out the cart entry matching the provided
	 * cart-specific ID.
	 *
	 * @param {number} id - Cart entry ID to remove
	 */
	const removeFromCart = (id) => {
		setCart((prev) => prev.filter((i) => i.id !== id));
	};

	return (
		<div className="store-page">
			{/* 
				StoreItems component
				--------------------
				Responsible for displaying available products.
				Receives the addToCart handler as a prop.
			*/}
			<StoreItems onAdd={addToCart} />

			{/* 
				Cart component
				--------------
				Displays current cart contents and handles removal.
				Controlled entirely by Store state.
			*/}
			<Cart
				isOpen={cartOpen}
				onClose={() => setCartOpen(false)}
				cart={cart}
				onRemove={removeFromCart}
			/>

			{/* 
				Floating Action Button (FAB)
				----------------------------
				Provides quick access to the cart on mobile devices.
			*/}
			<button className="cart-fab" onClick={toggleCart}>
				<i className="fa-solid fa-cart-shopping"></i>
			</button>
		</div>
	);
};

export default Store;
