import React from "react";
import PHONE from "../../assets/phone.png";
import { CiViewList } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";
import { LiaBookReaderSolid } from "react-icons/lia";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaAppStore } from "react-icons/fa";

const Macros = () => {
  return (
    <section id="macros">
      <h2 className="pb-3 mb-2 mb-lg-3 mb-xl-4">One Time Macro Counts</h2>
      <div className="container coaching__container">
        <div className="row align-items-center justify-content-evenly mt-5">
          <div className="order-2 order-lg-1 col-10 col-lg-6 mt-5 mt-lg-0 coaching__list">
            <div className="ps-lg-4 ps-xl-0">
              <h3 className="pb-3 mb-2 mb-lg-3 mb-xl-4">What’s included:</h3>
              <ul className="list-unstyled pb-1 pb-xl-2">
                <li className="d-flex fs-lg pb-1 mb-3 align-items-center">
                <CiViewList className="fs-4 mt-n1 me-3" />
                  Custom macro numbers based on goals <br/>- will include 2 sets of numbers
                </li>
                <li className="d-flex fs-lg pb-1 mb-3 align-items-center">
                <BsFillPeopleFill className="fs-4 mt-n1 me-3" />
                  30 minute consultation to discuss numbers and my
                  recommendations
                </li>
                <li className="d-flex fs-lg pb-1 mb-3 align-items-center">
                <LiaBookReaderSolid className="fs-4 mt-n1 me-3" />
                  Macro Guide
                </li>
                <li className="d-flex fs-lg pb-1 mb-3 align-items-center">
                <MdOutlineLocalGroceryStore className="fs-4 mt-n1 me-3" />
                  Grocery guide/meal planning tool
                </li>
                <li className="d-flex fs-lg pb-1 mb-3 align-items-center">
                <FaAppStore className="fs-4 mt-n1 me-3" />
                  MyFitnessPal tutorial guide
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 order-lg-2 col-10 col-lg-4 about__portrait">
            <img
              className="img-fluid mx-auto coaching__portrait--image"
              src={PHONE}
              alt="DALL-E generated image of a phone with a pie chart depicting Macro Nutrient Counting"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Macros;
