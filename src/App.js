import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import "./styles/global.css";

const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
