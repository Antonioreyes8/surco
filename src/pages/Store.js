import React, { useState } from "react";
import Cart from "../sections/Cart";
import StoreItems from "../sections/StoreItems";
import "../styles/store.css";

const Store = () => {
	const [cartOpen, setCartOpen] = useState(false);

	const toggleCart = () => {
		setCartOpen((prev) => !prev);
	};

	return (
		<div className="store-page">
			<StoreItems />

			{/* CART */}
			<Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />

			{/* MOBILE FAB */}
			<button className="cart-fab" onClick={toggleCart}>
				<i class="fa-solid fa-cart-shopping"></i>
			</button>
		</div>
	);
};

export default Store;
