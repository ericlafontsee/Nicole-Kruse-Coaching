import React from "react";
import "./services.scss";

const Services = () => {
  return (
    <div className="container service__container text-center">
      <div className="row">
        <div className="service__options col-lg-9 mx-auto py-3 shadow-blur">
          <div className="row">
            <div className="service__option col-md-4 position-relative">
              <div className="p-3 text-center">
                <h5 className="mt-3">Balance</h5>
                <p className="small">
                Enjoy what you love while prioritizing your health goals
                </p>
              </div>
              <hr />
            </div>
            <div className="service__option col-md-4 position-relative">
              <div className="p-3 text-center">
                <h5 className="mt-3">Intention</h5>
                <p className="small">
                Learn how to small changes can impact your results
                </p>
              </div>
              <hr />
            </div>
            <div className="service__option col-md-4">
              <div className="p-3 text-center">
                <h5 className="mt-3">Sustainability</h5>
                <p className="small">
                Set yourself up for long term success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
