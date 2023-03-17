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
          <span className="footerText">The Best Agency for your Business</span>
        </div>
        <div className="footerNavlinks">
          <li className="footerNavlink">Home</li>
          <li className="footerNavlink">About</li>
          <li className="footerNavlink">Service</li>
          <li className="footerNavlink">Portfolio</li>
          <li className="footerNavlink">Blog</li>
          <li className="footerNavlink">Contact</li>
        </div>
      </div>
      <div className="footerContact">
        {/* Email Details */}
        <div className="footerContactbox">
          <div className="footerContactbox">
            <div>
              <span className="footerContactemail">Email:</span>
            </div>
            <div className="emailDetails">
              <span
                className="contactText"
                style={{ textDecoration: "underline" }}
              >
                email@tumar_agency.com
              </span>
              <span
                className="contactText"
                style={{ textDecoration: "underline" }}
              >
                email@tumar_job.com
              </span>
            </div>
          </div>
        </div>

        {/* Phone Details */}
        <div className="footerContactbox">
          <div className="footerContactbox">
            <div>
              <span className="footerContactemail">Phone:</span>
            </div>
            <div className="emailDetails">
              <span className="contactText">+23 8 8532 7834</span>
              <span className="contactText">+23 8 9635 7335</span>
            </div>
          </div>
        </div>

        {/* Address Details */}
        <div className="footerContactbox">
          <div className="footerContactbox">
            <div>
              <span className="footerContactemail">Address:</span>
            </div>
            <div className="emailDetails">
              <span className="contactText">PO Box 223158 Oliver Street</span>
              <span className="contactText">East Victoria 2006 UK</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top"></div>

      {/* Social Media Details */}
      <div className="footerSocial">
        <span className="footerSocialtext">FACEBOOK</span>
        <span className="footerSocialtext">DRIBBBLE</span>
        <span className="footerSocialtext">INSTAGRAM</span>
        <span className="footerSocialtext">YOUTUBE</span>
        <span className="footerSocialtext">BEHANCE</span>
        <span className="footerSocialtext">TWITTER</span>
      </div>

      {/* Copyright Details */}
      <div className="copyrightBox">
        <div>
          <span className="copyrightText">
            © COPYRIGHT 2020 TUMAR. TEMPLATE BY JINNA GIK
          </span>
        </div>
        <div>
          <FaArrowUp className="scrollUpicon" onClick={scrollUp} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
