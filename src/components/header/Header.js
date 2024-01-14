import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="container-fluid hero__container">
      <div className="container py-lg-3 py-xl-5 my-5 z-3">
        <div className="row pt-md-3 py-xxl-5 my-5">
          <div className="col-sm-9 col-md-8 col-lg-5 pb-3 pb-sm-0 mt-md-n5 mb-4 mb-sm-5">
            <div className="ps-md-4 ps-lg-0 mt-md-n4 mt-lg-n5">
              <h1 className="display-5 mb-lg-4">
                Hi, I'm <span className="fw-bolder">Nicole Kruse</span>
              </h1>
              <p className="text-body fs-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere risus metus, sed venenatis.</p>
            </div>
            <div className="mt-5">
              <button className='btn btn-primary'>Get Started Today!</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
