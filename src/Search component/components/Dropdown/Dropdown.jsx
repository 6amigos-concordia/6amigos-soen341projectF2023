import PropTypes from "prop-types";
import React from "react";
import "./style.css";


export const Dropdown = ({ className, text = "Select team member",options,onChange, placeholder,iconsArrowDownColor = "black" }) => {
  return (
    <div className={`dropdown ${className}`}>
      <select className="select-instance" onChange={onChange}>
      {placeholder && ( // Render placeholder option if placeholder prop is provided
          <option value="">{placeholder}</option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
  iconsArrowDownColor: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder:PropTypes.string,
};
