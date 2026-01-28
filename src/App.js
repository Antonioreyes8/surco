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
        // 1. Check mobile immediately
        if (window.innerWidth < 700) {
            setShowVideo(false);
            setShowIntro(false);
        }
    }, []);

    const handleVideoEnd = () => {
        // 2. Start fade out ONLY when video actually finishes
        setFadeOut(true);
        // Wait for the CSS transition to finish before unmounting
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
                        // Important: Ensure the video is ready
                        onCanPlayThrough={() => console.log("Video ready")} 
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