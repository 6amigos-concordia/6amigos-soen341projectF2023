import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonTextOnly = ({ className, text = "Button CTA", onClick }) => {
  return (
    <div 
      className={`button-text-only ${className}`} 
      onClick={onClick} 
      role="button" 
      tabIndex="0" 
      onKeyPress={(event) => {
        // Enables "click" on pressing Enter key
        if (event.key === 'Enter') onClick(event);
      }}
    >
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

ButtonTextOnly.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,  // Add onClick prop type
};
