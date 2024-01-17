import React from "react";
import "./info.scss";
import NICOLE from "../../assets/headshot-6.jpg";
import { LuBanana, LuDumbbell, LuClipboardList } from "react-icons/lu";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Info = () => {
  return (
    <section id="info">
      <div className="container info__container">
        <div className="row align-items-center justify-content-evenly mt-5">
          <div className="col-10 col-md-4 info__portrait">
            <img
              className="img-fluid mx-auto info__portrait--image"
              src={NICOLE}
              alt="Nicole Kruse Headshot"
            />
          </div>
          <div className="col-10 col-md-6 mt-5 mt-md-0">
            <div className="ps-md-4 ps-xl-0">
              <h2 className="h1 pb-3 mb-2 mb-md-3 mb-xl-4">1:1 Coaching</h2>
              <ul className="list-unstyled pb-1 pb-xl-2">
                <li className="d-flex fs-lg pb-1 mb-3">
                  <LuBanana className="fs-4 mt-n1 me-3" />
                  Nutrition guides
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <LuDumbbell className="fs-4 mt-n1 me-3" />
                  Individually designed programs
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <MdOutlineLocalGroceryStore className="fs-4 mt-n1 me-3" />
                  Groceries
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <LuClipboardList className="fs-4 mt-n1 me-3" />
                  CheckIns
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <LuDumbbell className="fs-4 mt-n1 me-3" />
                  Individually designed programs
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <MdOutlineLocalGroceryStore className="fs-4 mt-n1 me-3" />
                  Groceries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
