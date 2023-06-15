import React from "react";
import { NavLink } from "react-router-dom";
import serviceimg from "../assets/serviceimg.jpg";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h2>{props.title}</h2>
        <img src={props.imgsrc} alt="serviceimg" className="serviceImg" />
        <p>{props.desc}</p>
        <div className="btnBox">
          <div className="btn">
            <NavLink to="/about" className="readMore">
              {props.btnservice}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
