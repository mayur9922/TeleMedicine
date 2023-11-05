import React from "react";
import image from "../images/heroimage.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
      <div className="hero-content">
        <h1>
          Health is Wealth 
        </h1>
        <p>
        At Telemedicine, we're dedicated to redefining healthcare. Our telemedicine platform brings top-quality medical care right to your screen, making it easier than ever to access the support you need. We're committed to your well-being, offering a seamless and secure way to connect with skilled healthcare professionals from the comfort of your home. Your health, our mission. Join us in this exciting journey towards a healthier, more accessible future.
        </p>
      </div>

    </section>
  );
};

export default Hero;
