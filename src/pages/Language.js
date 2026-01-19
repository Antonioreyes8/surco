import React from "react";
import "../styles/language.css";

const Language = ({ setLanguage }) => (
    <div
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 9999,
        }}
    >
        <h2 className="Language-Header">
            Choose your language / Elige tu idioma
        </h2>
        <div style={{ display: "flex", gap: "2rem" }}>
            <button className="LanguageButton" onClick={() => setLanguage("en")}>
                English
            </button>
            <button className="LanguageButton" onClick={() => setLanguage("es")}>
                Español
            </button>
        </div>
    </div>
);

export default Language;