import { Link } from "react-router-dom";

const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="footer-heading">
        <Link to="/">
          Dish Dive <i class="fa-solid fa-utensils"></i>
        </Link>
      </div>
      <div className="about-us">
        <Link to="/about">About Us</Link>
      </div>
      <div className="contact-us">
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="social-links">
        <div className="links-title">SOCIAL LINKS</div>
        <div className="icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
