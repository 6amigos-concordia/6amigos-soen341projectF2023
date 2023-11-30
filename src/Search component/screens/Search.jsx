import React, { useState } from 'react';
import { IconsSearch } from '../../Search component/icons/IconsSearch';
import FilterFormComponent from '../Filtercomponent/FilterForm';
import axios from 'axios';
import { PropertyList } from '../../Listing component';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Search = ({ onSearchResults }) => {
  const [inputValue, setInputValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filterData, setFilterData] = useState({
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    district: '',
    address: '',
    propertyType: '',
  });
  const [data, setData]=useState({
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    district: '',
    address: '',
    propertyType: '',
  });

  const handleSubmit = async (event) =>{
    event.preventDefault()
    setFilterData(event.target.value);
      try {
          const response = await axios.post('http://localhost:8080/api/search', {address:inputValue});
          onSearchResults(response.data);
          console.log(response.data); // Log the response data
      } catch (error) {
          console.error('Error fetching search:', error);
      }
    
  }
  
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleFilterButtonClick1 = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleButtonClick = async () => {
    if (inputValue === '') {
      alert('Please enter an address');
      return;
    }

    try {
      const address = inputValue;
      const response = await axios.post('http://localhost:8080/api/search', {
        bedrooms: filterData.bedrooms,
        bathrooms: filterData.bathrooms,
        price: parseInt(filterData.price),
        district: filterData.district,
        address: address,
        propertyType: filterData.propertyType,
      });

      console.log('Backend response:', response.data);
      onSearchResults(response.data); // Pass the search results to the parent component

      // Do not navigate here

    } catch (error) {
      console.error('Error making API request:', error.message);
    }
  };

  return (
    <div className="search">
      <div className="subtitle-icon">
        <div className="description"> Find Your Home
        
        </div>
        <IconsSearch className="icons-search" />
      </div>
      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="input-instance"
            placeholder="address"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit"> Search </button>
        </form>
        
        <button
          className="button-with-icon"
          type="button"
          onClick={handleFilterButtonClick1}
        >
          <img
            className="vector"
            alt="Vector"
            src="https://i.ibb.co/nnx7Z0V/vector.png"
          />
        </button>
      </div>
     
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          {isModalVisible && (
            <div className={`modal ${isModalVisible ? 'visible' : ''}`}>
              <div className="modal-content">
                <FilterFormComponent
                  inputValue={inputValue}
                  onInputChange={setInputValue}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};