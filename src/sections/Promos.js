import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/global.css";

/**
 * Work_with_us Section Component
 * Displays winter promotional packages combining design, web, and merchandise services
 * Package pricing: $999 USD for the complete bundle
 * Bilingual support: English and Spanish
 */
const Work_with_us = () => {
	const { language } = useLanguage();

	return (
		<section id="PromosSection" className="PromosSection">
			<h2>
				{language === "es" ? "Nuestra Oferta de Invierno" : "Our Winter Promo"}
			</h2>

			{/* Packages Display - Business Cards + Website + T-Shirts Bundle */}
			<div className="packages-section">
				{/* Business Cards Package */}
				<div
					className="promo"
					style={{
						backgroundColor: "#B2D236",
					}}
				>
					<span
						style={{
							fontSize: "1.2em",
							fontFamily: "Delight, sans-serif",
							fontWeight: 700,
							lineHeight: "2em",
						}}
					>
						{language === "es"
							? "250 Tarjetas de Presentación"
							: "250 Business Cards"}
					</span>
					<span>
						{language === "es" ? "Diseño + Impresión" : "Design + Print"}
					</span>
					<span>{language === "es" ? "16pt o 18pt" : "16pt or 18pt"}</span>
					<span>
						{language === "es" ? "Mate o Brillante" : "Matte or Glossy"}
					</span>
				</div>

				{/* Plus Separator */}
				<div
					style={{
						color: "white",
						fontSize: "1.5em",
						fontFamily: "Delight, sans-serif",
						fontWeight: 700,
					}}
				>
					+
				</div>

				{/* Website Package */}
				<div
					className="promo"
					style={{
						backgroundColor: "#D34E43",
						color: "white",
					}}
				>
					<span
						style={{
							fontSize: "1.2em",
							fontFamily: "Delight, sans-serif",
							fontWeight: 700,
							lineHeight: "2em",
						}}
					>
						{language === "es" ? "Sitio Web de 1 Página" : "1 page Website"}
					</span>
					<span>{language === "es" ? "Mockup" : "Mockup"}</span>
					<span>{language === "es" ? "Hospedaje" : "Hosting"}</span>
					<span>{language === "es" ? "Soporte Web" : "Web support"}</span>
				</div>

				{/* Plus Separator */}
				<div
					style={{
						color: "white",
						fontSize: "1.5em",
						fontFamily: "Delight, sans-serif",
						fontWeight: 700,
					}}
				>
					+
				</div>

				{/* T-Shirts Package */}
				<div
					className="promo"
					style={{
						backgroundColor: "#EAF0DF",
					}}
				>
					<span
						style={{
							fontSize: "1.2em",
							fontFamily: "Delight, sans-serif",
							fontWeight: 700,
							lineHeight: "2em",
						}}
					>
						{language === "es" ? "50 Camisetas" : "50 T-Shirts"}
					</span>
					<span>{language === "es" ? "Tallas S-XL" : "Sizes S-XL"}</span>
					<span>
						{language === "es"
							? "Diseños en pecho y espalda"
							: "Chest and Back designs"}
					</span>
					<span>{language === "es" ? "1 color" : "1 color"}</span>
				</div>
			</div>

			{/* Bundle Price and Details */}
			<h4>= $999 USD</h4>
			<p>{language === "es" ? "No templates" : "No templates"}</p>
			<p>
				{language === "es" ? "Todo personalizado" : "Everything custom made"}
			</p>
			<p>
				{language === "es"
					? "Oferta por tiempo limitado "
					: "Limited time offer"}
			</p>
		</section>
	);
};

export default Work_with_us;
