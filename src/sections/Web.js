import React from "react";
import "../styles/global.css";
import Computer from '../assets/gifs/computer.gif';

const webServices = [
    {
        title: { en: "Web Hosting & Maintenance", es: "Alojamiento y Mantenimiento Web" },
        description: {
            en: "Server monitoring, automatic backups, SSL certificates, and regular security patches.",
            es: "Monitoreo de servidores, copias de seguridad automáticas, certificados SSL y actualizaciones de seguridad regulares.",
        },
    },
    {
        title: { en: "SEO & Analytics", es: "SEO y Analítica" },
        description: {
            en: "Keyword research, on-page optimization, Google Analytics setup, and monthly performance reports.",
            es: "Investigación de palabras clave, optimización on-page, configuración de Google Analytics e informes mensuales de rendimiento.",
        },
    },
    {
        title: { en: "E-commerce", es: "E-commerce" },
        description: {
            en: "Full online stores with secure payment processing, inventory management, and customer accounts.",
            es: "Tiendas en línea completas con pagos seguros, gestión de inventario y cuentas de clientes.",
        },
    },
    {
        title: { en: "Blog Development & CMS", es: "Desarrollo de Blogs y CMS" },
        description: {
            en: "Custom blog platforms and made with headless content management systems.",
            es: "Plataformas de blogs personalizadas y sistemas de gestión de contenido headless.",
        },
    },
    {
        title: { en: "API Integration Services", es: "Servicios de Integración de API" },
        description: {
            en: "Seamless third-party integrations and database connections.",
            es: "Integraciones de terceros y conexiones a bases de datos sin problemas.",
        },
    },
    {
        title: { en: "Membership & Subscription Platforms", es: "Plataformas de Membresía y Suscripción" },
        description: {
            en: "Recurring billing systems, member-only content areas, subscription management, and automated payment processing.",
            es: "Sistemas de facturación recurrente, áreas de contenido solo para miembros, gestión de suscripciones y procesamiento de pagos automatizado.",
        },
    },
    {
        title: { en: "Social Platform Development", es: "Desarrollo de Plataformas Sociales" },
        description: {
            en: "Community websites, user profiles, messaging systems, and social networking features.",
            es: "Sitios web comunitarios, perfiles de usuario, sistemas de mensajería y funciones de redes sociales.",
        },
    },
];

const Web = ({ language }) => {
    const lang = language === "es" ? "es" : "en";
    return (
        <section id="WebSection" className="section">
            <div className="section-image">
                <img
                    src={Computer}
                    alt="Sticky landscape"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="section-words">
                <h2>{lang === "es" ? "Servicios de Web" : "Web Services"}</h2>
                <ul className="section-services-list">
                    {webServices.map((service, index) => (
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

export default Web;