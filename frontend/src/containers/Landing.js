import React from "react";
import { useHistory } from 'react-router-dom';
import NavRight from "../Header/NavRight";
import NavLeft from "../Header/NavLeft";



const Landing = () =>{
    const history = useHistory();

    const handleSearchProperty = () => {
    history.push('/');
  };

  const handleExplore = () => {
    history.push('/listing');
    
  };

    
    return (
        <>
        <NavRight />
        
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
