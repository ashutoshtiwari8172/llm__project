import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="llm__footer section__padding" id="contact">
      <div className="llm__get">
        <h2>Ready to Transform Your Reporting Process?</h2>
        <h3>Join Thousands of Businesses Succeeding with Our Platform</h3>
        <button type="button">Get Started</button>
      </div>
      <div className="llm__footer-contact">
        <p>Contact Us:</p>
        <ul>
          <li>Email: info@yourcompany.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Main Street, City, Country, ZIP Code</li>
        </ul>
      </div>
      <div className="llm__footer-links">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#about">About</a>
        </p>
        <p>
          <a href="#features">Features</a>
        </p>
        <p>
          <a href="#pricing">Pricing</a>
        </p>
        <p>
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="llm__footer-copyright">
        <p>Copyright © 2023ReportGenius All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
