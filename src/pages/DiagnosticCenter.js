import React from 'react'
import { Navbar, Footer } from '../components';
import medicalReport from "../assets/diagnosis-medical-report-with-stethoscope-vector-19690081.jpg"
import "./diagnosticCenter.css"



const DiagnosticCenter = () => {
  return (
    <div>
      <Navbar/>
      <div className='diagnosticCenter section__padding'>
        
     
        <div className='diagnosticCenter-header'>
            <div className='diagnosticCenter-header-content'>
                <p>Discover the power of clarity with our dedicated tool for diagnostic centers! We specialize in providing clear and concise summaries of your diagnostic reports, offering you a swift comprehension of your test results.</p>
                <div className='diagnosticCenter-login'>
                <a href="https://medicalreport.episum.com/login">
          <button  type="button">Login</button>
            </a>
                </div>

            </div>
            <div className='diagnosticCenter-header-img'>
            <img src={medicalReport} alt="medicalReport" />
            </div>
        </div>
        
      





      </div>
    <Footer/>
    </div>
  )
}

export default DiagnosticCenter
