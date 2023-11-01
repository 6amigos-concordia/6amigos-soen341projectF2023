import React, { useState } from "react";
import "./style.css";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log('Button clicked!', inputValue);
  };

  return (
    <div className="search">
      <div className="subtitle-icon">
        <div className="description"> Find a Trusted Broker </div>
      </div>
      <div className="input-wrapper">
        <input
          className="input-instance"
          placeholder="Last name, First name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="button" onClick={handleButtonClick}>
        Search 
        </button>
      </div>
    </div>
  );
};
