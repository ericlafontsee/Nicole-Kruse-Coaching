import React from "react";
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Details from "../../components/details/Details";
import Coaching from "../../components/coaching/Coaching";
import Testimonials from '../../components/testimonials/Testimonials';
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Details />
      <Coaching />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
