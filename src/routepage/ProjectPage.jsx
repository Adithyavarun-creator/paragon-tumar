import React from "react";
import Marquee from "../components/Marquee/Marquee";
import SinglePageNavbar from "../components/Navbar/Navbar";
import SingleProject from "../components/SingleProject/SingleProject";

const ProjectPage = () => {
  return (
    <>
      <SingleProject />
      <Marquee runningText="Your SQRS = Your Asset / You have the full controll and ownership of your Asset /" />
    </>
  );
};

export default ProjectPage;
