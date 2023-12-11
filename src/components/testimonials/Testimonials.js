import React from "react";
import "./testimonials.scss";
import AVTR1 from "../../assets/Jerry-Vargas.jpeg";
import AVTR2 from "../../assets/Jeffrey-Brown.jpeg";
import AVTR3 from "../../assets/AnthonyCooper.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Jerry Vargas",
    title: "Sr. Front End Developer",
    company: "Conversion Interactive Agency",
    review:
      "Eric demonstrated an eagerness to learn and grow as a developer. They were always willing to take on new challenges and approached problems with a positive attitude. They worked collaboratively with their colleagues, always seeking input and feedback to improve their skills. Eric quickly became proficient in several programming languages and tools, including CraftCMS, ExpressionEngine and Vue, and contributed to the successful completion of several projects. Their attention to detail and ability to spot potential issues ensured that our team delivered quality work. In addition to their technical skills, Eric was a pleasure to work with. They were always respectful and professional, and their excellent communication skills made them a valuable team member."
  },
  {
    avatar: AVTR2,
    name: "Jeffrey Brown",
    title: "Vice President of Operations",
    company: "JANA, Inc.",
    review:
      "Eric worked for our IT department working on projects for our high value customers. Eric studied the customer requirements and learned the work very quickly helping to deliver on time and on budget. Eric also completed additional education programs so that he has a very broad range of skills that will enable him to be successful in any future work he performs."
  },
  {
    avatar: AVTR3,
    name: "Anthony Cooper",
    title: "Lead Web Development Instructor",
    company: "Vanderbilt University Boot Camps",
    review:
      "Eric entered our boot camp full of optimism. Always prepared and ready to leverage his resources. He was the first student in and the last student out in our 2020 fall cohort. Eric came prepared with great questions that added momentum to lessons. Also, he spoke up when struggling with concepts. I feel it is very important to speak up early and often especially when dealing with tight deadlines. Eric entered the boot camp with a foundation of XML, HTML, and basic coding. Throughout the program, he displayed dependability, while often taking a collaborative leadership role in group projects. I feel Eric would be a great contributor to a goal-oriented team. He was a pleasure to have as a student. I know he is ready to step into a role and hit the ground running."
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
        {data.map(({ avatar, name, title, company, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial__slide">
              <div className="testimonial__slide-avatar">
                <img src={avatar} alt={name} />
              </div>
              <h3 className="testimonial__slide-name">{name}</h3>
              <h4>{ title } - {company}</h4>
              <small className="testimonial__slide-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
