import React, { useEffect } from "react";
import "./Title.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Title = ({ whiteStrokeTitle, blackStrokeTitle }) => {
  useEffect(() => {
    AOS.init({ duration: 2400 });
  }, []);
  return (
    <div>
      {whiteStrokeTitle && (
        <h1 className="whitestrokeTitle">{whiteStrokeTitle}</h1>
      )}
      {blackStrokeTitle && (
        <h1 className="blackstrokeTitle">{blackStrokeTitle}</h1>
      )}
    </div>
  );
};

export default Title;
