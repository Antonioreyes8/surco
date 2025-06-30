import React from "react";
import "../styles/global.css";
import Shirt from "../assets/images/shirt.png";

const Prints = () => {
	const webServices = [
		{
			title: "Marketing Materials & Collateral",
			description: "Professional brochures, flyers, business cards, letterheads, and promotional materials that represent your brand with quality and consistency.",
		},
		{
			title: "Large Format & Trade Show Graphics",
			description:
				"Eye-catching banners, posters, trade show displays, and exhibition graphics designed to attract attention and drive foot traffic.",
		},
		{
			title: "Custom Merchandise & Promotional Items",
			description: "Branded apparel, promotional products, corporate gifts, and custom merchandise that keeps your brand top-of-mind with customers.",
		},
		{
			title: "Signage & Environmental Graphics",
			description:
				"Indoor and outdoor signage, wayfinding systems, window graphics, and environmental branding that enhances your physical space.",
		},
		{
			title: "Publication & Book Design",
			description: "Magazine layouts, book design, annual reports, catalogs, and multi-page publications with professional typography and layout design.",
		},
		{
			title: "Packaging & Label Design",
			description: "Product packaging, shipping materials, labels, and retail packaging that protects your products while reinforcing your brand identity."
		},

	];
	return (
		<section id="PrintsSection" className="section">
			<div
				style={{
					position: "sticky",
					top: "10rem",
					zIndex: 10,
					width: "50%", 
					height: "500px", 
					//border: "white 1px solid" //Comment out when not needed
				}}
			>
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
