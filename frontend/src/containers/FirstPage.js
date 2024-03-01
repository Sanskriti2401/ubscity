import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import logo from "../images/logo.jpeg";


const FirstPage = () => {
    const [activeTab, setActiveTab] = useState("login");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div class="header">
    <img src={logo} style= {{ width:'210px',padding:'10px'}}/>    
    <div className="page-container">
        
      <div className="background-blur"></div>
      <div className="content-box">
        <div className="tabss">
      <button className={`tab ${activeTab === "login" ? "active" : ""}`} onClick={() => toggleTab("login")}>
        Login
      </button>
      <button className={`tab ${activeTab === "signup" ? "active" : ""}`} onClick={() => toggleTab("signup")}>
        Sign Up
      </button>
      {activeTab === "login" && <Login />}
      {activeTab === "signup" && <Signup />}
    </div>
      </div>
    </div>
    </div>
  );
};



export default FirstPage;

