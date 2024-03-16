import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosFitness } from "react-icons/io";

const data = [
  {
    review:
      "I started working with Nicole when I was postpartum after having a c-section and looking for an effective but realistic solution to bettering my health and getting in shape while looking after two young kids. Entering the world of wellness can feel intimidating when you're starting out from scratch but having a coach that understands your lifestyle and has been there herself makes such a difference. Her timeliness and dedication to my journey and my goals gave me the motivation to keep going and her own personal experience and knowledge offered a lot of very useful tips and tricks to add to my success. I started this program with a goal to lose pregnancy weight gain but left with a whole new outlook on a sustainable, healthy lifestyle and built lasting habits to help me keep moving forward in my journey. Having an experienced coach helped make this a lifestyle change instead of another short-lived attempt at achieving weight loss and to me that is priceless!"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container testimonials__container">
        <div className="row align-items-center justify-content-evenly">
          <div className="col-10 col-lg-5 text-center text-lg-start">
            <p>
              <a
                href="https://docs.google.com/forms/d/1aoXrK00SH_Z-vmWvZJEE1i1O296j0hvZXPHYjjTuufQ/viewform?edit_requested=true"
                target="_blank"
              >
                <IoIosInformationCircleOutline className="fs-4 mt-n1 me-3" /> ONE TIME MACRO
                COUNT APP
              </a>
            </p>
            <p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdD1DJY0rCUpzgG3xTa4Z8cWZhwoR5hLV3-oAxGSAILDm7AEA/viewform"
                target="_blank"
              >
                <IoIosFitness className="fs-4 mt-n1 me-3" />1:1 COACHING APP
              </a>
            </p>
          </div>
          <div className="col-10 col-lg-6 mb-5 mb-lg-0 mt-5 mt-lg-0">
            {data.map(({ review }, index) => {
              return (
                <div key={index} className="testimonials__card card shadow-sm">
                  <div className="card-body">
                    <p className="testimonials__card-review mt-4">{review}</p>
                    <div className="testimonials__card-rating mt-3">
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
