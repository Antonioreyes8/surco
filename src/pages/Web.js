import React from "react";
import "../styles/global.css";
import Computer from "../assets/images/computer.png";

const Web = () => {
	const webServices = [
		{
			title: "Web Hosting & Maintenance",
			description:
				"Server monitoring, automatic backups, SSL certificates, and regular security patches.",
		},
		{
			title: "SEO & Analytics",
			description:
				"Keyword research, on-page optimization, Google Analytics setup, and monthly performance reports.",
		},
		{
			title: "E-commerce",
			description:
				"Full online stores with secure payment processing, inventory management, and customer accounts.",
		},
		{
			title: "Blog Development & CMS",
			description:
				"Custom blog platforms and made with headless content management systems.",
		},
		{
			title: "API Integration Services",
			description:
				"Seamless third-party integrations and database connections.",
		},
		{
			title: "Membership & Subscription Platforms",
			description:
				"Recurring billing systems, member-only content areas, subscription management, and automated payment processing.",
		},
		{
			title: "Social Platform Development",
			description:
				"Community websites, user profiles, messaging systems, and social networking features.",
		},
	];

	return (
		<section id="WebSection" className="section">
			<div className="section-image">
				<img
					src={Computer}
					alt="Sticky landscape"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</div>
			<div className="section-words">
				<h2>Web Services</h2>
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

export default Web;
