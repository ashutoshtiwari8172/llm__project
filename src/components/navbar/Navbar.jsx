import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { HashLink } from "react-router-hash-link";
import logo from "../../assets/Untitled (16).png";

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="llm__navbar section__padding">
      <div className="llm__navbar-links">
        <div className="llm__navbar-links_logo">
          <a href="https://episum.com">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="llm__navbar-links_container">
          <p>
            <HashLink to="/#home" smooth>Home</HashLink>
          </p>
          <p>
            <HashLink to="/#about" smooth>
              About
            </HashLink>
          </p>
          <p>
            <HashLink to="/#features" smooth>Features</HashLink>
          </p>
          {/* <p>
            <HashLink to="/#pricing" smooth>Pricing</HashLink>
          </p> */}
          <p>
            <HashLink to="/#contact" smooth>Contact</HashLink>
          </p>

          <p className="dropdown">
            <HashLink>Products</HashLink>
            <div className="dropdown-content">
              <HashLink to="/insurance" smooth>Insurance</HashLink>
              <HashLink to="/diagnosticCenter" smooth>Diagnostic Center</HashLink>
            </div>
          </p>
        </div>
      </div>
      <div className="llm__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000000"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000000"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="llm__navbar-menu_container scale-up-center">
            <div className="llm__navbar-menu_container-links">
              <p>
                <HashLink to="/#home" smooth>Home</HashLink>
              </p>
              <p>
                <HashLink to="/#about" smooth>
                  About
                </HashLink>
              </p>
              <p>
             
                <HashLink to="/#features" smooth>Features</HashLink>
              </p>
              <p>
                <HashLink to="/#pricing" smooth>Pricing</HashLink>
              </p>
              <p>
            <HashLink to="/#contact" smooth>Contact</HashLink>
          </p>
              <p className="dropdown">
                <HashLink>Products</HashLink>
                <div className="dropdown-content">
                  <HashLink to="/insurance" smooth>Insurance</HashLink>
                  <HashLink to="/diagnosticCenter" smooth>Diagnostic Center</HashLink>
                </div>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
