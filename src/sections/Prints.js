import React from "react";
import "../styles/global.css";

const SUPABASE_URL =
	"https://mmdfoamzwrlzlukgubaf.supabase.co/storage/v1/object/public/photos";

const printServices = [
	{
		title: {
			en: "Marketing Materials & Collateral",
			es: "Materiales de Marketing y Publicidad",
		},
		description: {
			en: "Brochures, flyers, business cards, and letterheads that reflect your brand clearly.",
			es: "Folletos, volantes, tarjetas de presentación y membretes que reflejan claramente tu marca.",
		},
	},
	{
		title: { en: "Large Format", es: "Gráficos de Gran Formato" },
		description: {
			en: "Banners, posters, and displays designed to draw attention at events and exhibits.",
			es: "Banners, carteles y exhibidores diseñados para destacar en eventos y exposiciones.",
		},
	},
	{
		title: {
			en: "Custom Merchandise & Promotional Items",
			es: "Mercancía Personalizada y Artículos Promocionales",
		},
		description: {
			en: "Branded apparel, gifts, and merch that keep your brand top-of-mind.",
			es: "Ropa, regalos y artículos promocionales personalizados que mantienen tu marca presente.",
		},
	},
	{
		title: {
			en: "Signage & Environmental Graphics",
			es: "Señalización y Gráficos Ambientales",
		},
		description: {
			en: "Indoor/outdoor signage, wayfinding, and graphics that enhance physical spaces.",
			es: "Señalización interior/exterior, orientación y gráficos que mejoran los espacios físicos.",
		},
	},
	{
		title: {
			en: "Publication & Book Design",
			es: "Diseño de Publicaciones y Libros",
		},
		description: {
			en: "Magazines, books, catalogs, and reports with clean, professional layouts.",
			es: "Revistas, libros, catálogos e informes con diseños limpios y profesionales.",
		},
	},
	{
		title: {
			en: "Packaging & Label Design",
			es: "Diseño de Empaques y Etiquetas",
		},
		description: {
			en: "Product packaging and labels that protect and promote your brand.",
			es: "Empaques y etiquetas de productos que protegen y promueven tu marca.",
		},
	},
];

const Prints = ({ language }) => {
	const lang = language === "es" ? "es" : "en";
	return (
		<section id="PrintsSection" className="section">
			<div className="section-image">
				<img
					src={`${SUPABASE_URL}/gifs/prints.gif`}
					alt="Sticky landscape"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</div>
			<div className="section-words">
				<h2>{lang === "es" ? "Servicios de Impresión" : "Print Services"}</h2>
				<ul className="section-services-list">
					{printServices.map((service, index) => (
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

export default Prints;
