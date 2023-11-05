import React from "react";
import image from "../images/aboutimage2.webp";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">

          <div className="hero-content">
            <p>
            At Telemedicine, our mission is to revolutionize healthcare access by bridging the gap between patients and medical professionals, regardless of geographical boundaries. With a commitment to excellence and a passion for innovation, we offer a cutting-edge telemedicine platform that empowers patients to connect with board-certified physicians, specialists, and healthcare providers from the comfort of their own homes. We believe that healthcare should be convenient, accessible, and patient-centric. Our team is dedicated to delivering high-quality care through secure video consultations, ensuring that everyone can access medical expertise when they need it most. Join us in reshaping the future of healthcare through telemedicine, where your well-being is our top priority.
            </p>
          </div>
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
