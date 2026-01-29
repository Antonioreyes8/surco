import React from "react";

import { useLanguage } from "../hooks/useLanguage";

const Cart = () => {
    const { language } = useLanguage();
    return (
        <div className="cart-container">
            <h2>{language === "es" ? "Mi carrito" : "My cart"}</h2>
            {/* Cart items would go here */}
        </div>
    );
}
export default Cart;