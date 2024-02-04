import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tt8kkif",
        "template_nqr55c1",
        form.current,
        "t49O6ergRUynV6KGl"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Show the alert upon successful submission
          setShowAlert(true);
          
          // Hide the alert after 3 seconds
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
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
          {/* Alert for successful submission */}
          {showAlert && (
            <div
              className="alert alert-success mt-3 col-10 col-lg-8"
              role="alert"
            >
              Your message has been sent successfully!
            </div>
          )}
          <form
            className="col-10 col-lg-8 contact__form"
            ref={form}
            onSubmit={sendEmail}
          >
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
