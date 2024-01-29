import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header id="home" className="container-fluid hero__container">
      <div className="container px-lg-3 px-xl-5 my-5 z-3 mx-3 mx-xl-auto">
        <div className="row my-5 justify-content-end justify-content-lg-start">
          <div className="col-sm-9 col-md-5 header-copy p-0">
              <h1 className="display-5 mb-lg-4">
                Hi, I'm Nicole
              </h1>
              <p className="">
                <span>I'm</span>
                <span>so</span>
                <span>glad</span>
                <span>you're</span>
                <span>here!</span>
              </p>
            <div className="mt-5">
              <a href="#contact" className="btn btn-primary">Let's Chat!</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
