import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/HomeAbout.css";

const same = (props) => {
  return (
    <>
      <div className="mainSection">
        <img src={props.imgsrc} alt="HomeBg"></img>
        <div className="contentBox">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className="btnBox">
            <div className="btn">
              <NavLink to="/about" className="readMore">
                {props.btn}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          {/* <img src={img1} alt="Home"></img> */}
        </div>
      </div>
    </>
  );
};

export default same;
