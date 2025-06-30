import React from 'react'
import EdgarWhite from '../assets/images/EdgarWhite.png';
import JorgeWhite from '../assets/images/JorgeWhite.png';
import LeoWhite from '../assets/images/LeoWhite.png';
import ToniWhite from '../assets/images/ToniWhite.png';
import UriWhite from '../assets/images/UriWhite.png';


const Profiles = () => {
  return (
    <div
			style={{
				//border: "solid white 1px", //only use to see border
				height: "50svh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "40px",
			}}
		>
			<div className="profile">
				<h2>
					Jorge
				</h2>
                <img src={JorgeWhite} alt="Profile of Jorge" />
			</div>
			<div className="profile">
				<h2>
					Toni
				</h2>
                <img src={ToniWhite} alt="Profile of Tony" />
			</div>
			<div className="profile">
				<h2>
					Edgar
				</h2>
                <img src={EdgarWhite} alt="Profile of Edgar" />
			</div>
            			<div className="profile">
				<h2>
					Leo
				</h2>
                <img src={LeoWhite} alt="Profile of Leo" />
			</div>
            			<div className="profile">
				<h2>
					Uriel
				</h2>
                <img src={UriWhite} alt="Profile of Uriel" />
			</div>
		</div>
  )
}

export default Profiles
