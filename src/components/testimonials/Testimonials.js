import React from "react";
import { RiStarSFill } from "react-icons/ri";

// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    review:
      "I started working with Nicole when I was postpartum after having a c-section and looking for an effective but realistic solution to bettering my health and getting in shape while looking after two young kids. Entering the world of wellness can feel intimidating when you're starting out from scratch but having a coach that understands your lifestyle and has been there herself makes such a difference. Her timeliness and dedication to my journey and my goals gave me the motivation to keep going and her own personal experience and knowledge offered a lot of very useful tips and tricks to add to my success. I started this program with a goal to lose pregnancy weight gain but left with a whole new outlook on a sustainable, healthy lifestyle and built lasting habits to help me keep moving forward in my journey. Having an experienced coach helped make this a lifestyle change instead of another short-lived attempt at achieving weight loss and to me that is priceless!"
  },
  {
    review:
      "For years I have looked at ways to loose weight and  maintain ghe weight I lost. I was constantly doing fad diets and not seeing results. After working with Nicole, I learned consistency and attainable goals are the ticket. Since I started my coaching, I have been eating more than I ever did before I started tracking macros and I’m seeing great results because I am eating the right things. Through coaching, I have learned that focusing on what I eat, hitting my macro goals and being consistent is the answer to long term success and maintenance once I reach my goals. Nicole has helped me shift my thinking about food and exercise which has helped me become a healthier version of myself."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <Swiper
          className="testimonial__container"
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 992px
            992: {
              slidesPerView: 2
            }
          }}
          pagination={{ clickable: true }}
        >
          {data.map(({ review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonials__card card">
                <div className="card-body">
                  <p className="testimonials__card-review mt-4">{review}</p>
                  <div className="rating mt-3">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
