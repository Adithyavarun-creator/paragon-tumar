import React from "react";
import "./Marquee.css";

const Marquee = ({ runningText }) => {
  return (
    <div className="marquee-box">
      <div className="marquee-w">
        <span>{runningText}</span>
      </div>
    </div>
  );
};

export default Marquee;
