import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/store.css";

const Cart = ({ isOpen, onClose, cart = [], onRemove }) => {
	const [state, handleSubmit] = useForm("mzdgyqkg");
	const [email, setEmail] = useState("");
	const [firstandlastName, setFirstandLastName] = useState("");
	const [company, setCompany] = useState("");

	const onSubmit = (e) => {
		const cartBody = cart.map((i) => `${i.name} — ${i.price}`).join("\n");
		// Add cart info to form data before submission
		const messageInput =
			e.target.elements.message || document.createElement("input");
		messageInput.name = "message";
		messageInput.value = `Cart Contents:\n\n${cartBody}`;

		// Use Formspree's handleSubmit
		handleSubmit(e);
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
						htmlFor="firstandlastName"
						style={{ display: "block", marginBottom: "6px" }}
					>
						First and Last name
					</label>
					<input
						id="firstandlastName"
						type="text"
						name="firstandlastName"
						placeholder="John Doe"
						value={firstandlastName}
						onChange={(e) => setFirstandLastName(e.target.value)}
						required
					/>

					<label
						htmlFor="company"
						style={{ display: "block", marginBottom: "6px", marginTop: "12px" }}
					>
						Company Name
					</label>
					<input
						id="company"
						type="text"
						name="company"
						placeholder="Your Company"
						value={company}
						onChange={(e) => setCompany(e.target.value)}
						required
					/>

					<label
						htmlFor="email"
						style={{ display: "block", marginBottom: "6px", marginTop: "12px" }}
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
					<input
						type="hidden"
						name="message"
						value={`Cart Contents:\n\n${cart.map((i) => `${i.name} — ${i.price}`).join("\n")}`}
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
					<button
						type="submit"
						className="send-btn"
						disabled={
							!email ||
							!firstandlastName ||
							!company ||
							cart.length === 0 ||
							state.submitting
						}
						style={{ marginTop: "12px" }}
					>
						{state.submitting ? "Sending..." : "Send Cart"}
					</button>
					{state.succeeded && (
						<p
							style={{
								fontSize: "12px",
								marginTop: "8px",
								color: "#b2d236",
								fontWeight: "600",
							}}
						>
							✓ Cart sent successfully! We'll be in touch soon.
						</p>
					)}
				</form>
			</div>
		</div>
	);
};

export default Cart;
