import React from 'react'
import "../styles/contact.css"
import logo from "../images/contactpage.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter as faTwitterBrand } from '@fortawesome/free-brands-svg-icons';
import { faFacebook as faFacebookBrand } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/Navbar';
const Contact = () => {
  return (
    <>
    <Navbar/>
    <section className="contact">
    <div className="container contact__container">
        <aside className="contact__aside">
            <div className="aside__image">
                <img src= {logo} alt='Contact us' className='imk'/>
            </div>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sunt ad possimus! Vero ipsam eaque 
                 est ut provident amet hic.
            </p>

            <ul className="contact__details">
                <li>
                    <i className="fa-solid fa-phone"></i>
                    <h5>+999999999999</h5>
                </li>
                <li>
                    <i className="fa-solid fa-message"></i>
                    <h5>abc@gmail.com</h5>
                </li>
                <li>
                    <i className="fa-solid fa-location"></i>
                    <h5>Pune , Maharashtra</h5>
                </li>
            </ul>

            <ul className="footer__socials">
           <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} style={{color:"white"}}/></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterBrand} style={{color:"white"}}/></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{color:"white"}}/></a></li>
            <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookBrand} style={{color:"white"}}/></a>
            </li>
            </ul>

        </aside>

        <form action="https://formspree.io/f/mvonkykr" method="POST" className="contact__form">
            <div className="form__name">
                <input type="text" name="First Name" placeholder="First Name" required/>
                <input type="text" name="Last Name" placeholder="Last Name" required/>
            </div>
            <input type="email" name="Email Address" placeholder="Your Email Address" required/>
            <textarea name="Message" rows="7" placeholder="Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>



    </div>
</section>
</>
  )
}

export default Contact