import React from "react";
import SliderContent from "../components/SliderContent/SliderContent";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import Team from "../components/Team/Team";
import Marquee from "../components/Marquee/Marquee";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }}
    >
      <SliderContent />
      <Projects />
      <AboutUs />
      <Team />
      <Marquee runningText="Blockchain Secured Physical Asset / Freeport Stored / 1:1 Ownership /" />
    </motion.div>
  );
};

export default HomePage;
