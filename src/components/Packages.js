import React from "react";

const Packages = () => {
	return (
		<div
			style={{
				//border: "solid white 1px", //only use to see border
				height: "70svh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "40px",
			}}
		>
			<div className="card">
				<h1
					style={{
						textDecoration: "underline",
						fontSize: "3em"
					}}
				>
					Tier I
				</h1>
				<ul
					style={{
						listStyle: "none",
						padding: 0,
						fontFamily: "Delight-ExtraLight, sans-serif",
					}}
				>
					<li style={{ marginBottom: "0.75rem" }}>+ Low involvement</li>
					<li style={{ marginBottom: "0.75rem" }}>+ Basic support</li>
					<li style={{ marginBottom: "0.75rem" }}>+ Light communication</li>
					<li style={{ marginBottom: "0.75rem" }}>+ Flexible speed</li>
				</ul>
			</div>
			<div className="card">
				<h1
					style={{
						textDecoration: "underline",
						fontSize: "3em"
					}}
				>
					Tier II
				</h1>
				<ul
					style={{
						listStyle: "none",
						padding: 0,
						fontFamily: "Delight-ExtraLight, sans-serif",
					}}
				>
					<li style={{ marginBottom: "0.75rem" }}>+ Balanced involvement</li>
					<li style={{ marginBottom: "0.75rem" }}>+ Guided support</li>
					<li style={{ marginBottom: "0.75rem" }}>+ Moderate communication</li>
					<li style={{ marginBottom: "0.75rem" }}>+ Standard speed</li>
				</ul>
			</div>
			<div className="card">
				<h1
					style={{
						textDecoration: "underline",
						fontSize: "3em"
					}}
				>
					Tier III
				</h1>
				<ul
					style={{
						listStyle: "none",
						padding: 0,
						fontFamily: "Delight-ExtraLight, sans-serif",
					}}
				>
					<li style={{ marginBottom: "0.75rem" }}>+ Deep involvement</li>
					<li style={{ marginBottom: "0.75rem" }}>+ Immersive support</li>
					<li style={{ marginBottom: "0.75rem" }}>+ High communication</li>
					<li style={{ marginBottom: "0.75rem" }}>+ Priority speed</li>
				</ul>
			</div>
		</div>
	);
};

export default Packages;
