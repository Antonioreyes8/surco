import React, { useState } from "react";
import Cart from "../sections/Cart";
import StoreItems from "../sections/StoreItems";
import "../styles/store.css";

const Store = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [nextId, setNextId] = useState(0);

	const toggleCart = () => {
		setCartOpen((prev) => !prev);
	};

	const addToCart = (item) => {
		setCart((prev) => {
			const exists = prev.some((i) => i.name === item.name);
			if (exists) return prev;

			const entry = { id: nextId, ...item };
			setNextId((n) => n + 1);
			return [...prev, entry];
		});
		setCartOpen(true);
	};

	const removeFromCart = (id) => {
		setCart((prev) => prev.filter((i) => i.id !== id));
	};

	return (
		<div className="store-page">
			<StoreItems onAdd={addToCart} />

			<Cart
				isOpen={cartOpen}
				onClose={() => setCartOpen(false)}
				cart={cart}
				onRemove={removeFromCart}
			/>

			<button className="cart-fab" onClick={toggleCart}>
				<i className="fa-solid fa-cart-shopping"></i>
			</button>
		</div>
	);
};

export default Store;
