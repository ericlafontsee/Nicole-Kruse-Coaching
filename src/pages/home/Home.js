import React from "react";
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import Services from "../../components/services/Services";
import About from "../../components/about/About";
import Details from "../../components/details/Details";
import Info from "../../components/info/Info";
import Testimonials from '../../components/testimonials/Testimonials';
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Services />
      <About />
      <Details />
      <Info />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
