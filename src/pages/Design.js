import React from "react";
import "../styles/global.css";
import Billboard from "../assets/images/Billboard.png";

const Design = () => {
	const webServices = [
		{
			title: "Brand Identity & Logo Design",
			description:
				"Logos, colors, typography, and brand guidelines for a consistent visual identity.",
		},
		{
			title: "Social Media Design & Templates",
			description:
				"Custom posts, stories, and graphics tailored for consistent branding across platforms.",
		},
		{
			title: "Print Design & Marketing Materials",
			description:
				"Business cards, flyers, posters, and other print materials that leave an impression.",
		},
		{
			title: "UI/UX Design & Prototyping",
			description:
				"User-focused web and app design with wireframes and interactive prototypes.",
		},
		{
			title: "Packaging & Product Design",
			description:
				"Packaging, labels, and displays that grab attention and reflect your brand.",
		},
		{
			title: "Presentation & Document Design",
			description:
				"Slide decks, reports, and proposals designed for clarity and visual impact.",
		},
	];
	return (
		<section id="DesignSection" className="section">
			<div className="section-image">
				<img
					src={Billboard}
					alt="Sticky landscape"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</div>
			<div className="section-words">
				<h2>Design Services</h2>
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

export default Design;
