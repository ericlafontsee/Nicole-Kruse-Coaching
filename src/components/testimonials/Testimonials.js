import React from "react";
import "./testimonials.scss";
import { RiStarSFill } from "react-icons/ri";

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
          {data.map(({ review }, index) => {
            const cardClasses = `testimonials__card card ${
              index === 1 ? "middleCard" : ""
            }`;

            return (
              <div className="col-lg-4 col-md-8" key={index}>
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
              </div>
            );
          })}

          {/* <div class="col-lg-4 col-md-8 ms-md-auto">
            <div class="card bg-gradient-primary">
              <div class="card-body">
                <div class="author align-items-center">
                  <div class="name">
                    <h6 class="text-white mb-0 font-weight-bolder">
                      Shailesh Kushwaha
                    </h6>
                    <div class="stats text-white">
                      <i class="far fa-clock" aria-hidden="true"></i> 1 week ago
                    </div>
                  </div>
                </div>
                <p class="mt-4 text-white">
                  "I found solution to all my design needs from Creative Tim. I
                  use them as a freelancer in my hobby projects for fun! And its
                  really affordable, very humble guys !!!"
                </p>
                <div class="rating mt-3">
                  <i class="fas fa-star text-white" aria-hidden="true"></i>
                  <i class="fas fa-star text-white" aria-hidden="true"></i>
                  <i class="fas fa-star text-white" aria-hidden="true"></i>
                  <i class="fas fa-star text-white" aria-hidden="true"></i>
                  <i class="fas fa-star text-white" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
