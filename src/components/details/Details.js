import React from "react";
import "./details.scss";

const Details = () => {
  return (
    <section id="details">
      <div className="container details__container overflow-hidden">
        <div className="row align-items-center justify-content-center">
          <div id="option1" className="col details__option ">
          </div>
          <div id="option2" className="col mx-1 mx-md-3 details__option ">
          </div>
          <div id="option3" className="col details__option ">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
