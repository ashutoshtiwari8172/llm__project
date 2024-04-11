import React from "react";
import "./footer.css";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <div className="llm__footer section__padding" id="contact">
      <div className="llm__get">
        <h2>Ready to Transform Your Reporting Process?</h2>
        <h3>Explore our platform,Get 14 days trial for free</h3>
        {/* <a href="http://main.episum.com/register/form">
          <button  type="button">Join for Free</button>
            </a> */}
      </div>
      <div className="llm__footer-contact">
        <p>Contact Us:</p>
        <ul>
          <li>Company Email: <a href="mailto:connect@episum.com">connect@episum.com</a></li>
          
        </ul>
      </div>
      <div className="flex">
      <div className="llm__footer-links">
      <p>
            <HashLink to="/#home" smooth>Home</HashLink>
          </p>
          <p>
            <HashLink to="/#about" smooth>
              About
            </HashLink>
          </p>
          <p>
            {/* <a href="#features">Features</a> */}
            <HashLink to="/#features" smooth>Features</HashLink>
          </p>
          {/* <p>
            <HashLink to="/#pricing" smooth>Pricing</HashLink>
          </p> */}
          <p>
            <HashLink to="/#contact" smooth>Contact</HashLink>
          </p>
         
          <p className="products">
            <HashLink>Products</HashLink>
            <div className="products-content">
              <HashLink to="/insurance" smooth>Insurance</HashLink>
              <HashLink to="/diagnosticCenter" smooth>Diagnostic Center</HashLink>
            </div>
          </p>
      </div>
      <div className="llm__footer-copyright">
      <p>Copyright © {currentYear} EPISUM All rights reserved.  Owned By QUALICIO TECH PRIVATE LIMITED</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
