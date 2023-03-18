import React, { useState } from "react";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";

const Modal = ({ setFile, src }) => {
  //console.log(file);
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalCloseposition">
          <IoMdClose className="modalCloseicon" onClick={() => setFile(null)} />
        </div>
        <div className="modalContainerbox">
          <img className="modalImage" src={src} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
