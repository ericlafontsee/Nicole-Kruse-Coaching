import React from "react";
import "./coaching.scss";
import NICOLE from "../../assets/headshot-6.jpg";
import { LuClipboardList } from "react-icons/lu";
import { FaAppStore } from "react-icons/fa";
import { LiaBookReaderSolid } from "react-icons/lia";
import { GiStairsGoal } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineLocalGroceryStore, MdOutlinePhonelink } from "react-icons/md";

const Coaching = () => {
  return (
    <section id="coaching">
      <h2 className="pb-3 mb-2 mb-md-3 mb-xl-4">1:1 Coaching</h2>
      <div className="container coaching__container">
        <div className="row align-items-center justify-content-evenly mt-5">
          <div className="col-10 col-md-4 coaching__portrait">
            <img
              className="img-fluid mx-auto coaching__portrait--image"
              src={NICOLE}
              alt="Nicole Kruse Headshot"
            />
          </div>
          <div className="col-10 col-md-6 mt-5 mt-md-0">
            <div className="ps-md-4 ps-xl-0">
              <h3 className="pb-3 mb-2 mb-md-3 mb-xl-4">What’s included:</h3>
              <ul className="list-unstyled pb-1 pb-xl-2">
                <li className="d-flex fs-lg pb-1 mb-3">
                  <IoDocumentTextOutline className="fs-4 mt-n1 me-3" />
                  Custom macro plan individualized to YOU
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <MdOutlinePhonelink className="fs-4 mt-n1 me-3" />
                  Daily communication via Voxer Monday-Friday
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <LuClipboardList className="fs-4 mt-n1 me-3" />
                  Weekly check ins using my comprehensive check in process
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <LiaBookReaderSolid className="fs-4 mt-n1 me-3" />
                  Macro Guide
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <MdOutlineLocalGroceryStore className="fs-4 mt-n1 me-3" />
                  Grocery guide and meal planning tool
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <GiStairsGoal className="fs-4 mt-n1 me-3" />
                  Goal setting worksheet
                </li>
                <li className="d-flex fs-lg pb-1 mb-3">
                  <FaAppStore className="fs-4 mt-n1 me-3" />
                  MyFitnessPal tutorial handbook
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
