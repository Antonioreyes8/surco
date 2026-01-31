import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react"; // Formspree hook for easy form handling
import "../styles/store.css";

/**
 * Cart Component
 * @param {boolean} isOpen - Controls visibility of the cart sidebar
 * @param {function} onClose - Function to close the cart
 * @param {array} cart - Array of items selected by the user
 * @param {function} onRemove - Function to remove a specific item from the cart
 */
const Cart = ({ isOpen, onClose, cart = [], onRemove }) => {
    // 1. FORMSPREE HOOK
    // 'state' tracks success, errors, and submitting status.
    // 'handleSubmit' is the function provided by Formspree to send data to their API.
    const [state, handleSubmit] = useForm("mzdgyqkg");

    // 2. LOCAL COMPONENT STATE
    // Tracks user input fields so we can clear them or validate them.
    const [email, setEmail] = useState("");
    const [firstandlastName, setFirstandLastName] = useState("");
    const [company, setCompany] = useState("");

    // 3. THE CUSTOM SUBMIT HANDLER
    const onSubmit = (e) => {
        // Prevent default browser behavior is NOT needed here because Formspree's 
        // handleSubmit will be called at the end.

        // Create a readable text string from the cart array.
        // Result looks like: "Web Design — $1500\nSEO Setup — $500"
        const cartBody = cart.map((i) => `${i.name} — ${i.price}`).join("\n");

        // 4. DATA INJECTION LOGIC
        // We look for the hidden 'message' input in the form. 
        // If it doesn't exist (failsafe), we create one.
        const messageInput =
            e.target.elements.message || document.createElement("input");
        
        messageInput.name = "message";
        // We set the value to the cart string we just created.
        // This is what will actually show up in your email body from Formspree.
        messageInput.value = `Cart Contents:\n\n${cartBody}`;

        // 5. TRIGGER FORMSPREE
        // We pass the modified event 'e' to Formspree to actually send the email.
        handleSubmit(e);
    };

    return (
        // Dynamic class: if isOpen is true, 'open' is added (usually for CSS animations)
        <div className={`cart-container ${isOpen ? "open" : ""}`}>
            
            {/* Close Button: Simple 'X' that triggers the parent's onClose function */}
            <button className="cart-close" onClick={onClose}>
                ✕
            </button>

            <h2>Cart</h2>

            {/* CART LIST SECTION */}
            <div className="cart-list">
                {cart.length === 0 ? (
                    <p className="cart-empty">Your cart is empty</p>
                ) : (
                    cart.map((it) => (
                        // We use the unique item 'id' as the key for React performance
                        <div className="cart-item" key={it.id}>
                            <div className="cart-item-info">
                                <div className="cart-item-name">{it.name}</div>
                                <div className="cart-item-price">{it.price}</div>
                            </div>
                            {/* Remove Button: Calls onRemove with the specific item's ID */}
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

            {/* FORM SECTION */}
            <div className="email-form">
                <form onSubmit={onSubmit}>
                    {/* First & Last Name Input */}
                    <label htmlFor="firstandlastName" style={{ display: "block", marginBottom: "6px" }}>
                        First and Last name
                    </label>
                    <input
                        id="firstandlastName"
                        type="text"
                        name="firstandlastName" // Important: Formspree uses 'name' for the email subject/body
                        placeholder="John Doe"
                        value={firstandlastName}
                        onChange={(e) => setFirstandLastName(e.target.value)}
                        required
                    />

                    {/* Company Name Input */}
                    <label htmlFor="company" style={{ display: "block", marginBottom: "6px", marginTop: "12px" }}>
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

                    {/* Email Input */}
                    <label htmlFor="email" style={{ display: "block", marginBottom: "6px", marginTop: "12px" }}>
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

                    {/* 6. THE HIDDEN MESSAGE FIELD
                        This is the "secret sauce." The user doesn't see this, 
                        but it contains the formatted cart contents. */}
                    <input
                        type="hidden"
                        name="message"
                        value={`Cart Contents:\n\n${cart.map((i) => `${i.name} — ${i.price}`).join("\n")}`}
                    />

                    {/* Validation: Shows if the email address is invalid after a submission attempt */}
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        className="send-btn"
                        // Disable button if: Email empty, Name empty, Cart empty, or already sending.
                        disabled={
                            !email ||
                            !firstandlastName ||
                            !company ||
                            cart.length === 0 ||
                            state.submitting
                        }
                        style={{ marginTop: "12px" }}
                    >
                        {/* UI feedback during the network request */}
                        {state.submitting ? "Sending..." : "Send Cart"}
                    </button>

                    {/* SUCCESS MESSAGE
                        Triggered only after Formspree confirms receipt. */}
                    {state.succeeded && (
                        <p style={{ fontSize: "12px", marginTop: "8px", color: "#b2d236", fontWeight: "600" }}>
                            ✓ Cart sent successfully! We'll be in touch soon.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Cart;