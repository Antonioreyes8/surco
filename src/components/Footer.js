import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: ".8rem",
				}}
			>
				<i className="fa-solid fa-envelope"></i>
				<p>team@surco.studio</p>
				<i className="fas fa-phone"></i>
				<p>+1 (972) 746 6608</p>
				<i className="fas fa-map-pin"></i>
				<p>Denton, Tx</p>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<i
					className="fa-brands fa-instagram fa-2xl"
					style={{ color: "#ffffff" }}
				></i>
				<i
					className="fa-brands fa-bluesky fa-2xl"
					style={{ color: "#ffffff" }}
				></i>
				<i
					className="fa-brands fa-facebook fa-2xl"
					style={{ color: "#ffffff" }}
				></i>
			</div>
			<div>
				<p>
					© 2025 SurCollective LLC. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
