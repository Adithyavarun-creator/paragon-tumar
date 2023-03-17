import React from "react";
import "./HomepageNavbar.css";
import Logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomepageNavbar = () => {
  return (
    <nav className="navContainer">
      <div className="navLogo">
        <Link className="navigationLinks" to="/">
          <img className="navLogoimage" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navLists">
        <div>
          <Link className="navigationLinks" to="/">
            <li className="navList">Home</li>
          </Link>
        </div>
        <div>
          <Link className="navigationLinks" to="/">
            <li className="navList">Portfolio</li>
          </Link>
        </div>

        <div>
          <Link className="navigationLinks" to="/">
            <li className="navList">About Us</li>
          </Link>
        </div>

        <div>
          <Link className="navigationLinks" to="/">
            <li className="navList">Our Team</li>
          </Link>
        </div>

        <div>
          <Link className="navigationLinks" to="/">
            <li className="navList">Blog</li>
          </Link>
        </div>

        <div>
          <Link className="navigationLinks" to="/">
            <li className="navList">Contact</li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomepageNavbar;
