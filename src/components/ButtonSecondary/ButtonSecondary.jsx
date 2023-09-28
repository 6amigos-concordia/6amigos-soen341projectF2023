/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";


export const ButtonSecondary = ({ className, textClassName, text = "See More" }) => {
  return (
    <div className={`button-secondary ${className}`}>
      <div className={`text ${textClassName}`}>{text}</div>
    </div>
  );
};
ButtonSecondary.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  frameClassName: PropTypes.string,
  textClassName: PropTypes.string
};
