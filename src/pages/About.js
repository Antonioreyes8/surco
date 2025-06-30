import React from "react";

const About = () => {
	return (
		<section
			id="AboutSection" 
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					padding: "0",
				}}
			>
				<div className="about">
					<h2
						style={{
							fontFamily: "Delight-Bold, sans-serif",
							fontSize: "2em",
						}}
					>
						Who are we ?
					</h2>

					<div
						style={{
							fontFamily: "Delight-ExtraLight, sans-serif",
							wordSpacing: "2px",
							lineHeight: "1.6",
						}}
					>
						<p>
							Surco is a creative studio built from the ground up, shaped by its
							roots, and driven by culture. We are a small, multidisciplinary
							team specializing in design, development, and creative strategy.
							More than just delivering clean visuals or websites that work, we
							focus on translating your core message into meaningful
							experiences. We believe design is not just how something looks,
							but how it feels, connects, and lasts.
						</p>

						<p>
							In a marketplace dominated by a few, we choose to work with the
							many—local entrepreneurs, underrepresented voices, and emerging
							brands who deserve to be seen. Our work centers on authenticity,
							identity, and clarity. We help businesses not just exist, but
							resonate—with stories people remember, strategies they can grow
							from, and design systems that reflect who they really are.
						</p>

						<p>
							Surco's are tears or marks in the ground where seads are spread
							and plants can grow. We see every project as an opportunity to
							build something meaningful. Whether you're planting your first
							seed or refining something long-established, we’re here to nurture
							your vision and help it take root. Let’s create something that
							leaves a mark—on your audience, on your community, and on the
							world.
						</p>
					</div>
				</div>
			</div>
			{/* <Profiles /> */}
		</section>
	);
};

export default About;
