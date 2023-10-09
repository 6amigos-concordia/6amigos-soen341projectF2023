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
