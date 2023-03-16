import React from "react";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="centerTitle">{title}</h1>
    </div>
  );
};

export default Title;
