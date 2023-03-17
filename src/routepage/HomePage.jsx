import React from "react";
import SliderContent from "../components/SliderContent/SliderContent";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import Team from "../components/Team/Team";
import SinglePageNavbar from "../components/Navbar/SinglePageNavbar/SinglePageNavbar";
import Marquee from "../components/Marquee/Marquee";

const HomePage = () => {
  return (
    <>
      <SinglePageNavbar />
      <SliderContent />
      <Projects />
      <AboutUs />
      <Team />
      <Marquee />
    </>
  );
};

export default HomePage;
