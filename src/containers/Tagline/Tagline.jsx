import React from 'react'
import "./tagline.css";
import tagline_img from "../../assets/Designer (1).png"

const Tagline = () => {
  return (
    <div className='llm__tagline section__padding'>
      
      <div className="llm__tagline-content">
      <div className="llm__header-image">
        <img src={tagline_img} alt="tagline_img" />
      </div>

        <h1 >
        Get customized reports tailored for industry.
        </h1>
        <div className="llm__header-button">
        
        <a href="#contact">Contact Us</a>
        
      </div>
      
        </div>
    </div>
  )
}

export default Tagline
