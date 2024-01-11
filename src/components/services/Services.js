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
                <h1 className="">
                  <span>300</span>+
                </h1>
                <h5 className="mt-3">Macro Guide</h5>
                <p className="small">
                  Custom Macro Numbers with unlimited adjustments during
                  coaching period
                </p>
              </div>
              <hr />
            </div>
            <div className="service__option col-md-4 position-relative">
              <div className="p-3 text-center">
                <h1 className="text-gradient text-primary">
                  {" "}
                  <span>100</span>+
                </h1>
                <h5 className="mt-3">Check Ins</h5>
                <p className="small">
                Weekly Check ins using comprehensive check in sheets
                </p>
              </div>
              <hr />
            </div>
            <div className="service__option col-md-4">
              <div className="p-3 text-center">
                <h1>39</h1>
                <h5 className="mt-3">Grocery Guide</h5>
                <p className="small">
                  {/* Save 3-4 weeks of work when you use our pre-made pages for
                  your website */}
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
