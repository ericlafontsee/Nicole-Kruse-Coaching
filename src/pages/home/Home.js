import React from "react";
import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import About from "../../components/about/About";
// import Experience from '../../components/experience/Experience';
// import Portfolio from '../../components/portfolio/Portfolio';
// import Testimonials from '../../components/testimonials/Testimonials';
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      {/* <Experience /> */}
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
