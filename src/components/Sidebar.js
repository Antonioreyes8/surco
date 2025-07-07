import React from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import "../styles/global.css";
import SurcoLogo from "../assets/images/SurcoLogo.png";

const Sidebar = () => {
	const sectionIds = [
		"AboutSection", // About
		"WebSection", // Web
		"DesignSection", // Design
		"PhotoSection", // Photo
		"VideoSection", // Video
		"PrintsSection", // Prints
		"WorkWithUsSection", // Work with us
	];

	// Track the currently active section based on scroll position
	const activeSection = useActiveSection(sectionIds);

	// Define the navigation links
	const navigationItems = [
		{ id: "AboutSection", label: "About" },
		{ id: "WebSection", label: "Web" },
		{ id: "DesignSection", label: "Design" },
		{ id: "PhotoSection", label: "Photo" },
		{ id: "VideoSection", label: "Video" },
		{ id: "PrintsSection", label: "Prints" },
		{ id: "WorkWithUsSection", label: "Work with us" },
	];

	return (
		<div className="sidebar">
			<img src={SurcoLogo} alt="Surco logo"  className="sidebar-img" />

			{/* Navigation list */}
			<ul
				style={{
					listStyle: "none",
					padding: 0,
				}}
			>
				{/* Loop through each section and create a link */}
				{navigationItems.map((item) => (
					<li key={item.id} className="sidebar-words">
						<a
							href={`#${item.id}`}
							style={{
								fontFamily: "Delight, sans-serif",
								textDecoration: "none",
								fontWeight: activeSection === item.id ? 800 : 800,
								fontSize: activeSection === item.id ? "1.1em" : "1em",
								color: activeSection === item.id ? "white" : "#666",
								transition: "all 0.3s ease",
							}}
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
