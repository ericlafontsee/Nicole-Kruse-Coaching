import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="container-fluid hero__container">
      <div className=" py-lg-3 py-xl-5 my-5 z-3 mx-3 mx-xl-auto">
        <div className="row my-5 justify-content-end justify-content-lg-start">
          <div className="col-sm-9 col-md-5 header-copy p-3">
            <div className="">
              <h1 className="display-5 mb-lg-4">
                Hi, I'm <span className="fw-bolder">Nicole</span>
              </h1>
              <p className="text-body fs-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere risus metus, sed venenatis.</p>
            </div>
            <div className="mt-5">
              <button className='btn btn-primary'>Let's Chat!</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
