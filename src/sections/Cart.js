import React from "react";
import "../styles/store.css";

const Cart = ({ isOpen, onClose }) => {
	return (
		<div className={`cart-container ${isOpen ? "open" : ""}`}>
			
			{/* MOBILE ONLY CLOSE BUTTON */}
			<button className="cart-close" onClick={onClose}>
				✕
			</button>

			{/* 🔽 KEEP ALL YOUR EXISTING CART CONTENT BELOW */}
			<h2>Cart</h2>

			{/* cart items, totals, buttons, etc */}
		</div>
	);
};

export default Cart;
