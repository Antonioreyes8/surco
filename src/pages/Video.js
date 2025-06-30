import React from "react";
import "../styles/global.css";
import VideoCamera from "../assets/images/videocamera.png";

const Video = () => {
	const webServices = [
		{
			title: "Promotional & Explainer Videos",
			description: "Engaging company introductions, product demonstrations, service explanations, and brand storytelling videos that convert viewers into customers.",
		},
		{
			title: "Social Media Video Content",
			description:
				"Short-form videos, Instagram reels, TikTok content, and platform-optimized video content designed to increase engagement and reach.",
		},
		{
			title: "Corporate & Training Videos",
			description: "Employee training materials, internal communications, corporate announcements, and educational content for businesses and organizations.",
		},
		{
			title: "Event Videography & Live Streaming",
			description:
				"Professional event coverage, live streaming services, conference recording, and real-time social media content creation.",
		},
		{
			title: "Motion Graphics & Animation",
			description: "Animated logos, kinetic typography, explainer animations, and dynamic infographics that bring your brand to life with movement",
		},
		{
			title: "Video Editing & Post-Production",
			description: "Complete post-production services including color grading, sound design, visual effects, and multi-camera editing for all video formats.",
		},
	];

	return (
		<section id="VideoSection" className="section">
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
					src={VideoCamera}
					alt="Sticky landscape"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</div>
			<div className="section-words">
				<h2>Video Services</h2>
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

export default Video;
