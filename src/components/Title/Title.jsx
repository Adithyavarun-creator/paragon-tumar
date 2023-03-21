import React, { useEffect } from "react";
import "./Title.css";

const Title = ({ whiteStrokeTitle, blackStrokeTitle }) => {
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
