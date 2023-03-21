import React from "react";
import Marquee from "../components/Marquee/Marquee";
import SinglePageNavbar from "../components/Navbar/Navbar";
import SingleProject from "../components/SingleProject/SingleProject";
import { motion } from "framer-motion";

const ProjectPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }}
    >
      <SingleProject />
      <Marquee runningText="Your SQRS = Your Asset / You have the full controll and ownership of your Asset /" />
    </motion.div>
  );
};

export default ProjectPage;
