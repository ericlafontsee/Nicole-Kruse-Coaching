import React, { useRef } from 'react';
import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8tppn93', 'template_w6ysaxk', form.current, 'A9WXQ1J-VY-6Hlue6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container-fluid contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h3>Email</h3>
            <a href="mailto:elafontsee@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon"/>
            <h3>Phone</h3>
            <a href="tel:+19522885051" target="_blank">Send a message</a>
          </article>
        </div>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
