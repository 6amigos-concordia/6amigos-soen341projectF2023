import React, { useState } from "react";

const FilterFormComponent = ({ onSubmit }) => {
  const [transactionType, setTransactionType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [minBaths, setMinBaths] = useState("");
  const [maxBaths, setMaxBaths] = useState("");
  const [ownership, setOwnership] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the form data as needed and pass it to the onSubmit function
    const formData = {
      transactionType,
      minPrice,
      maxPrice,
      minBeds,
      maxBeds,
      minBaths,
      maxBaths,
      ownership,
      yearBuilt,
    };
    // Call the onSubmit function and pass the form data
    onSubmit(formData);
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
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          Max Price:
          <input
            type="text"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
        <label>
          Min Beds:
          <input
            type="text"
            value={minBeds}
            onChange={(e) => setMinBeds(e.target.value)}
          />
        </label>
        <label>
          Max Beds:
          <input
            type="text"
            value={maxBeds}
            onChange={(e) => setMaxBeds(e.target.value)}
          />
        </label>
        <label>
          Min Baths:
          <input
            type="text"
            value={minBaths}
            onChange={(e) => setMinBaths(e.target.value)}
          />
        </label>
        <label>
          Max Baths:
          <input
            type="text"
            value={maxBaths}
            onChange={(e) => setMaxBaths(e.target.value)}
          />
        </label>
        <label>
          Ownership/Title:
          <input
            type="text"
            value={ownership}
            onChange={(e) => setOwnership(e.target.value)}
          />
        </label>
        <label>
          Year Built:
          <input
            type="text"
            value={yearBuilt}
            onChange={(e) => setYearBuilt(e.target.value)}
          />
        </label>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default FilterFormComponent;
