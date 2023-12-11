import React from "react";
import "./footer.scss";
import { FiLinkedin ,FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__socials">
      <a href="" title="LinkedIn" target="_blank">
        <FiLinkedin />
      </a>
      <a href="" title="Github" target="_blank">
        <FiGithub />
      </a>
      <a href="" title="Instagram" target="_blank">
        <FiInstagram />
      </a>
      <a href="" title="Facebook" target="_blank">
        <FiFacebook />
      </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nicole Kruse All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
