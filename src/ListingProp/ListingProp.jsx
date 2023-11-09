import React, { useState } from "react";
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

  // State variables for the listing and offer form
  const [address, setAddress] = useState('');
  const [propertyImages, setPropertyImages] = useState([]);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState({
    appliances: '',
    generalFeatures: '',
    interiorFeatures: '',
    exteriorFeatures: '',
    flooring: '',
    view: '',
    heatingCooling: '',
    amenitiesNearby: ''
  });
  const [listingStatus, setListingStatus] = useState('');
  const [brokerName, setBrokerName] = useState('');
  const [isFrameVisible, setIsFrameVisible] = useState(false);
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [offerPrice, setOfferPrice] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');

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
        {propertyImages.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt="Property" src={URL} />
          </div>
        ))}
      </Carousel>
    </div>
    </div>
      
    <div className="price-section">
        <div className="price">{price}</div>
        <p className="tax-info">USD (incl. of all taxes)</p>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <Feature title="Listing Status:" content={listingStatus} />
      <Feature title="Presented by:" content={brokerName} />
      <Feature title="Appliances" content={features.appliances} />
      <Feature title="General Features" content={features.generalFeatures} />
      <Feature title="Interior Features" content={features.interiorFeatures} />
      <Feature title="Exterior Features" content={features.exteriorFeatures} />
      <Feature title="Flooring" content={features.flooring} />
      <Feature title="View" content={features.view} />
      <Feature title="Heating & Cooling" content={features.heatingCooling} />
      <Feature title="Amenities Nearby" content={features.amenitiesNearby} />

       

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

        {/* ... Additional property images or content ... */}
      </div>
    </div>
  );
};
