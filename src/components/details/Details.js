import React from "react";
import "./details.scss";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Details = () => {
  return (
    <section id="details">
      <div className="container">
        <Swiper
          className="details__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 3
            }
          }}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide id="option1" className="overflow-visible">
            <div className="service__option col-md-4">
              <div className="p-3 text-center">
                <h5 className="mt-3">Macro Guide</h5>
                <p className="small">
                  Custom Macro Numbers with unlimited adjustments during
                  coaching period
                </p>
              </div>
              <hr />
            </div>
          </SwiperSlide>
          <SwiperSlide id="option2" className="overflow-visible">
          <div className="service__option col-md-4">
              <div className="p-3 text-center">
                <h5 className="mt-3">Check Ins</h5>
                <p className="small">
                Weekly Check ins using comprehensive check in sheets
                </p>
              </div>
              <hr />
            </div>
          </SwiperSlide>
          <SwiperSlide id="option3" className="overflow-visible">
             <div className="service__option col-md-4">
              <div className="p-3 text-center">
                <h5 className="mt-3">Grocery Guide</h5>
                <p className="small">
                  {/* Save 3-4 weeks of work when you use our pre-made pages for
                  your website */}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Details;
