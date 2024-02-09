const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="footer-heading">
        Dish Dive <i class="fa-solid fa-utensils"></i>
      </div>
      <div className="about-us">
        <a href="">About Us</a>
      </div>
      <div className="contact-us">
        <a href="">Contact Us</a>
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
