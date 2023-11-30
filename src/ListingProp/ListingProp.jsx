import React, { useState, useEffect } from "react";
import api from '../api'; // Update this path to your api.js file
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Frame } from "../Frame/Frame";
import { useParams } from 'react-router-dom';
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';
import {OfferForm} from './OfferForm';

const Feature = ({ title, content }) => (
  <p className="feature">
    <span className="feature-title">{title}</span>
    <span className="feature-content">{content}</span>
  </p>
);

export const ListingProp = () => {
  const { id } = useParams();

  const [property, setProperty] = useState({
    address: "",
    details: {
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      district: "",
      cityName: "",
      streetName: "",
      propertyType: "",
      imageUrl: ""

    },
    appointmentIds: [],
    brokerIds: []
  });
  const [isFrameVisible, setIsFrameVisible] = useState(false);
 
  const [offerPrice, setOfferPrice] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showOfferForm, setShowOfferForm] = useState(false);

  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  const fetchPropertyDetails = async () => {
    setLoading(true);
    try {
      const response = await api.properties.getPropertyById(id);
      setProperty(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching property details:", error);
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {

        console.error(error.request);
      } else {
        console.error('Error', error.message);
      }
      setError(error);
    }

  };












  const handleOfferSubmit = (e) => {
    e.preventDefault();
   
    if (offerPrice.trim() === '') {
      alert('Please enter an offer price.');
      return;
    }
   
    setShowOfferForm(false); 
  };

  if (isFrameVisible) {
    return <Frame onClose={() => setIsFrameVisible(false)} />;
  }

  if (showOfferForm) {
    return (
      <OfferForm
        onClose={() => setShowOfferForm(false)}
        onSubmit={handleOfferSubmit}
      />
    );
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

<div className="Navbar">
        <NavBarLogo />
      </div>

      <div className="content-div">
        <div className="address-bar">
          <p className="address">{address}</p>
        </div>

        <div className="overlap">
          <div className="box">
            <Carousel useKeyboardArrows={true} style={{ maxWidth: "200px",maxHeight: "200px" }}>
              {/* Adjusted to use imageUrl from details */}
              <div className="slide"style={{ maxWidth: "500px",maxHeight: "1%" }}>
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
          <button onClick={() => setShowOfferForm(true)}>Submit Offer</button>
    {showOfferForm && (
      <OfferForm
        onClose={() => setShowOfferForm(false)}
        onSubmit={handleOfferSubmit}
    
      />
    )}
          </div>
        </div>

      </div>
    </div>
  );
};