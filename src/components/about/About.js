import React from "react";
import "./about.scss";
import { BsCodeSlash } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
// import ME from "../../assets/headshots/About_me_no_bg.png";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          {/* <img
            className="about__me-image"
            src={ME}
            alt="Portrait of Eric LaFontsee"
          />
          <img
            className="about__me-image2"
            src={ME}
            alt="Portrait of Eric LaFontsee"
          /> */}
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h3>Experience</h3>
              <small>4+ Years Working </small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h3>Recognition</h3>
              <small>4 Company Awards</small>
            </article>
            <article className="about__card">
              <RiGraduationCapLine className="about__icon" />
              <h3>Alumni Speaker</h3>
              <small>Guest Presentor</small>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
