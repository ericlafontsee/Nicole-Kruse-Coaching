import React from "react";
import "./details.scss";
import DetailCards from "./DetailCards";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Details = () => {
  return (
    <section id="foundation">
      <h2>Foundation</h2>
      <div className="container">
        <Swiper
          className="foundation__container"
          // install Swiper modules
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 3
            }
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide id="option1" className="overflow-visible">
            <div className="foundation__card col-md-4">
              <div className="p-3 text-center">
                <h3 className="mt-3">Balance</h3>
                <p className="small">
                  Enjoy what you love while prioritizing your health goals
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="option2" className="overflow-visible">
            <div className="foundation__card col-md-4">
              <div className="p-3 text-center">
                <h3 className="mt-3">Intention</h3>
                <p className="small">
                  Learn how to small changes can impact your results
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide id="option3" className="overflow-visible">
            <div className="foundation__card col-md-4">
              <div className="p-3 text-center">
                <h3 className="mt-3">Sustainability</h3>
                <p className="small">Set yourself up for long term success</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <DetailCards />
      </div>
    </section>
  );
};

export default Details;
