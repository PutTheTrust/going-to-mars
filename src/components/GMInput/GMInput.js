import React from "react";

import "./GMInput.css";

const GMInput = ({ name, title, value, setValue }) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {title}
      </label>
      <input
        className="input__textField"
        name={name}
        type="text"
        placeholder={title}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default GMInput;
