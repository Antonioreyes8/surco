import React from "react";
import "../styles/global.css";
import PhotoCamera from "../assets/images/camera.png";

const Photo = () => {
		const webServices = [
		{
			title: "Commercial & Product Photography",
			description: "High-quality product shots, corporate headshots, and business portraits with professional lighting and post-production editing services.",
		},
		{
			title: "Event Photography",
			description:
				"Comprehensive coverage of conferences, corporate events, team building activities, and promotional events with same-day delivery options.",
		},
		{
			title: "Photo Editing & Retouching",
			description: "Professional image enhancement, background removal, color correction, and advanced retouching services for all types of photography.",
		},
		{
			title: "Stock Photography",
			description:
				"Custom stock images for marketing materials, website content, and social media that perfectly match your brand aesthetic and messaging.",
		},
		{
			title: "Real Estate Photography",
			description: "Property photography, virtual tours, drone photography, and architectural documentation for real estate professionals and construction companies.",
		},
	];
	return (
		<section id="PhotoSection" className="section">
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
