import React from "react";
import "./testimonials.scss";
import { RiStarSFill } from "react-icons/ri";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    review:
      "Morbi a lectus eu justo interdum tristique. Donec consectetur velit ac imperdiet iaculis. Nam sit amet nibh molestie, feugiat lorem quis, elementum sapien. Praesent blandit enim ante, eu sollicitudin tortor sodales ut. Mauris interdum a ex nec auctor. Quisque varius diam non lectus tempor laoreet in eget magna. Fusce eu erat condimentum, rutrum odio ut, ultricies orci."
  },
  {
    review:
      "Morbi a lectus eu justo interdum tristique. Donec consectetur velit ac imperdiet iaculis. Nam sit amet nibh molestie, feugiat lorem quis, elementum sapien. Praesent blandit enim ante, eu sollicitudin tortor sodales ut. Mauris interdum a ex nec auctor. Quisque varius diam non lectus tempor laoreet in eget magna. Fusce eu erat condimentum, rutrum odio ut, ultricies orci."
  },
  {
    review:
      "Morbi a lectus eu justo interdum tristique. Donec consectetur velit ac imperdiet iaculis. Nam sit amet nibh molestie, feugiat lorem quis, elementum sapien. Praesent blandit enim ante, eu sollicitudin tortor sodales ut. Mauris interdum a ex nec auctor. Quisque varius diam non lectus tempor laoreet in eget magna. Fusce eu erat condimentum, rutrum odio ut, ultricies orci."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <div className="row mt-6">
          <Swiper
            className="container testimonial__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
          >
            {data.map(({ review }, index) => {
              const cardClasses = `testimonials__card card ${
                index === 1 ? "middleCard" : ""
              }`;
              return (
                <SwiperSlide key={index} className="testimonials__card">
                  <div className={cardClasses}>
                    <div className="card-body">
                      <div class="author">
                        <div class="name">
                          <h6 class="mb-0 font-weight-bolder">John Smith</h6>
                        </div>
                      </div>
                      <p className="testimonials__card-review mt-4">{review}</p>
                      <div className="rating mt-3">
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
