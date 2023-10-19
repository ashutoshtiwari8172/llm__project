import React from 'react';
import aboutImg from '../../assets/about_image 1.png';
import signUp from  '../../assets/sign-up.png'
import logIn from "../../assets/login 1.png"
import createReport from "../../assets/createReport.png"
import './about.css';

const About = () => {
  return (
    <div className='llm__about section__padding' id='about'>
      <div className='llm__about-heading'>
        <h1>About</h1>
      </div>
      <div className='llm__about-mid'>
        <div className='llm__about-content'>
          <p>
            Generating reports is a highly repetitive and time-consuming task. Report Genius is an AI powered platform where you can create highly customized, industry-specific reports and generate precise summaries using Chatgpt in no time. So whether you are a health diagnostic center or an insurance company, generating those stacks of reports is just a click away.
          </p>
        </div>
        <div className='llm_about-img'>
          <img src={aboutImg} alt="about_img" />
        </div>

      </div>
      <div className='llm__about-process'>
        <div className='llm__about-process-icons'>

          <div><img src={signUp} alt='sign_up' />
          <p>Register through your email,confirm the mail </p></div>
          
          <div><img src={logIn} alt='sign_up' />
          <p>Click on the  link go to the login and enter your details </p>
          </div>
          <div><img src={createReport} alt='create_report ' />
          <p> Create customized reports</p>
          
          </div>
          
          


        </div>
        </div>
        
   



    </div>
  );
}

export default About;
