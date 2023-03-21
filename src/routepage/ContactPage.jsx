import React from "react";
import Contact from "../components/Contact/Contact";
import SinglePageNavbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: -window.innerWidth, transition: { duration: 0.2 } }}
    >
      <SinglePageNavbar />
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
