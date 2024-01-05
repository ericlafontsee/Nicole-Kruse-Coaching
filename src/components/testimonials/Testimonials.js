import React from "react";
import "./testimonials.scss";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    review:
      "Fusce ut pulvinar justo. Proin vulputate accumsan massa ut tempus. Morbi a lectus eu justo interdum tristique. Donec consectetur velit ac imperdiet iaculis. Nam sit amet nibh molestie, feugiat lorem quis, elementum sapien. Praesent blandit enim ante, eu sollicitudin tortor sodales ut. Mauris interdum a ex nec auctor. Quisque varius diam non lectus tempor laoreet in eget magna. Fusce eu erat condimentum, rutrum odio ut, ultricies orci."
  },
  {
    review:
      "Fusce ut pulvinar justo. Proin vulputate accumsan massa ut tempus. Morbi a lectus eu justo interdum tristique. Donec consectetur velit ac imperdiet iaculis. Nam sit amet nibh molestie, feugiat lorem quis, elementum sapien. Praesent blandit enim ante, eu sollicitudin tortor sodales ut. Mauris interdum a ex nec auctor. Quisque varius diam non lectus tempor laoreet in eget magna. Fusce eu erat condimentum, rutrum odio ut, ultricies orci."
  },
  {
    review:
      "Fusce ut pulvinar justo. Proin vulputate accumsan massa ut tempus. Morbi a lectus eu justo interdum tristique. Donec consectetur velit ac imperdiet iaculis. Nam sit amet nibh molestie, feugiat lorem quis, elementum sapien. Praesent blandit enim ante, eu sollicitudin tortor sodales ut. Mauris interdum a ex nec auctor. Quisque varius diam non lectus tempor laoreet in eget magna. Fusce eu erat condimentum, rutrum odio ut, ultricies orci."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial__slide">
              <p className="testimonial__slide-review">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
