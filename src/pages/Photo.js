import React from "react";
import "../styles/global.css";
import PhotoCamera from "../assets/images/camera.png";

const Photo = () => {
	const webServices = [
		{
			title: "Commercial & Product Photography",
			description:
				"Clean product shots, headshots, and business portraits with pro lighting and editing.",
		},
		{
			title: "Event Photography",
			description:
				"Full coverage of corporate events and promos, with optional same-day delivery.",
		},
		{
			title: "Photo Editing & Retouching",
			description:
				"Image cleanup, background removal, color correction, and advanced retouching.",
		},
		{
			title: "Stock Photography",
			description:
				"Custom brand-aligned images for websites, ads, and social media.",
		},
		{
			title: "Real Estate Photography",
			description:
				"Property photos, drone shots, and virtual tours for real estate and construction.",
		},
	];
	return (
		<section id="PhotoSection" className="section">
			<div className="section-image">
				<img
					src={PhotoCamera}
					alt="Sticky landscape"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</div>
			<div className="section-words">
				<h2>Photo Services</h2>
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

export default Photo;
