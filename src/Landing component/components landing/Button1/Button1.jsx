import React from "react";
import "./style.css";

export const Button1 = ({ className, frameClassName, divClassName, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button className={`button ${className}`} onClick={handleClick}>
      <div className={`frame ${frameClassName}`}>
        <div className={`text-wrapper ${divClassName}`}>Find a home</div>
      </div>
    </button>
  );
};
