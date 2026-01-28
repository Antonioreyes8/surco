import React from "react";

const SUPABASE_URL =
	"https://mmdfoamzwrlzlukgubaf.supabase.co/storage/v1/object/public/photos";

const About = ({ language }) => {
	return (
		<section id="AboutSection" className="AboutSection">
			{/* YOUR IDEA */}
			<div className="about-row">
				<span className="about-header">
					{language === "es" ? "TU IDEA" : "YOUR IDEA"}
				</span>

				<div className="about-icons">
					<div className="about-square-icon">
						<img
							src={`${SUPABASE_URL}/gifs/dreambuilt.gif`}
							alt="Dreambuilt website animation"
						/>
					</div>
					<div className="about-square-icon">
						<img
							src={`${SUPABASE_URL}/gifs/momos.gif`}
							alt="Momos website animation"
						/>
					</div>
				</div>
			</div>

			{/* YOUR VISION */}
			<div className="about-row">
				<span className="about-header">
					{language === "es" ? "TU VISION" : "YOUR VISION"}
				</span>

				<div className="about-icons">
					<div className="about-circle-icon">
						<img
							src={`${SUPABASE_URL}/gifs/cowboy.gif`}
							alt="Cowboy animation"
						/>
					</div>
					<div className="about-circle-icon">
						<img
							src={`${SUPABASE_URL}/gifs/goldenratio.gif`}
							alt="Golden Ratio animation"
						/>
					</div>
					<div className="about-circle-icon">
						<img src={`${SUPABASE_URL}/gifs/vela.gif`} alt="Vela animation" />
					</div>
				</div>
			</div>

			{/* YOUR BRAND */}
			<div className="about-row">
				<span className="about-header">
					{language === "es" ? "TU PROPOSITO" : "YOUR PURPOSE"}
				</span>
				<div className="about-icons">
					<div className="about-square-icon">
						<img src={`${SUPABASE_URL}/gifs/party.gif`} alt="Party Gif" />
					</div>
				</div>
			</div>

			{/* AND WE DEVELOP */}
			<div className="about-row">
				<span className="about-header">
					{language === "es" ? "Y NOSOTROS" : "AND WE"}

					<div className="about-square-icon-wordflash">
						<img
							src={
								language === "es"
									? `${SUPABASE_URL}/gifs/wordflashes.gif`
									: `${SUPABASE_URL}/gifs/wordflashen.gif`
							}
							alt="Word Flash"
							lang={language}
						/>
					</div>
				</span>
			</div>

			<div
				style={{
					fontFamily: "Delight, sans-serif",
					fontWeight: 400,
					wordSpacing: "2px",
					lineHeight: "1.6",
				}}
			>
				<p>
					{language === "es"
						? "Surco es un estudio creativo construido desde cero, moldeado por sus raíces e impulsado por la cultura. Somos un equipo especializado en diseño, desarrollo y estrategia creativa. Creemos que el diseño no es solo cómo algo se ve, sino cómo se siente, conecta y perdura."
						: "Surco is a creative studio built from the ground up, shaped by its roots, and driven by culture. We are a team specializing in design, development, and creative strategy, approaching our work through a lens of world-building. We believe design is not just how something looks, but how it feels, connects, and lasts."}
				</p>

				<p>
					{language === "es"
						? "En un mercado dominado por unos pocos, elegimos trabajar con los muchos: emprendedores locales, voces subrepresentadas y marcas emergentes que merecen ser vistas. Nuestro trabajo se centra en la autenticidad, la identidad y la claridad. Ayudamos a las empresas no solo a existir, sino a resonar: con historias que la gente recuerda, estrategias que impulsan su crecimiento y sistemas de diseño que reflejan quiénes son realmente."
						: "In a marketplace dominated by a few, we choose to work with the many—local entrepreneurs, underrepresented voices, and emerging brands who deserve to be seen. Our work centers on authenticity, identity, and clarity. We help businesses not just exist, but resonate—with stories people remember, strategies they can grow from, and design systems that reflect who they really are."}
				</p>
			</div>
		</section>
	);
};

export default About;
