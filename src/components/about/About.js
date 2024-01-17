import React from "react";
import "./about.scss";
import NICOLE from "../../assets/headshot-7.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="row align-items-center justify-content-evenly">
          <div className="col-10 col-md-6 mb-5 mb-md-0">
            <h2>About Me</h2>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="btn btn-primary">Let's get started!</button>
          </div>
          <div className="col-10 col-md-4 about__portrait mt-5 mt-md-0">
            <img
              className="img-fluid mx-auto about__portrait--image"
              src={NICOLE}
              alt="Nicole Kruse Headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
