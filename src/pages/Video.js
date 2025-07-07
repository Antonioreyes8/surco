import React from "react";
import "../styles/global.css";
import VideoCamera from "../assets/images/videocamera.png";

const Video = () => {
	const webServices = [
		{
			title: "Promotional & Explainer Videos",
			description:
				"Brand stories, product demos, and service overviews that turn viewers into customers.",
		},
		{
			title: "Social Media Video Content",
			description:
				"Reels, TikToks, and short-form videos optimized for engagement and reach.",
		},
		{
			title: "Corporate & Training Videos",
			description:
				"Training, internal comms, and educational videos for teams and businesses.",
		},
		{
			title: "Event Videography & Live Streaming",
			description:
				"Live streams, event coverage, and on-the-spot content for social media.",
		},
		{
			title: "Motion Graphics & Animation",
			description:
				"Animated logos, typography, and infographics that bring your brand to life.",
		},
		{
			title: "Video Editing & Post-Production",
			description:
				"Color grading, sound design, VFX, and edits for all types of video content.",
		},
	];

	return (
		<section id="VideoSection" className="section">
			<div className="section-image">
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
