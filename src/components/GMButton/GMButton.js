import React from "react";

import "./GMButton.css";

const GMButton = ({ text, onClick, image, colour }) => {
  return (
    <button
      onClick={onClick}
      className="sidebar__btn"
      style={{ backgroundColor: colour }}
    >
      {image ? <img src={image} alt={text} /> : text}
    </button>
  );
};

export default GMButton;
