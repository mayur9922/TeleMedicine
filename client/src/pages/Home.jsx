import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import FAQs from "../components/Faqs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <FAQs/>
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
