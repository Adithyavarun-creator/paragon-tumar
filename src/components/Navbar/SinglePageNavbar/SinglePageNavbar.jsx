import React, { useState } from "react";
import "./SinglePageNavbar.css";
import Logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { navDatas } from "../../../datas/navDatas";

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
              <GrClose
                className="singlepageNavbaropen"
                onClick={() => setSidebar(false)}
              />
            </div>
          </div>
          {/* 2nd column */}
          <div className="singlepagesidebarnavlinks">
            {navDatas.map((data) => (
              <div className="singlepagesidebarnavlink">
                <span className="">{data.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePageNavbar;
