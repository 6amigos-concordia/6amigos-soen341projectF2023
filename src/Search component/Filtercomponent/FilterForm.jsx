import React, { useState } from "react";

const FilterFormComponent = ({ inputValue, onInputChange, onSubmit }) => {
  const [transactionType, setTransactionType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [Beds, setBeds] = useState("");
  const [Baths, setBaths] = useState("");
  const [districts, setdistricts] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      transactionType,
      minPrice,
      maxPrice,
      Beds,
      Baths,
      districts,
      cityName: inputValue.split(',')[0].trim(),
      streetName: inputValue.split(',')[1]?.trim() || '',
    };
    onSubmit(formData);
  };

  const handleReset = () => {
    setTransactionType("");
    setMinPrice("");
    setMaxPrice(""),
    setBeds("");
    setBaths("");
    setdistricts("");
    onInputChange("");
  };

  return (
    <div className="filter-form">
      <label> Search: </label>
      <input
        className="input-instance"
        placeholder="City name, street name"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <br/>
      <br/>
      <br/>
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
         Minimum Price:
          <select
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value="">Select</option>
            <option value="500000">$500,000</option>
            <option value="1000000">$1,000,000</option>
            <option value="1500000">$1,500,000</option>
            <option value="2000000">$2,000,000</option>
            <option value="2500000">$2,500,000</option>
            <option value="3000000">$3,000,000</option>
            <option value="3500000">$3,500,000</option>
            <option value="4000000">$4,000,000</option>
          </select>
        </label>
        <label>
          Maximum Price:
          <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="">Select</option>
            <option value="500000">$500,000</option>
            <option value="1000000">$1,000,000</option>
            <option value="1500000">$1,500,000</option>
            <option value="2000000">$2,000,000</option>
            <option value="2500000">$2,500,000</option>
            <option value="3000000">$3,000,000</option>
            <option value="3500000">$3,500,000</option>
            <option value="4000000">$4,000,000</option>
          </select>
        </label>
        <label>
          Beds:
          <select
            value={Beds}
            onChange={(e) => setBeds(e.target.value)}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
        <label>
          Baths:
          <select
            value={Baths}
            onChange={(e) => setBaths(e.target.value)}
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
        <label>
          District:
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