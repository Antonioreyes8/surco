import React from "react";
import "../styles/global.css";
import Shirt from "../assets/images/shirt.png";

const Prints = () => {
	const webServices = [
		{
			title: "Marketing Materials & Collateral",
			description:
				"Brochures, flyers, business cards, and letterheads that reflect your brand clearly.",
		},
		{
			title: "Large Format & Trade Show Graphics",
			description:
				"Banners, posters, and displays designed to draw attention at events and exhibits.",
		},
		{
			title: "Custom Merchandise & Promotional Items",
			description:
				"Branded apparel, gifts, and merch that keep your brand top-of-mind.",
		},
		{
			title: "Signage & Environmental Graphics",
			description:
				"Indoor/outdoor signage, wayfinding, and graphics that enhance physical spaces.",
		},
		{
			title: "Publication & Book Design",
			description:
				"Magazines, books, catalogs, and reports with clean, professional layouts.",
		},
		{
			title: "Packaging & Label Design",
			description:
				"Product packaging and labels that protect and promote your brand.",
		},
	];
	return (
		<section id="PrintsSection" className="section">
			<div className="section-image">
				<img
					src={Shirt}
					alt="Sticky landscape"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</div>
			<div className="section-words">
				<h2>Print Services</h2>
				<ul className="services-list">
					{webServices.map((service, index) => (
						<li key={index}>
							<h3>{service.title}</h3>
							<p>{service.description}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Prints;
