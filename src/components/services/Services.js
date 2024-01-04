import React from "react";
import "./services.scss";

const Services = () => {
  return (
    <div class="container service__container text-center">
      <div class="row">
        <div class="service__options col-lg-9 mx-auto py-3 shadow-blur">
          <div class="row">
            <div class="service__option col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="">
                  <span>300</span>+
                </h1>
                <h5 class="mt-3">Macro Guide</h5>
                <p class="small">
                  Custom Macro Numbers with unlimited adjustments during
                  coaching period
                </p>
              </div>
              <hr />
            </div>
            <div class="service__option col-md-4 position-relative">
              <div class="p-3 text-center">
                <h1 class="text-gradient text-primary">
                  {" "}
                  <span>100</span>+
                </h1>
                <h5 class="mt-3">Check Ins</h5>
                <p class="small">
                Weekly Check ins using comprehensive check in sheets
                </p>
              </div>
              <hr />
            </div>
            <div class="service__option col-md-4">
              <div class="p-3 text-center">
                <h1>39</h1>
                <h5 class="mt-3">Grocery Guide</h5>
                <p class="small">
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
