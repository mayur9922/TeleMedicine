import '../styles/footer.css'
import { Link,NavLink } from "react-router-dom"



const Footer = () => {
  return (
    <footer className="footer">
    <div className="container footer__container">
        <div className="footer__1">
            <Link to="/" className="footer__logo"><h4>TELE MEDICINE</h4></Link>
            <p>
                Gukuldham society,powdergali,Andheri east, Mumbai - 411001.
            </p>
        </div>

        <div className="footer__2">
            <h4>Permalinks</h4>
            <ul className="permalinks">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li> <NavLink to={"/doctors"}>Doctors</NavLink></li>
                <li><NavLink to={"/appointments"}>Appointments</NavLink></li>
                <li><NavLink to={"/notifications"}>Notifications</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                <li> <NavLink to={"/profile"}>Profile</NavLink></li>
            </ul>
        </div>

        <div className="footer__3">
            <h4>Privacy</h4>
        
            <ul className="privacy">
                <li><Link to="/">Primary Policy</Link></li>
                <li><Link to="/">Terms and Conditions</Link></li>
                <li><Link to="/">Refund Policy</Link></li>
                
            </ul>
        </div>

        <div className="footer__4">
            <h4>Contact Us</h4>
            <div>
                <p>
                    +91 9999999999
                </p>
                <p>
                    telemedicine@gmail.com
                </p>
            </div>

            <ul className="footer__socials">
                <li>
                    <a href="a"><i className="fa-brands fa-facebook"></i></a>
                </li>
                <li>
                    <a href="a"><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li>
                    <a href="a"><i className="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                    <a href="a"><i className="fa-brands fa-linkedin-in"></i></a>
                </li>
            </ul>
        </div>

       


    </div>
    <div className="footer__copyright">
        <small>Copyright &copy | TELE MEDICINE</small>
    </div>

</footer>
  )
}

export default Footer