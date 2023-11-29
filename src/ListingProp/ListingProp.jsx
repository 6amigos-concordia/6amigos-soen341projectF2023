import React, { useState, useEffect } from "react";
import api from '../api'; // Update this path to your api.js file
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Frame } from "../Frame/Frame";
import { useParams } from 'react-router-dom';

const Feature = ({ title, content }) => (
  <p className="feature">
    <span className="feature-title">{title}</span>
    <span className="feature-content">{content}</span>
  </p>
);

// Full-Page Offer Form Component
const OfferForm = ({ onClose, onSubmit, offerPrice, setOfferPrice, personalMessage, setPersonalMessage }) => {
  return (
    <div className="offer-form-overlay">
      <button className="close-offer-form" onClick={onClose}>Close</button>
      <form onSubmit={onSubmit} className="offer-form">
        <label>
          Offered Price:
          <input 
            type="number" 
            value={offerPrice} 
            onChange={(e) => setOfferPrice(e.target.value)} 
            placeholder="Enter your offer price" 
          />
        </label>
        <label>
          Personal Message or Notes:
          <textarea 
            value={personalMessage} 
            onChange={(e) => setPersonalMessage(e.target.value)} 
            placeholder="Add any personal messages or notes here"
          />
        </label>
        <button type="submit">Submit Offer</button>
      </form>
    </div>
  );
};

export const ListingProp = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [isFrameVisible, setIsFrameVisible] = useState(false);
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [offerPrice, setOfferPrice] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');
  const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchPropertyDetails = async () => {
    setLoading(true);
    try {
      const response = await api.properties.getPropertyById(id);
      setProperty(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching property details:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
      setError(error);
    }
    
  };

  fetchPropertyDetails();
}, [id]);

if (loading) {
  return <div>Loading property details...</div>;
}

if (error) {
  return <div>Error loading property details.</div>;
}




  // Form handling functions
  const handleOfferSubmit = (e) => {
    e.preventDefault();
    // Form validation logic here
    // For example:
    if (offerPrice.trim() === '') {
      alert('Please enter an offer price.');
      return;
    }
    // Additional validation as needed
    setShowOfferForm(false); // Hide the form after submission
    // Handle offer submission logic (e.g., send to server)
  };

  if (isFrameVisible) {
    return <Frame onClose={() => setIsFrameVisible(false)} />;
  }

  if (showOfferForm) {
    return (
      <OfferForm
        onClose={() => setShowOfferForm(false)}
        onSubmit={handleOfferSubmit}
        offerPrice={offerPrice}
        setOfferPrice={setOfferPrice}
        personalMessage={personalMessage}
        setPersonalMessage={setPersonalMessage}
      />
    );
  }

  if (!property) {
    return <div>Loading property details...</div>;
  }
  const {
    address,
    details, // Adjusted from propertyImages, price, description, features
    brokerIds, // Adjusted from brokerName
  } = property;

  // Use optional chaining for safe access to details properties
  const { bedrooms, bathrooms, price, district, cityName, streetName, propertyType, imageUrl } = details || {};


  return (
    <div className="listing-prop">

      <div className="top-fixed-container">
      <div className="brand">
        <img className="IMG" alt="" src="https://i.ibb.co/TbH49Cr/luxium.png"/>
      </div>
      <div className="links">
        <div className="link">Find a home</div>
        <div className="link">Mortage Calculator</div>
        <div className="link">Find a broker</div>
        <div className="link">Saved properties</div>
      </div>      
    </div>
    
    <div className="content-div">
    <div className="address-bar">
        <p className="address">{address}</p>
      </div>

      <div className="overlap">
        <div className="box">
          <Carousel useKeyboardArrows={true} style={{ maxWidth: "300px" }}>
            {/* Adjusted to use imageUrl from details */}
            <div className="slide">
              <img alt="Property" src={imageUrl} />
            </div>
          </Carousel>
        </div>
      </div>
      
    <div className="price-section">
        <div className="price">{price}</div>
        <p className="tax-info">USD (incl. of all taxes)</p>
      </div>

      <div className="description">
        {/* Adjusted to show city and district */}
        <p>{cityName}, {district}</p>
      </div>
      <Feature title="Bedrooms:" content={bedrooms} />
      <Feature title="Bathrooms:" content={bathrooms} />
      <Feature title="Property Type:" content={propertyType} />
      <Feature title="Street Name:" content={streetName} />

       

        <div className="actions">
        <div className="request-visit">
            <button onClick={() => setIsFrameVisible(true)}>
              Request a Visit
            </button>
          </div>
          <div className="save-to-fav">Save to Favorite</div>
          <div className="submit-offer">
            <button onClick={() => setShowOfferForm(true)}>
              Submit Offer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};