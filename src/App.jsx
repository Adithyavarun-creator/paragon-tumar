import React from "react";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routepage/HomePage";
import ProjectPage from "./routepage/ProjectPage";
import ContactPage from "./routepage/ContactPage";
import SinglePageNavbar from "./components/Navbar/SinglePageNavbar/SinglePageNavbar";
import ServicePage from "./routepage/ServicePage";

const App = () => {
  return (
    <>
      <SinglePageNavbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
