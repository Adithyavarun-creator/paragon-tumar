import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { navDatas } from "../../datas/navDatas";
//animations

const Navbar = () => {
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
            {navDatas.map((data) => (
              <Link to={data.link} className="navigationLinks" key={data.id}>
                <span
                  className="singlepagesidebarnavlink"
                  onClick={() => setSidebar(false)}
                >
                  {data.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
