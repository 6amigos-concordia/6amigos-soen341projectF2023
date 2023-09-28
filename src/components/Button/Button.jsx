import React from "react";
import "./style.css";

export const Button = ({ className, frameClassName, divClassName }) => {
  return (
    <button className={`button ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className={`text-wrapper ${divClassName}`}>Sign up</div>
      </div>
    </button>
  );
};

