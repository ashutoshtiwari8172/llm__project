import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';


import './navbar.css';

const navbar = () => {


  return (
    <div className="llm__navbar section__padding">
      <div className="llm__navbar-links">
        <div className="llm__navbar-links_logo">
          <a href="#home">
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className="llm__navbar-links_container">
          <p><a href='#home'>Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#pricing">Pricing</a></p>
          <p><a href="#contact">Contact</a></p>

        </div>
        <div className="llm__navbar-sign">
          <p>Log in</p>
          <button type="button">Create Free</button>
        </div>
      </div>

    </div>


  )
}

export default navbar
