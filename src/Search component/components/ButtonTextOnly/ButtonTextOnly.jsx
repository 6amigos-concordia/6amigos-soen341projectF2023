import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonTextOnly = ({ className, text = "Button CTA" }) => {
  return (
    <div className={`button-text-only ${className}`}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

ButtonTextOnly.propTypes = {
  text: PropTypes.string,
};
