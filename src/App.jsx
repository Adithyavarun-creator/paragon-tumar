import React from "react";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
