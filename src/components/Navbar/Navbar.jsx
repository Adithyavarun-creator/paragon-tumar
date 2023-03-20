import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { navDatas } from "../../datas/navDatas";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <nav className="singlepageNavbar" data-aos="fade-down">
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
        <div className="singlepageSidebar" data-aos="fade-down">
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
            <div data-aos="fade-up">
              <MdClose
                className="singlepageNavbarclose"
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
