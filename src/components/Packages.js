import React from "react";

const Packages = ({ language }) => {
    return (
        <div className="packages-section">
            <div
                className="promo"
                style={{
                    backgroundColor: "#B2D236",
                }}
            >
                <span
                    style={{
                        fontSize: "1.2em",
                        fontFamily: "Delight, sans-serif",
                        fontWeight: 700,
						lineHeight: "2em",
                    }}
                >
                    {language === "es" ? "250 Tarjetas de Presentación" : "250 Business Cards"}
                </span>
                <span>{language === "es" ? "Diseño + Impresión" : "Design + Print"}</span>
                <span>{language === "es" ? "16pt o 18pt" : "16pt or 18pt"}</span>
                <span>{language === "es" ? "Mate o Brillante" : "Matte or Glossy"}</span>
            </div>
            <div
                style={{
                    color: "white",
                    fontSize: "2em",
                    fontFamily: "Delight, sans-serif",
                    fontWeight: 700,
                }}
            >
                +
            </div>
            <div
                className="promo"
                style={{
                    backgroundColor: "#D34E43",
                    color: "white",
                }}
            >
                <span
                    style={{
                        fontSize: "1.2em",
                        fontFamily: "Delight, sans-serif",
                        fontWeight: 700,
                        lineHeight: "2em",
						
                    }}
                >
                    {language === "es" ? "Sitio Web de 1 Página" : "1 page Website"}
                </span>
                <span>{language === "es" ? "Mockup" : "Mockup"}</span>
                <span>{language === "es" ? "Hospedaje" : "Hosting"}</span>
                <span>{language === "es" ? "Soporte Web" : "Web support"}</span>
            </div>
            <div
                style={{
                    color: "white",
                    fontSize: "2em",
                    fontFamily: "Delight, sans-serif",
                    fontWeight: 700,
                }}
            >
                +
            </div>
            <div
                className="promo"
                style={{
                    backgroundColor: "#EAF0DF",
                }}
            >
                <span
                    style={{
                        fontSize: "1.2em",
                        fontFamily: "Delight, sans-serif",
                        fontWeight: 700,
                        lineHeight: "2em",
                    }}
                >
                    {language === "es" ? "50 Camisetas" : "50 T-Shirts"}
                </span>
                <span>{language === "es" ? "Tallas S-XL" : "Sizes S-XL"}</span>
                <span>{language === "es" ? "Diseños en pecho y espalda" : "Chest and Back designs"}</span>
                <span>{language === "es" ? "1 color" : "1 color"}</span>
            </div>
        </div>
    );
};

export default Packages;