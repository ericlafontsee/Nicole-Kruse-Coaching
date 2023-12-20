import React from "react";
import "./header.scss";
import CTA from "./CTA";
// import ME from "../../assets/headshots/transparent_headshot.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Nicole Kruse</h1>
        <CTA />
        {/* <div className="header__portrait">
          <img src={ME} alt="Portrait" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
