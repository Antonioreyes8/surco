import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/global.css";

const SUPABASE_URL =
	"https://mmdfoamzwrlzlukgubaf.supabase.co/storage/v1/object/public/photos";

const DesignServices = [
	{
		title: {
			en: "Brand Identity & Logo Design",
			es: "Identidad de Marca y Diseño de Logotipo",
		},
		description: {
			en: "Logos, colors, typography, and brand guidelines for a consistent visual identity.",
			es: "Logotipos, colores, tipografía y guías de marca para una identidad visual coherente.",
		},
	},
	{
		title: {
			en: "Social Media Design & Templates",
			es: "Diseño y Plantillas para Redes Sociales",
		},
		description: {
			en: "Custom posts, stories, and graphics tailored for consistent branding across platforms.",
			es: "Publicaciones, historias y gráficos personalizados para una marca coherente en todas las plataformas.",
		},
	},
	{
		title: {
			en: "Print Design & Marketing Materials",
			es: "Diseño Impreso y Materiales de Marketing",
		},
		description: {
			en: "Business cards, flyers, posters, and other print materials that leave an impression.",
			es: "Tarjetas de presentación, volantes, carteles y otros materiales impresos que dejan huella.",
		},
	},
	{
		title: {
			en: "UI/UX Design & Prototyping",
			es: "Diseño UI/UX y Prototipado",
		},
		description: {
			en: "User-focused web and app design with wireframes and interactive prototypes.",
			es: "Diseño web y de apps centrado en el usuario con wireframes y prototipos interactivos.",
		},
	},
	{
		title: {
			en: "Packaging & Product Design",
			es: "Diseño de Empaques y Productos",
		},
		description: {
			en: "Packaging, labels, and displays that grab attention and reflect your brand.",
			es: "Empaques, etiquetas y exhibidores que llaman la atención y reflejan tu marca.",
		},
	},
	{
		title: {
			en: "Presentation & Document Design",
			es: "Diseño de Presentaciones y Documentos",
		},
		description: {
			en: "Slide decks, reports, and proposals designed for clarity and visual impact.",
			es: "Presentaciones, informes y propuestas diseñadas para claridad e impacto visual.",
		},
	},
];

const Design = () => {
	const { language } = useLanguage();
	const lang = language === "es" ? "es" : "en";
	return (
		<section id="DesignSection" className="section">
			<div className="section-image">
				<img
					src={`${SUPABASE_URL}/gifs/billboard.gif`}
					alt="Sticky landscape"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</div>
			<div className="section-words">
				<h2>{lang === "es" ? "Servicios de Diseño" : "Design Services"}</h2>
				<ul className="section-services-list">
					{DesignServices.map((service, index) => (
						<li key={index}>
							<h3>{service.title[lang]}</h3>
							<p>{service.description[lang]}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Design;
