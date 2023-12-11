import React from "react";
import CV from "../../assets/Eric LaFontsee Resume.pdf";

const CTA = () => {
  return (
    <div className="header__cta">
        <a title="Resume" href={CV} download className="btn">Download CV</a>
        <a title="Contact Me" href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA