import React from "react";

import { useLanguage } from "../hooks/useLanguage";

const StoreItems = () => {
	const { language } = useLanguage();

	return (
		<div className="store-items-container">
			<h2>{language === "es" ? "Productos" : "Products"}</h2>
			<div className="web-store-items">
				<div className="item">
					<h3>
						{language === "es"
							? "Alojamiento y Mantenimiento Web"
							: "Web Hosting & Maintenance"}
					</h3>
					<p>
						{language === "es"
							? "Monitoreo de servidores, copias de seguridad automáticas, certificados SSL y actualizaciones de seguridad regulares."
							: "Server monitoring, automatic backups, SSL certificates, and regular security patches."}
					</p>
					<span>$150 – $500/month</span>
				</div>
				<div className="item">
					<h3>{language === "es" ? "SEO y Analítica" : "SEO & Analytics"}</h3>
					<p>
						{language === "es"
							? "Investigación de palabras clave, optimización on-page, configuración de Google Analytics e informes mensuales de rendimiento."
							: "Keyword research, on-page optimization, Google Analytics setup, and monthly performance reports."}
					</p>
					<span>$1,000 – $2,500/month</span>
				</div>
				<div className="item">
					<h3>{language === "es" ? "E-commerce" : "E-commerce"}</h3>
					<p>
						{language === "es"
							? "Tiendas en línea completas con pagos seguros, gestión de inventario y cuentas de clientes."
							: "Full online stores with secure payment processing, inventory management, and customer accounts."}
					</p>
					<span>$5,000 – $12,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Desarrollo de Blogs y CMS"
							: "Blog Development & CMS"}
					</h3>
					<p>
						{language === "es"
							? "Plataformas de blogs personalizadas y sistemas de gestión de contenido headless."
							: "Custom blog platforms and made with headless content management systems."}
					</p>
					<span>$1,000 – $4,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Servicios de Integración de API"
							: "API Integration Services"}
					</h3>
					<p>
						{language === "es"
							? "Integraciones de terceros y conexiones a bases de datos sin problemas."
							: "Seamless third-party integrations and database connections."}
					</p>
					<span>$2,000 – $5,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Plataformas de Membresía y Suscripción"
							: "Membership & Subscription Platforms"}
					</h3>
					<p>
						{language === "es"
							? "Sistemas de facturación recurrente, áreas de contenido solo para miembros, gestión de suscripciones y procesamiento de pagos automatizado."
							: "Recurring billing systems, member-only content areas, subscription management, and automated payment processing."}
					</p>
					<span>$2,000 - $7,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Desarrollo de Plataformas Sociales"
							: "Social Platform Development"}
					</h3>
					<p>
						{language === "es"
							? "Sitios web comunitarios, perfiles de usuario, sistemas de mensajería y funciones de redes sociales."
							: "Community websites, user profiles, messaging systems, and social networking features."}
					</p>
					<span>$3,500 - $15,000</span>
				</div>
			</div>
			<div className="design-store-items">
				<div className="item">
					<h3>
						{language === "es"
							? "Identidad de Marca y Diseño de Logotipo"
							: "Brand Identity & Logo Design"}
					</h3>
					<p>
						{language === "es"
							? "Logotipos, colores, tipografía y guías de marca para una identidad visual coherente."
							: "Logos, colors, typography, and brand guidelines for a consistent visual identity."}
					</p>
					<span>$500 – $2,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Diseño y Plantillas para Redes Sociales"
							: "Social Media Design & Templates"}
					</h3>
					<p>
						{language === "es"
							? "Publicaciones, historias y gráficos personalizados para una marca coherente en todas las plataformas."
							: "Custom posts, stories, and graphics tailored for consistent branding across platforms."}
					</p>
					<span>$1,000 – $2,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Diseño Impreso y Materiales de Marketing"
							: "Print Design & Marketing Materials"}
					</h3>
					<p>
						{language === "es"
							? "Tarjetas de presentación, volantes, carteles y otros materiales impresos que dejan huella."
							: "Business cards, flyers, posters, and other print materials that leave an impression."}
					</p>
					<span>$300 – $800</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Diseño UI/UX y Prototipado"
							: "UI/UX Design & Prototyping"}
					</h3>
					<p>
						{language === "es"
							? "Diseño web y de apps centrado en el usuario con wireframes y prototipos interactivos."
							: "User-focused web and app design with wireframes and interactive prototypes."}
					</p>
					<span>$500 – $2,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Diseño de Empaques y Productos"
							: "Packaging & Product Design"}
					</h3>
					<p>
						{language === "es"
							? "Empaques, etiquetas y exhibidores que llaman la atención y reflejan tu marca."
							: "Packaging, labels, and displays that grab attention and reflect your brand."}
					</p>
					<span>$500 – $2,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Diseño de Presentaciones y Documentos"
							: "Presentation & Document Design"}
					</h3>
					<p>
						{language === "es"
							? "Presentaciones, informes y propuestas diseñadas para claridad e impacto visual."
							: "Slide decks, reports, and proposals designed for clarity and visual impact."}
					</p>
					<span>$300– $1,000</span>
				</div>
			</div>
			<div className="photovideo-store-items">
				<div className="item">
					<h3>
						{language === "es"
							? "Videos Promocionales y Explicativos"
							: "Promotional & Explainer Videos"}
					</h3>
					<p>
						{language === "es"
							? "Historias de marca, demostraciones de productos y resúmenes de servicios que convierten espectadores en clientes."
							: "Brand stories, product demos, and service overviews that turn viewers into customers."}
					</p>
					<span>$300 - $1,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Contenido de Video para Redes Sociales"
							: "Social Media Video Content"}
					</h3>
					<p>
						{language === "es"
							? "Reels, TikToks y videos cortos optimizados para alcance y engagement."
							: "Reels, TikToks, and short-form videos optimized for engagement and reach."}
					</p>
					<span>$100 - $1,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Edición de Video y Postproducción"
							: "Video Editing & Post-Production"}
					</h3>
					<p>
						{language === "es"
							? "Corrección de color, diseño de sonido, VFX y edición para todo tipo de contenido de video."
							: "Color grading, sound design, VFX, and edits for all types of video content."}
					</p>
					<span>$200 - $1,500</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Fotografía Comercial y de Producto"
							: "Commercial & Product Photography"}
					</h3>
					<p>
						{language === "es"
							? "Fotos de producto, retratos empresariales y headshots con iluminación y edición profesional."
							: "Clean product shots, headshots, and business portraits with pro lighting and editing."}
					</p>
					<span>$300 - $2,500</span>
				</div>
				<div className="item">
					<h3>
						{language === "es" ? "Fotografía de Eventos" : "Event Photography"}
					</h3>
					<p>
						{language === "es"
							? "Cobertura completa de eventos corporativos y promociones, con entrega el mismo día opcional."
							: "Full coverage of corporate events and promos, with optional same-day delivery."}
					</p>
					<span>$400 - $1,500</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Edición y Retoque Fotográfico"
							: "Photo Editing & Retouching"}
					</h3>
					<p>
						{language === "es"
							? "Limpieza de imágenes, eliminación de fondos, corrección de color y retoque avanzado."
							: "Image cleanup, background removal, color correction, and advanced retouching."}
					</p>
					<span>$30 - $100 per image</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Fotografía Inmobiliaria"
							: "Real Estate Photography"}
					</h3>
					<p>
						{language === "es"
							? "Fotos de propiedades, tomas con dron y recorridos virtuales para bienes raíces y construcción."
							: "Property photos, drone shots, and virtual tours for real estate and construction."}
					</p>
					<span>$200 - $1,500</span>
				</div>
			</div>
			<div className="prints-store-items">
				<div className="item">
					<h3>
						{language === "es"
							? "Materiales de Marketing y Publicidad"
							: "Marketing Materials & Collateral"}
					</h3>
					<p>
						{language === "es"
							? "Folletos, volantes, tarjetas de presentación y membretes que reflejan claramente tu marca."
							: "Brochures, flyers, business cards, and letterheads that reflect your brand clearly."}
					</p>
					<span>$150 – $1,500</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Gráficos de Gran Formato"
							: "Large Format"}
					</h3>
					<p>
						{language === "es"
							? "Banners, carteles y exhibidores diseñados para destacar en eventos y exposiciones."
							: "Banners, posters, and displays designed to draw attention at events and exhibits."}
					</p>
					<span>$300 – $2,500</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Mercancía Personalizada y Artículos Promocionales"
							: "Custom Merchandise & Promotional Items"}
					</h3>
					<p>
						{language === "es"
							? "Ropa, regalos y artículos promocionales personalizados que mantienen tu marca presente."
							: "Branded apparel, gifts, and merch that keep your brand top-of-mind."}
					</p>
					<span>$200 – $2,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es" ? "Señalización y Gráficos Ambientales" : "Signage & Environmental Graphics"}
					</h3>
					<p>
						{language === "es"
							? "Señalización interior/exterior, orientación y gráficos que mejoran los espacios físicos."
							: "Indoor/outdoor signage, wayfinding, and graphics that enhance physical spaces."}
					</p>
					<span>$400 – $5,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Diseño de Publicaciones y Libros"
							: "Publication & Book Design"}
					</h3>
					<p>
						{language === "es"
							? "Revistas, libros, catálogos e informes con diseños limpios y profesionales."
							: "Magazines, books, catalogs, and reports with clean, professional layouts."}
					</p>
					<span>$750 – $5,000</span>
				</div>
				<div className="item">
					<h3>
						{language === "es"
							? "Diseño de Empaques y Etiquetas"
							: "Packaging & Label Design"}
					</h3>
					<p>
						{language === "es"
							? "Empaques y etiquetas de productos que protegen y promueven tu marca."
							: "Product packaging and labels that protect and promote your brand."}
					</p>
					<span>$500 – $4,000</span>
				</div>
			</div>
		</div>
	);
};
export default StoreItems;
