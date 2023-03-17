import React, { useState } from "react";
import "./SinglePageNavbar.css";
import Logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const SinglePageNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <nav className="singlepageNavbar">
        <div>
          <Link className="navigationLinks" to="/">
            <img
              src={Logo}
              alt="singlepagenav"
              className="singlepageNavbarlogo"
            />
          </Link>
        </div>
        <div>
          <GiHamburgerMenu
            className="singlepageNavbaropen"
            onClick={() => setSidebar(true)}
          />
        </div>
      </nav>
      {sidebar && (
        <div className="singlepageSidebar">
          {/* 1st column */}
          <div className="singlepagesidebarheader">
            <div>
              <Link className="navigationLinks" to="/">
                <img
                  src={Logo}
                  alt="singlepagenav"
                  className="singlepageNavbarlogo"
                />
              </Link>
            </div>
            <div>
              <MdClose
                className="singlepageNavbaropen"
                onClick={() => setSidebar(false)}
              />
            </div>
          </div>
          {/* 2nd column */}
          <div className="singlepagesidebarnavlinks">
            <span className="singlepagesidebarnavlink">Home</span>
            <span className="singlepagesidebarnavlink">About</span>
            <span className="singlepagesidebarnavlink">Services</span>
            <span className="singlepagesidebarnavlink">Blog</span>
            <span className="singlepagesidebarnavlink">Contact</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePageNavbar;
