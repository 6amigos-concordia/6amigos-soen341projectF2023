import React, { useState } from "react";

const FilterFormComponent = ({ onSubmit, onReset }) => {
  const [transactionType, setTransactionType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [minBaths, setMinBaths] = useState("");
  const [maxBaths, setMaxBaths] = useState("");
  const [districts, setdistricts] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !transactionType &&
      !minPrice &&
      !maxPrice &&
      !minBeds &&
      !maxBeds &&
      !minBaths &&
      !maxBaths &&
      !districts
    ) {
      alert("Please select at least one field before searching.");
      return;
    }

    const formData = {
      transactionType,
      minPrice,
      maxPrice,
      minBeds,
      maxBeds,
      minBaths,
      maxBaths,
      districts,
    };
    onSubmit(formData);
  };

  const handleReset = () => {
    // Reset the form data to the initial state
    setTransactionType("");
    setMinPrice("");
    setMaxPrice("");
    setMinBeds("");
    setMaxBeds("");
    setMinBaths("");
    setMaxBaths("");
    setdistricts("");
  };

  return (
    <div className="filter-form">
      <form onSubmit={handleSubmit}>
        <label>
          Transaction Type:
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
           <option value="">Select</option>
            <option value="for sale">For Sale</option>
            <option value="for rent">For Rent</option>
            <option value="sold">Sold</option>
            </select>
        </label>
          <label>
            Min Price:          
            <select
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value="">Select</option>
            <option value="500 000$">500 000$</option>
            <option value="1 000 000">1 000 000$</option>
            <option value="1 500 000$">1 500 000$</option>
            <option value="2 000 000$">2 000 000$</option>
            <option value="2 500 000$">2 500 000$</option>
            <option value="3 000 000$">3 000 000$</option>
            <option value="3 500 000$">3 500 000$</option>
            <option value="4 000 000$">4 000 000$</option>
          </select>
        </label>
        <label>
          Max Price:
        <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="">Select</option>
            <option value="500 000$">500 000$"</option>
            <option value="1 000 000">1 000 000$</option>
            <option value="1 500 000$">1 500 000$</option>
            <option value="2 000 000$">2 000 000$</option>
            <option value="2 500 000$">2 500 000$</option>
            <option value="3 000 000$">3 000 000$</option>
            <option value="3 500 000$">3 500 000$</option>
            <option value="4 000 000$">4 000 000$</option>
          </select>
        </label>
        <label>
          Min Beds:
          <select
            value={minBeds}
            onChange={(e) => setMinBeds(e.target.value)}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="1+">1+</option>
            <option value="2">2</option>
            <option value="2+">2+</option>
            <option value="3">3</option>
            <option value="3+">3+</option>
            <option value="4">4 </option>
            <option value="4+">4+</option>
            <option value="5">5</option>
            <option value="5+">5+</option>
            <option value="6">6</option>
          </select>
        </label>
        <label>
        <label>
          Max Beds:
          <select
            value={maxBeds}
            onChange={(e) => setMaxBeds(e.target.value)}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="1+">1+</option>
            <option value="2">2</option>
            <option value="2+">2+</option>
            <option value="3">3</option>
            <option value="3+">3+</option>
            <option value="4">4 </option>
            <option value="4+">4+</option>
            <option value="5">5</option>
            <option value="5+">5+</option>
            <option value="6">6</option>
          </select>
        </label>
        </label>
        <label>
          Min Baths:
          <select
            value={minBaths}
            onChange={(e) => setMinBaths(e.target.value)}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="1+">1+</option>
            <option value="2">2</option>
            <option value="2+">2+</option>
            <option value="3">3</option>
            <option value="3+">3+</option>
            <option value="4">4 </option>
            <option value="4+">4+</option>
            <option value="5">5</option>
            <option value="5+">5+</option>
            <option value="6">6</option>
          </select>
        </label>
        <label>
          Max Baths:
          <select
            value={maxBaths}
            onChange={(e) => setMaxBaths(e.target.value)}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="1+">1+</option>
            <option value="2">2</option>
            <option value="2+">2+</option>
            <option value="3">3</option>
            <option value="3+">3+</option>
            <option value="4">4 </option>
            <option value="4+">4+</option>
            <option value="5">5</option>
            <option value="5+">5+</option>
            <option value="6">6</option>
          </select>
        </label>
        <label>
          District
          <input
            type="text"
            value={districts}
            onChange={(e) => setdistricts(e.target.value)}
          />
        </label>
        <div className="button-group">
          <button type="submit">Search</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterFormComponent;
