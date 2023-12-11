import React from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../assets/headshots/transparent_headshot.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <p>Hello I'm</p>
        <h1>Eric LaFontsee</h1>
        <h2 className="text-light">Frontend Developer</h2>
        <CTA />
        <div className="header__portrait">
          <img src={ME} alt="Portrait" />
        </div>
      </div>
    </header>
  );
};

export default Header;
