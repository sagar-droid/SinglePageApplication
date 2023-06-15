import React from "react";
import "../Css/Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container container-flex">
          <div className="icons">
            <a href="https://instagram.com">
              {" "}
              <AiOutlineInstagram className="icon" target="_blank" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <AiOutlineFacebook className="icon" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <AiOutlineLinkedin className="icon" />
            </a>
          </div>
          <div className="copyright">
            <p>All Rights Reserved &copy;</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
