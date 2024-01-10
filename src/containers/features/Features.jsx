import React from 'react'
import customizalbe from "../../assets/customizable-icon-14.jpg"
import ai from "../../assets/ai.png"

import './features.css'

const Features = () => {
  return (
    <div className='llm__features section__padding' id='features'>
        <div className='llm__features-heading'>
            <h1>Features</h1>
        </div>
        <div className='llm__features-content'>
  <div className='llm__features-content-item'>
    <h1>Customizable Reports</h1>
    <img src={customizalbe} alt="customizable" />
    <p>Tailor reports according to your requirement. Customize templates, fields, and formats effortlessly.</p>
  </div>
  <div className='llm__features-content-item'>
    <h1>AI-Powered Summaries</h1>
    <img src={ai} alt="ai" />
    <p>Harness the power of AI. Instantly generate concise summaries using OpenAI, extracting vital insights from lengthy reports.</p>
  </div>
</div>
</div>

  )
}

export default Features
