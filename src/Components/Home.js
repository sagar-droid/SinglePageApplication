import React from "react";
import "../Css/HomeAbout.css";
import Same from "./same";
import Img from "../assets/bg.jpg";

function Home() {
  return (
    <>
      <Same
        title="Blogpost for my journey"
        text="This is a demo about my journey through the coding world.
            <br />
            Hope you like this and review the content as you like."
        imgsrc={Img}
        btn="Read More"
      />
    </>
  );
}

export default Home;
