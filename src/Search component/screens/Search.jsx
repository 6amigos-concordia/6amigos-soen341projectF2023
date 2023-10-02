import React, { useState } from "react";
import { Dropdown } from "../../Search component/components/Dropdown";
import { IconsSearch } from "../../Search component/icons/IconsSearch";
import "./style.css";

export const Search = () => {

  //For location
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const pattern = /^[a-zA-Z\s]+$/;
    if (pattern.test(inputValue) || inputValue === "") {
      setInputValue(inputValue);
    }
  };

  //For District
  const [selectedDistrict, setSelectedDistrict] = useState(""); // State to hold selected district

  const handleDistrictChange = (selectedValue) => {
    setSelectedDistrict(selectedValue); // Update the selected district in state
  };

  const districts = [
    { label: "WestMount", value: "westmount" },
    { label: "Outremont", value: "outremont" },
    { label: "Town of Mont-Royal", value: "Town of Mont-Royal" },
    { label: "West Island", value: "West Island" },
    { label: "Hampstead", value: "Hampstead" },
    { label: "Île des Soeurs", value: "Île des Soeurs" },
    { label: "Candiac", value: "candiac"}

  ];

  //For min price
  const [selectedMinPrice, setSelectedMinPrice] = useState("");
  const handleMinPriceChange = (selectedValue) => {
    setSelectedMinPrice(selectedValue);
  };
  const minPriceOptions = [
    { label: "500 000$", value: "500 000$" },
    { label: "1 000 000$", value: "1 000 000$" },
    { label: "1 500 000$", value: "1 500 000$" },
    { label: "2 000 000$", value: "2 000 000$" },
    { label: "2 500 000$", value: "2 500 000$" },
    { label: "3 000 000$", value: "3 000 000$" },
    { label: "3 500 000$", value: "3 500 000$" },
    { label: "4 000 000$", value: "4 000 000$" }
  ];

  //For max price
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("");
  const handleMaxPriceChange = (selectedValue) => {
    setSelectedMaxPrice(selectedValue);
  };

  const maxPriceOptions = [
    { label: "500 000$", value: "500 000$" },
    { label: "1 000 000$", value: "1 000 000$" },
    { label: "1 500 000$", value: "1 500 000$" },
    { label: "2 000 000$", value: "2 000 000$" },
    { label: "2 500 000$", value: "2 500 000$" },
    { label: "3 000 000$", value: "3 000 000$" },
    { label: "3 500 000$", value: "3 500 000$" },
    { label: "4 000 000$", value: "4 000 000$" }
  ];

  const handleButtonClick = () => {
    // Handle button click actions here
    console.log('Button clicked!');
  };

  //For Property Type
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const handlePropertyTypeChange = (selectedValue) => {
    setSelectedPropertyType(selectedValue);
  };
  const propertyTypeOptions = [
    { label: "For sale", value: "For sale" },
    { label: "For rent", value: "For rent" },
    { label: "sold", value: "sold" }
  ];

  return (
    <div className="search">
      <div className="subtitle-icon">
        <div className="description"> Find Your Home</div>
        <IconsSearch className="icons-search" />
      </div>
      <div className="input-wrapper"> {/* Wrap location input in a div */}
          <input
            className="input-instance"
            iconsArrowDownColor="#2F234F"
            placeholder="City name, street name"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      <div className="text-search-BTN">
        <Dropdown className="dropdown-instance"
          text="District"
          placeholder="District"
          options={districts}
          selectedValue={selectedDistrict}
          onChange={handleDistrictChange}
        />
        <Dropdown className="dropdown-instance"
          text="Minimum Price"
          placeholder="Minimum Price"
          options={minPriceOptions}
          selectedValue={selectedMinPrice}
          onChange={handleMinPriceChange}
        />
        <Dropdown className="dropdown-instance"
          text="Maximum Price"
          placeholder="Maximum Price"
          options={maxPriceOptions}
          selectedValue={selectedMaxPrice}
          onChange={handleMaxPriceChange}
        />
        <Dropdown className="dropdown-instance"
          text="Property Type"
          placeholder="Property Type"
          options={propertyTypeOptions}
          selectedValue={selectedPropertyType}
          onChange={handlePropertyTypeChange}
        />
        <button className="button-with-icon" onClick={handleButtonClick}>
          <IconsSearch className="icons-search" />
        </button>
      </div>
    </div>
  );
};
