import React from "react";
import "../Css/HomeAbout.css";
import Same from "./same";
import Img1 from "../assets/coding.jpg";

const About = () => {
  return (
    <Same
      title="Know me better in this page."
      text="I'm a self motivated student who is doing his best to fit in the coding world.
            This is my another project to learn single page application through React js"
      imgsrc={Img1}
      btn="Read More"
    />
  );
};

export default About;
