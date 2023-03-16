import React from "react";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
