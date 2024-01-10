import React from "react";
import header_img from "../../assets/header_img.png";
import "./header.css";

const Header = () => {
  return (
    <div className="llm__header section__padding" id="home">
      <div className="llm__header-content">
        <h1 >
          Empower Your Business with Intelligent Reports
        </h1>
        <h2>Effortless Report Generation for Every Industry</h2>
        <div className="llm__header-button">
        
          <a href="#about">Know more</a>
          
        </div>
      </div>
      <div className="llm__header-image">
        <img src={header_img} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
