import React, { useState } from "react";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";

//edit modal for big desktops as well

const Modal = ({ setFile, src, file }) => {
  console.log(file);
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalCloseposition">
          <IoMdClose className="modalCloseicon" onClick={() => setFile(null)} />
        </div>
        <div className="modalContainerbox">
          <img
            className="modalImage"
            src={src}
            // src={src?.image[index]}
            // onClick={() => setIndex(src?.image[index])}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
