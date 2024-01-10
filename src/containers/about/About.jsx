import React from 'react';
import aboutImg from '../../assets/about_image 1.png';
import signUp from  '../../assets/signUp.png'
import logIn from "../../assets/133204467-security-login-icon-simple-element-from-web-development-icons-collection-creative-security-login.jpg"
import createReport from "../../assets/createReport.png"
import './about.css';

const About = () => {
  return (
    <div className='llm__about section__padding' id='about'>
      <div className='llm__about-heading'>
        {/* <h1>About</h1> */}
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

          <div className='llm__about-process-icons-register'><img src={signUp} alt='sign_up' />
          <p>Register your email. </p></div>
          
          <div className='llm__about-process-icons-login' ><img src={logIn} alt='sign_up' />
          <p>Login and enter your details. </p>
          </div>
          <div  className='llm__about-process-icons-createReport'><img src={createReport} alt='create_report ' />
          <p> Create customized reports and generate AI powered summary.</p>
          
          </div>
          
          


        </div>
        </div>
        
   



    </div>
  );
}

export default About;
