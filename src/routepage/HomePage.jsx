import React from "react";
import SliderContent from "../components/SliderContent/SliderContent";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import Team from "../components/Team/Team";
import Marquee from "../components/Marquee/Marquee";

const HomePage = () => {
  return (
    <>
      <SliderContent />
      <Projects />
      <AboutUs />
      <Team />
      <Marquee runningText="Blockchain Secured Physical Asset / Freeport Stored / 1:1 Ownership /" />
    </>
  );
};

export default HomePage;
