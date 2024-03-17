import React, { useState, useEffect } from "react";
import LOGO from "../../assets/nk-logo.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  const navClass = scrolled
    ? "navbar navbar-scrolled navbar-expand-lg fixed-top"
    : "navbar navbar-expand-lg fixed-top";

  return (
    <nav className={navClass}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={LOGO} alt="Nicole Kruse Coaching Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-end" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#foundation">
                Foundation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#coaching">
                Coaching
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-primary px-3 py-2 mb-2 mb-lg-0 apply-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Apply Here!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
