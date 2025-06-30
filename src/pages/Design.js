import React from "react";
import "../styles/global.css";
import Billboard from "../assets/images/Billboard.png";

const Design = () => {
	const webServices = [
		{
			title: "Brand Identity & Logo Design",
			description:
				"Complete visual identity systems including logo design, color palettes, typography selection, and comprehensive brand guidelines for consistent messaging.",
		},
		{
			title: "Social Media Design & Templates",
			description:
				"Coherent & Custom Instagram posts, story templates, Facebook covers, and LinkedIn graphics that maintain brand consistency across all social platforms.",
		},
		{
			title: "Print Design & Marketing Materials",
			description:
				"Professional business cards, brochures, flyers, posters, and promotional materials designed to make a lasting impression on your audience.",
		},
		{
			title: "UI/UX Design & Prototyping",
			description:
				"User-centered interface design with wireframing, prototyping, and user experience optimization for websites and mobile applications.",
		},
		{
			title: "Packaging & Product Design",
			description:
				"Eye-catching product packaging, labels, and retail displays that stand out on shelves and communicate your brand values effectively.",
		},
		{
			title: "Presentation & Document Design",
			description:
				"Professional slide decks, reports, proposals, and corporate documents that communicate your message with visual impact and clarity.",
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
