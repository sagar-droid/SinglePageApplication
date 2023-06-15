import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Contact.css";

const Contacts = () => {
  return (
    <>
      <div className="contact">
        <h1>Contact Us</h1>
        <form className="form-field">
          <div className="form-field">
            <label htmlfor="name">Name</label>
            <input type="text" placeholder="Enter Your Name" required />
          </div>
          <div className="form-field">
            <label htmlfor="Password">Password</label>
            <input type="password" placeholder="Enter Password" required />
          </div>
          <div className="form-field">
            <label htmlfor="email">E-mail</label>
            <input type="email" placeholder="Enter Your E-mail" required />
          </div>
          <div className="form-field">
            <label htmlfor="mobile">Mobile no.</label>
            <input
              type="text"
              placeholder="Enter Your Mobile number"
              required
            />
          </div>
          <div className="btn">
            <NavLink to="/" className="readMore">
              Submit
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacts;
