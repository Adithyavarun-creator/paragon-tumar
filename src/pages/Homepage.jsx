import React from "react";
import SliderContent from "../components/SliderContent/SliderContent";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import Team from "../components/Team/Team";
import Blog from "../components/Blog/Blog";
import HomepageNavbar from "../components/Navbar/HomepageNavbar/HomepageNavbar";

const Homepage = () => {
  return (
    <>
      <HomepageNavbar />
      <SliderContent />
      <Projects />
      <AboutUs />
      <Team />
      <Blog />
    </>
  );
};

export default Homepage;
