import "../styles/Navbar.css";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.png";
import { useState } from "react";

const Navbar = () => {
  const [mobileView, setMobileiew] = useState(false);

  const handleMobileView = () => {
    setMobileiew((mobileView) => !mobileView);
  };

  return (
    <>
      <nav className="desktop">
        <div className="sec-1">
          <ul className="list-container">
            <li>
              <img src={logo} alt="logo" className="logo" />
            </li>
            <li>
              <img
                src={hamburger}
                alt="logo"
                className="hamburger"
                onClick={handleMobileView}
              />
            </li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="sec-2">
          <ul>
            <li>Login</li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>

      <nav className={`mobile ${mobileView ? "active" : ""}`}>
        <ul className="list-container">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Login</li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
