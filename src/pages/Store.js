import React, { useState } from "react";
import Cart from "../sections/Cart";
import StoreItems from "../sections/StoreItems";
import "../styles/store.css";

const Store = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [nextId, setNextId] = useState(1);

	const toggleCart = () => {
		setCartOpen((prev) => !prev);
	};

	const addToCart = (item) => {
		const entry = { id: nextId, ...item };
		setNextId((n) => n + 1);
		setCart((prev) => [...prev, entry]);
		setCartOpen(true);
	};

	const removeFromCart = (id) => {
		setCart((prev) => prev.filter((i) => i.id !== id));
	};

	return (
		<div className="store-page">
			<StoreItems onAdd={addToCart} />

			{/* CART */}
			<Cart
				isOpen={cartOpen}
				onClose={() => setCartOpen(false)}
				cart={cart}
				onRemove={removeFromCart}
			/>

			{/* MOBILE FAB */}
			<button className="cart-fab" onClick={toggleCart}>
				<i className="fa-solid fa-cart-shopping"></i>
			</button>
		</div>
	);
};

export default Store;
