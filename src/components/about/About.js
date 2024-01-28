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
              I am a certified macro coach and registered nurse. Also, a mom of
              2, dog lover, and 30-something trying to balance it all in this
              season of life. As a nurse of over 10 years, I have educated
              patients on the importance of making sustainable changes in their
              lives to maximize their health. My mindset is not only to help
              others live a long life but also ensure quality of life. I also
              recognize the push and pull of day- to- day life and how’s hard it
              can be to do it all on top of caring for myself. I discovered
              tracking macros several years ago as a way to achieve weight loss
              before my wedding. This was an “aha” moment for me on how I looked
              at eating. I learned how to be intentional, not restrictive. Since
              then, I have used macro tracking as a tool to support me through
              all of my life changes. Before, I tried diets that restrict, cut
              out food groups, etc., all to realize they don’t set you up for
              long term balance and success. My goal is to show you how you can
              do this too, all while still managing a busy schedule and enjoying
              life.
            </p>
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
