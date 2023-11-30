import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './PropertyList.css';
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';
import { Search } from '../Search component/screens/Search';
import axios from 'axios';

export const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [favoritedProperties, setFavoritedProperties] = useState([]);
  const userId = 'your_user_id'; // Replace with the actual user ID
  const [searchResults, setSearchResults] = useState(null); // Track search results

  useEffect(() => {
    // Fetch properties only when search results are available
    if (searchResults) {
      setProperties(searchResults);
    }
  }, [searchResults]);

  const handleInterestToggle = async (propertyId) => {
    try {
      const response = await axios.post(`/user/${userId}/favorite`, {
        propertyId,
      });
      const updatedFavorites = response.data;
      setFavoritedProperties(updatedFavorites);
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };

  return (
    <div className="property-list">
      <div className="Navbar">
        <NavBarLogo />
      </div>
      <div className="Searchbar">
        <Search onSearchResults={setSearchResults} />
      </div>
      <div className="Postings">
        {properties.map((property) => (
          <div className="property" key={property.id}>
            <Link to={`/property/${property.id}`}>
              <img
                src={property.details.imageUrl}
                alt={property.name}
                className="property-image"
              />
              <div className="property-details">
                <h2>{property.address}</h2>
                <p>Price: {property.details.price} $</p>
                <p>Number of Bedrooms: {property.details.bedrooms}</p>
                <p>Number of Bathrooms: {property.details.bathrooms}</p>
              </div>
            </Link>
            <button
              className={`favorite-button ${
                favoritedProperties.includes(property.id) ? 'favorited' : ''
              }`}
              onClick={() => handleInterestToggle(property.id)}
            >
              ♥
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};