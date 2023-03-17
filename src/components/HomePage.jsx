import React from "react";
import SliderContent from "./SliderContent/SliderContent";
import Projects from "./Projects/Projects";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./Team/Team";
import SinglePageNavbar from "./Navbar/SinglePageNavbar/SinglePageNavbar";
import Marquee from "./Marquee/Marquee";

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
