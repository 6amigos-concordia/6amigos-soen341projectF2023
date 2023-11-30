import React, { useState } from "react";

const FilterFormComponent = ({inputValue, onInputChange, onSubmit }) => {
  const [propertyType, setpropertyType] = useState("");
  const [price, setprice] = useState("");
  const [bedrooms, setbedrooms] = useState("");
  const [bathrooms, setbathrooms] = useState("");
  const [district, setdistrict] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      propertyType,
      price,
      bedrooms,
      bathrooms,
      district,
      address:inputValue,
    };
    onSubmit(formData);
  };

  const handleReset = () => {
    setpropertyType("");
    setprice("");
    setbedrooms("");
    setbathrooms("");
    setdistrict("");
    onInputChange("");
  };

  return (
    <div className="filter-form">
      <label> Search: </label>
      <input
        className="input-instance"
        placeholder="address"
        value={inputValue}
        readOnly
      />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Transaction Type:
          <select
            value={propertyType}
            onChange={(e) => setpropertyType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="for sale">For Sale</option>
            <option value="for rent">For Rent</option>
          </select>
        </label>
        <label>
          Price:
          <select
            value={price}
            onChange={(e) => setprice(e.target.value)}
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
          Bedrooms:
          <select
            value={bedrooms}
            onChange={(e) => setbedrooms(e.target.value)}
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
          Bathrooms:
          <select
            value={bathrooms}
            onChange={(e) => setbathrooms(e.target.value)}
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
            value={district}
            onChange={(e) => setdistrict(e.target.value)}
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