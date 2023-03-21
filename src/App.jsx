import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AnimatedHomepage from "./routepage/AnimatedHomepage";

const App = () => {
  return (
    <>
      <Navbar />
      <AnimatedHomepage />
      <Footer />
    </>
  );
};

export default App;
