import React from "react";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footerContainer">
      <div className="footerTextContent">
        <div className="footerTextbox">
          <span className="footerText">The Best Agency for your business</span>
        </div>
        <div className="footerNavlinks">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </div>
      </div>
      <div className="footerContact">
        {/* Email Details */}
        <div className="footerContactbox">
          <div className="footerContactbox">
            <div>
              <span>Email:</span>
            </div>
            <div className="emailDetails">
              <span>email@tumar_agency.com</span>
              <span>email@tumar_job.com</span>
            </div>
          </div>
        </div>

        {/* Phone Details */}
        <div className="footerContactbox">
          <div className="footerContactbox">
            <div>
              <span>Phone:</span>
            </div>
            <div className="emailDetails">
              <span>+23 8 8532 7834</span>
              <span>+23 8 9635 7335</span>
            </div>
          </div>
        </div>

        {/* Address Details */}
        <div className="footerContactbox">
          <div className="footerContactbox">
            <div>
              <span>Address:</span>
            </div>
            <div className="emailDetails">
              <span>PO Box 223158 Oliver Street</span>
              <span>East Victoria 2006 UK</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top"></div>

      {/* Social Media Details */}
      <div className="footerSocial">
        <span>FACEBOOK</span>
        <span>DRIBBBLE</span>
        <span>INSTAGRAM</span>
        <span>YOUTUBE</span>
        <span>BEHANCE</span>
        <span>TWITTER</span>
      </div>

      {/* Copyright Details */}
      <div className="copyrightBox">
        <div>
          <span>© COPYRIGHT 2020 TUMAR. TEMPLATE BY JINNA GIK</span>
        </div>
        <div>
          <FaArrowUp className="scrollUpicon" onClick={scrollUp} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
