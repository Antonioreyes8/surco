import React, { useState } from "react";
import "../styles/store.css";

const Cart = ({ isOpen, onClose, cart = [], onRemove }) => {
	const [email, setEmail] = useState("");

	const handleSend = () => {
		if (!email) return;
		const body = cart.map((i) => `${i.name} — ${i.price}`).join("\n");
		const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
			"Surco: Cart contents",
		)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailto;
	};

	return (
		<div className={`cart-container ${isOpen ? "open" : ""}`}>
			<button className="cart-close" onClick={onClose}>
				✕
			</button>

			<h2>Cart</h2>

			<div className="cart-list">
				{cart.length === 0 ? (
					<p className="cart-empty">Your cart is empty</p>
				) : (
					cart.map((it) => (
						<div className="cart-item" key={it.id}>
							<div className="cart-item-info">
								<div className="cart-item-name">{it.name}</div>
								<div className="cart-item-price">{it.price}</div>
							</div>
							<button
								className="remove-btn"
								onClick={() => onRemove && onRemove(it.id)}
							>
								-
							</button>
						</div>
					))
				)}
			</div>

			<div className="email-form">
				<label style={{ display: "block", marginBottom: "6px" }}>Email</label>
				<input
					type="email"
					placeholder="you@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button
					className="send-btn"
					onClick={handleSend}
					disabled={!email || cart.length === 0}
				>
					Send Cart
				</button>
			</div>
		</div>
	);
};

export default Cart;
