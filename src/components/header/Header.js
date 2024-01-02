import React from "react";
import "./header.scss";
import NICOLE from "../../assets/headshot-7.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="row align-items-center justify-content-evenly  mt-5">
          <div className="col-12 col-md-6">
            <h1>Nicole Kruse Coaching</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-12 col-md-4 header__portrait">
            <img
              className="img-fluid mx-auto"
              src={NICOLE}
              alt="Nicole Kruse Headshot"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
