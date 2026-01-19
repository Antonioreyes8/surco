import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Language from "./pages/Language";
import "./styles/global.css";
import "./styles/sidebar.css";
import "./styles/about.css";
import "./styles/promos.css";
import "./styles/intro.css";
import "./styles/footer.css";
import "./styles/language.css";
import introVideo from "./assets/videos/intro.mp4";

const App = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [showVideo, setShowVideo] = useState(true);
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        if (window.innerWidth < 700) {
            setShowVideo(false);
            setShowIntro(false);
            return;
        }
        const timer = setTimeout(() => setFadeOut(true), 3000);
        const hideTimer = setTimeout(() => setShowIntro(false), 4200);
        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    const handleVideoEnd = () => {
        setFadeOut(true);
        setTimeout(() => setShowIntro(false), 1200);
    };

    return (
        <>
            {showIntro && showVideo ? (
                <div className={`intro-container${fadeOut ? " fade-out" : ""}`}>
                    <video
                        className="intro-video"
                        src={introVideo}
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        disablePictureInPicture
                        onEnded={handleVideoEnd}
                    />
                </div>
            ) : language === null ? (
                <Language setLanguage={setLanguage} />
            ) : (
                <Home language={language} />
            )}
        </>
    );
};

export default App;