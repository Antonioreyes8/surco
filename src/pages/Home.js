import React from "react";
import Sidebar from "../components/Sidebar";
import Web from "./Web";
import Design from "./Design";
import Photo from "./Photo";
import Video from "./Video";
import Prints from "./Prints";
import About from "./About"
import Work from "./Work";

const Home = () => {
	return (
		<div>
			<Sidebar />
			<div style={{ marginLeft: "250px" }}>
                <About />
				<Web />
				<Design />
				<Photo />
				<Video />
				<Prints />
                <Work />
			</div>
		</div>
	);
};

export default Home;
