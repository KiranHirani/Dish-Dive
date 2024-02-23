import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { useParams } from "react-router-dom";

const Footer = ({ className }) => {
  const { category } = useParams();
  return (
    <div className={`footer ${className}`}>
      <div className="footer-heading">
        <Link to="/">
          Dish Dive <i className="fa-solid fa-utensils"></i>
        </Link>
      </div>
      {!category ? (
        <Tooltip title="Show me a random recipe">
          <div className="random-recipe">
            <Link to={`/details/Random/today`}>Random Recipe</Link>
          </div>
        </Tooltip>
      ) : (
        <Tooltip title="Show me a random recipe">
          <div className="random-recipe">
            <Link to={`/random-food-joke`}>Food Joke</Link>
          </div>
        </Tooltip>
      )}

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
