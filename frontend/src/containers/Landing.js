import React from "react";
import { useHistory } from 'react-router-dom';
import NavRight from "../Header/NavRight";
import NavLeft from "../Header/NavLeft";
import logo from "../images/logo.jpeg";



const Landing = () =>{
    const history = useHistory();

    const handleSearchProperty = () => {
    history.push('/');
  };

  const handleExplore = () => {
    history.push('/contact');
    
  };

    
    return (
        <>
        <NavRight />
        <img src={logo} style= {{ width:'210px',padding:'10px'}}/>

        <div className="page-container">
          <div className="background-blur"></div>
            <div className="content-box">
            <div className="text-above-buttons">The Easiest Way to Find Your Ideal Flat</div>
            <div className="text">UBSCity: Find Flats Where Comfort Meets Convenience</div>

                 <div className="tabs">
                    <button className="explore-button" onClick={handleSearchProperty}>Search Property</button>
                    <button className="add-property-button" onClick={handleExplore}>Add Property</button>              
                 </div>
          </div>
        </div>
        </>
    
      
);


};

export default Landing;
