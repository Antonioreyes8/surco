import React from "react";
import Sidebar from "../sections/Sidebar";
import Web from "../sections/Web";
import Design from "../sections/Design";
import PhotoVideo from "../sections/PhotoVideo";
import Prints from "../sections/Prints";
import About from "../sections/About"
import Promos from "../sections/Promos";
import Footer from "../sections/Footer";


const Home = ({ language }) => {
	return (
		<div>
			<Sidebar language={language}/>
			<div className="push-content-right">
                <About language={language}/>
				<Web language={language}/>
				<Design language={language}/>
				<PhotoVideo language={language}/>
				<Prints language={language}/>
                <Promos language={language}/>
				<Footer language={language}/>
			</div>
		</div>
	);
};

export default Home;
