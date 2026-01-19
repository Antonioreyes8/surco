import React from "react";
import Packages from "../components/Packages";
import "../styles/global.css";

const Work_with_us = ({language}) => {
	return (
		<section id="PromosSection" className="PromosSection">
			<h2
				style={{
					textAlign: "center",
					color: "white",
					fontFamily: "Delight, sans-serif",
					fontWeight: 700,
					wordSpacing: "2px",
					fontSize: "2em",
				}}
			>
				{language === "es" ? "Nuestra Oferta de Invierno" : "Our Winter Promo"}
			</h2>
			<Packages language={language}/>
			<h4
				style={{
					textAlign: "center",
					color: "white",
					fontFamily: "Delight, sans-serif",
					fontWeight: 700,
					fontSize: "2em",
				}}
			>
				= $999 USD
			</h4>
			<p
				style={{
					textAlign: "center",
					color: "white",
					fontFamily: "Delight, sans-serif",
					fontWeight: 700,
					fontSize: "1.5em",
				}}
			>
				{language === "es" ? "No templates" : "No templates"}
			</p>
			<p
				style={{
					textAlign: "center",
					color: "white",
					fontFamily: "Delight, sans-serif",
					fontWeight: 700,
					fontSize: "1.5em",
				}}
			>
				{language === "es" ? "Todo personalizado" : "Everything custom made"}
			</p>
			<p
				style={{
					textAlign: "center",
					color: "white",
					fontFamily: "Delight, sans-serif",
					fontWeight: 700,
					fontSize: "1.5em",
				}}
			>
				{language === "es" ? "Oferta por tiempo limitado " : "Limited time offer"}
			</p>
		</section>
	);
};

export default Work_with_us;
