import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/global.css";

const SUPABASE_URL =
	"https://mmdfoamzwrlzlukgubaf.supabase.co/storage/v1/object/public/photos";

const mediaServices = [
	{
		title: {
			en: "Promotional & Explainer Videos",
			es: "Videos Promocionales y Explicativos",
		},
		description: {
			en: "Brand stories, product demos, and service overviews that turn viewers into customers.",
			es: "Historias de marca, demostraciones de productos y resúmenes de servicios que convierten espectadores en clientes.",
		},
	},
	{
		title: {
			en: "Social Media Video Content",
			es: "Contenido de Video para Redes Sociales",
		},
		description: {
			en: "Reels, TikToks, and short-form videos optimized for engagement and reach.",
			es: "Reels, TikToks y videos cortos optimizados para alcance y engagement.",
		},
	},
	{
		title: {
			en: "Video Editing & Post-Production",
			es: "Edición de Video y Postproducción",
		},
		description: {
			en: "Color grading, sound design, VFX, and edits for all types of video content.",
			es: "Corrección de color, diseño de sonido, VFX y edición para todo tipo de contenido de video.",
		},
	},
	{
		title: {
			en: "Commercial & Product Photography",
			es: "Fotografía Comercial y de Producto",
		},
		description: {
			en: "Clean product shots, headshots, and business portraits with pro lighting and editing.",
			es: "Fotos de producto, retratos empresariales y headshots con iluminación y edición profesional.",
		},
	},
	{
		title: { en: "Event Photography", es: "Fotografía de Eventos" },
		description: {
			en: "Full coverage of corporate events and promos, with optional same-day delivery.",
			es: "Cobertura completa de eventos corporativos y promociones, con entrega el mismo día opcional.",
		},
	},
	{
		title: {
			en: "Photo Editing & Retouching",
			es: "Edición y Retoque Fotográfico",
		},
		description: {
			en: "Image cleanup, background removal, color correction, and advanced retouching.",
			es: "Limpieza de imágenes, eliminación de fondos, corrección de color y retoque avanzado.",
		},
	},
	{
		title: { en: "Real Estate Photography", es: "Fotografía Inmobiliaria" },
		description: {
			en: "Property photos, drone shots, and virtual tours for real estate and construction.",
			es: "Fotos de propiedades, tomas con dron y recorridos virtuales para bienes raíces y construcción.",
		},
	},
];

const PhotoVideo = () => {
	const { language } = useLanguage();
	const lang = language === "es" ? "es" : "en";
	return (
		<section id="PhotoVideoSection" className="section">
			<div className="section-image">
				<img
					src={`${SUPABASE_URL}/gifs/cam.gif`}
					alt="Sticky landscape"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</div>
			<div className="section-words">
				<h2>
					{lang === "es" ? "Servicios de Foto/Video" : "Photo/Video Services"}
				</h2>
				<ul className="section-services-list">
					{mediaServices.map((service, index) => (
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

export default PhotoVideo;
