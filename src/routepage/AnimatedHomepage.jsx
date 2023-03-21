import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import { AnimatePresence } from "framer-motion";

const AnimatedHomepage = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedHomepage;
