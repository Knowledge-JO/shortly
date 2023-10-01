import "../styles/Footer.css";
import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo">
        <img src={logo} alt="logo" id="logo" />
      </div>
      <div className="features">
        <p>Features</p>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="resources">
        <p>Resources</p>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="company">
        <p>Company</p>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="socials">
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={pinterest} alt="Pinterest" />
        <img src={instagram} alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
