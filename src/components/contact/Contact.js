import React, { useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tt8kkif",
        "template_nqr55c1",
        form.current,
        "CaPnCQGTXtMSBMsgN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Let's Get Started!</h2>

      <div className="container contact__container">
        <div className="row justify-content-center align-items-center">
          <form className="col-10 col-lg-8 contact__form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
