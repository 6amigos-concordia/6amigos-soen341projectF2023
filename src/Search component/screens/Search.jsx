import React, { useState } from "react";
import { Dropdown } from "../../Search component/components/Dropdown";
import { IconsSearch } from "../../Search component/icons/IconsSearch";
import FilterFormComponent from "../Filtercomponent/FilterForm";
import axios from 'axios';
import "./style.css";

export const Search = () => {

  //For location
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const pattern = /^[a-zA-Z,\s]+$/;
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
    { label: "Candiac", value: "candiac" }

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

  //For Property Type
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const handlePropertyTypeChange = (selectedValue) => {
    setSelectedPropertyType(selectedValue);
  };
  const propertyTypeOptions = [
    { label: "For sale", value: "For sale" },
    { label: "For rent", value: "For rent" },
    { label: "Sold", value: "Sold" }
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFilterButtonClick1 = () => {
    console.log("Filter button clicked!");
    setIsModalVisible(!isModalVisible);
  };
  
  const handleButtonClick = async () => {
    if (!inputValue.trim()) {
      alert("Please enter a city name & a street name.");
      return;
    }

    try {
      // Make a POST request to the backend using Axios
      const response = await axios.post(
        "http://localhost:8080/api/search",
        {
          district: selectedDistrict,
          streetName: inputValue,
          propertyType: selectedPropertyType
        }
      );
      console.log("Backend response:", response.data);
    } catch (error) {
      console.error("Error making API request:", error.message); // Log the error message
      console.error("Error details:", error); // Log the entire error object
    }
  };

  return (
    <div className="search">
      <div className="subtitle-icon">
        <div className="description"> Find Your Home</div>
        <IconsSearch className="icons-search" />
      </div>
      <div className="input-wrapper">
        <div className="input-container">
          <input
            className="input-instance"
            placeholder="City name, street name"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="button" onClick={handleButtonClick}>
            Search
          </button>
        </div>
        <button className="button-with-icon" type="button" onClick={handleFilterButtonClick1}>
          <img className="vector" alt="Vector" src="https://i.ibb.co/nnx7Z0V/vector.png" />
        </button>
      </div>
      {isModalVisible && (
        <div className={`modal ${isModalVisible ? 'visible' : ''}`}>
          <div className="modal-content">
            <FilterFormComponent onSubmit={formData => console.log(formData)} />
          </div>
        </div>
      )}
    </div>
  );
  
};
