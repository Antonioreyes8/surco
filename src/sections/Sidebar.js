import React from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import "../styles/global.css";
import SurcoLogo from "../assets/images/SurcoLogo.png";

// Add bilingual labels for navigation
const navigationLabels = {
    en: {
        AboutSection: "About us",
        WebSection: "Web",
        DesignSection: "Design",
        PhotoVideoSection: "Photo/Video",
        PrintsSection: "Prints",
        PromosSection: "Work with us",
    },
    es: {
        AboutSection: "Sobre nosotros",
        WebSection: "Web",
        DesignSection: "Diseño",
        PhotoVideoSection: "Foto/Video",
        PrintsSection: "Impresión",
        PromosSection: "Trabaja con nosotros",
    },
};

const Sidebar = ({ language }) => {
    const sectionIds = [
        "AboutSection", // About
        "WebSection", // Web
        "DesignSection", // Design
        "PhotoVideoSection", // Photo
        "PrintsSection", // Prints
        "PromosSection", // Promos
    ];

    // Track the currently active section based on scroll position
    const activeSection = useActiveSection(sectionIds);

    const lang = language === "es" ? "es" : "en";

    // Define the navigation links using the bilingual labels
    const navigationItems = sectionIds.map((id) => ({
        id,
        label: navigationLabels[lang][id],
    }));

    return (
        <div className="sidebar">
            <img src={SurcoLogo} alt="Surco logo" className="sidebar-img" />

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
                        <button
                            onClick={() => {
                                const target = document.getElementById(item.id);
                                if (!target) return;

                                if (window.innerWidth <= 768) {
                                    // Mobile: scroll with offset to account for fixed nav
                                    const offset = -100; // ← adjust to match your nav height
                                    const y =
                                        target.getBoundingClientRect().top +
                                        window.pageYOffset +
                                        offset;

                                    window.scrollTo({
                                        top: y,
                                        behavior: "smooth",
                                    });
                                } else {
                                    // Desktop: scroll to center of viewport
                                    target.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                    });
                                }
                            }}
                            style={{
                                background: "none",
                                border: "none",
                                padding: 0,
                                fontFamily: "Delight, sans-serif",
                                fontWeight: activeSection === item.id ? 800 : 800,
                                fontSize: activeSection === item.id ? "1.1em" : "1em",
                                color: activeSection === item.id ? "white" : "#666",
                                cursor: "pointer",
                                textAlign: "left",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;