import React from "react";
import "./header.scss";
import NICOLE from "../../assets/nk_hero_image.jpg";

const Header = () => {
  return (
    <header>
      <div className="container-fluid header__container">
        <h1>Nicole Kruse Coaching</h1>
        <div className="header__portrait">
          <img src={NICOLE} alt="Family Portrait" />
        </div>
      </div>
    </header>
  );
};

export default Header;
