import React from "react";
import "../../Css/Nav.css";
import logo from "../../assets/vecteezy_circle-logo-turbine_1192065.png";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SlCallEnd } from "react-icons/sl";
const Nav = () => {
  return (
    <>
      <header>
        <div className="container container_flex">
          <div className="logocontainer">
            <img src={logo} alt="main logo"></img>
          </div>
          <div />
          <nav>
            <div className="list">
              <NavLink exact to="/" className="listitem">
                Home
              </NavLink>
              <NavLink to="/about" className="listitem">
                About
              </NavLink>
              <NavLink to="/services" className="listitem">
                Services
              </NavLink>
              <NavLink to="/contacts" className="listitem">
                Contacts
              </NavLink>
            </div>
          </nav>
          <div className="icons">
            <AiOutlineSearch className="icon" />
            <CgProfile className="icon" />
            <SlCallEnd className="icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
