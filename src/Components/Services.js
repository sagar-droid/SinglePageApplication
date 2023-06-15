import React from "react";

import "../Css/Services.css";
import Data from "./Data";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <h1>Our Services</h1>
      <div className="services">
        {Data.map((values) => {
          return (
            <Card
              title={values.Stitle}
              imgsrc={values.imgsrc}
              desc={values.desc}
              btnservice={values.btnservice}
            />
          );
        })}
      </div>
    </>
  );
};

export default Services;
