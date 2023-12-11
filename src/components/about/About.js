import React from "react";
import "./about.scss";
import { BsCodeSlash } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";
import ME from "../../assets/headshots/About_me_no_bg.png";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img
            className="about__me-image"
            src={ME}
            alt="Portrait of Eric LaFontsee"
          />
          <img
            className="about__me-image2"
            src={ME}
            alt="Portrait of Eric LaFontsee"
          />
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
          <p>
            Transitioning from the world of music and tour management, my
            journey into web development is a testament to my passion for
            persistence and self-improvement. What started as a remote side
            hustle during my music days became an all-consuming passion. I left
            the music scene to enroll in a full stack web developer program at
            Vanderbilt, and I've never looked back.
          </p>
          <p>
            Today, I specialize in crafting custom websites for clients at a
            marketing agency. My path from a Junior Programmer to a seasoned
            Frontend Developer has given me a diverse perspective that blends
            creativity with precision. Beyond the screen, I find inspiration in
            music, snowboarding, water skiing, and golfing. Let's connect and
            collaborate to bring exceptional ideas to life.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
