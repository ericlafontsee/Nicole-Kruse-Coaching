import React from "react";
import "./footer.scss";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer__container">
      <hr className="footer__hr" />
      <div className="footer__socials">
      <a href="" title="Instagram" target="_blank">
        <FaInstagram />
      </a>
      <a href="" title="Facebook" target="_blank">
        <FaFacebook />
      </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nicole Kruse All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
