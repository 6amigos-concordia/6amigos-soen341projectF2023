import PropTypes from "prop-types";
import React from "react";

export const IconsArrowDown = ({ color = "black", className }) => {
  return (
    <svg
      className={`icons-arrow-down ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.91028 7.5L10.9103 12.5L15.9103 7.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};

IconsArrowDown.propTypes = {
  color: PropTypes.string,
};
