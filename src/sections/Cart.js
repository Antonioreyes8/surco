import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/store.css";

const Cart = ({ isOpen, onClose, cart = [], onRemove }) => {
	const [state, handleSubmit] = useForm("mzdgyqkg");
	const [email, setEmail] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		const cartBody = cart.map((i) => `${i.name} — ${i.price}`).join("\n");
		const formData = new FormData();
		formData.append("email", email);
		formData.append("message", `Cart Contents:\n\n${cartBody}`);

		const result = await fetch("https://formspree.io/f/mzdgyqkg", {
			method: "POST",
			body: formData,
		});

		if (result.ok) {
			setEmail("");
			alert("Cart sent successfully!");
		}
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
				<form onSubmit={onSubmit}>
					<label
						htmlFor="email"
						style={{ display: "block", marginBottom: "6px" }}
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="you@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
					<button
						type="submit"
						className="send-btn"
						disabled={!email || cart.length === 0 || state.submitting}
					>
						{state.submitting ? "Sending..." : "Send Cart"}
					</button>
					{state.succeeded && (
						<p style={{ fontSize: "12px", marginTop: "8px", color: "#b2d236" }}>
							Cart sent successfully!
						</p>
					)}
				</form>
			</div>
		</div>
	);
};

export default Cart;
