import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/Untitled (12).png";

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
            <HashLink to="/#home">Home</HashLink>
          </p>
          <p>
            <HashLink to="/#about" smooth>
              About
            </HashLink>
          </p>
          <p>
            <HashLink to="/#features">Features</HashLink>
          </p>
          <p>
            <HashLink to="/#pricing">Pricing</HashLink>
          </p>

          <p className="dropdown">
            <HashLink>Products</HashLink>
            <div className="dropdown-content">
              <HashLink to="/insurance">Insurance</HashLink>
              <HashLink to="/diagnosticCenter">Diagnostic Center</HashLink>
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
                <HashLink to="/#home">Home</HashLink>
              </p>
              <p>
                <HashLink to="/#about" smooth>
                  About
                </HashLink>
              </p>
              <p>
                {/* <a href="#features">Features</a> */}
                <HashLink to="/#features">Features</HashLink>
              </p>
              <p>
                <HashLink to="/#pricing">Pricing</HashLink>
              </p>
              <p></p>
              <p className="dropdown">
                <HashLink>Products</HashLink>
                <div className="dropdown-content">
                  <HashLink to="/insurance">Insurance</HashLink>
                  <HashLink to="/diagnosticCenter">Diagnostic Center</HashLink>
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
