import React from 'react'
import { Navbar,Footer } from '../components';
import '../App.css'
import medicalReport from "../assets/3775102.png"
import "./insurance.css"


const Insurance = () => {
  return (
    <div>
      <Navbar/>
     
      <div className='Insurance section__padding'>
     
        <div className='Insurance-header'>
            <div className='Insurance-header-content'>
                <p>Welcome to a game-changing tool designed exclusively for insurance survey companies. Our platform is meticulously crafted to elevate the efficiency and precision of your insurance assessments..</p>
                <div className='Insurance-login'>
                <a href="http://main.episum.com/login/">
          <button  type="button">Login</button>
            </a>
                </div>

            </div>
            <div className='Insurance-header-img'>
            <img src={medicalReport} alt="medicalReport" />
            </div>
        </div>





      </div>
      <Footer/>    </div>
  )
}

export default Insurance
