import "./style.css";
import React, { useState } from "react";
import axios from 'axios';

export const OfferForm = ({ onClose }) => {
    // State variables for each form field
    const [offerPrice, setOfferPrice] = useState('');
    const [brokerName, setBrokerName] = useState('');
    const [brokerEmail, setBrokerEmail] = useState('');
    const [brokerLicenseNum, setBrokerLicenseNum] = useState('');
    const [agency, setAgency] = useState('');
    const [buyerName, setBuyerName] = useState('');
    const [buyerAddress, setBuyerAddress] = useState('');
    const [buyerEmail, setBuyerEmail] = useState('');
    const [addressProperty, setAddressProperty] = useState('');
    const [deedOfSaleDate, setDeedOfSaleDate] = useState('');
    const [occupancyDate, setOccupancyDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const offerData = {
            offerPrice,
            brokerName,
            brokerEmail,
            brokerLicenseNum,
            agency,
            buyerName,
            buyerAddress,
            buyerEmail,
            addressProperty,
            deedOfSaleDate,
            occupancyDate
        };

        try {
            const response = await axios.post('http://localhost:8080/api/offers/add', offerData);
            alert('Offer Submitted:', response.data);
            // Handle success
        } catch (error) {
            console.error('Error submitting offer:', error);
            // Handle error
        }
    };

    return (
        <div className="offer-form-overlay">
          <button className="close-offer-form" onClick={onClose}>
            Close
          </button>
          <form onSubmit={handleSubmit} className="offer-form">
            <label>
              Offered Price:
              <input
                type="number"
                value={offerPrice}
                onChange={(e) => setOfferPrice(e.target.value)}
              />
            </label>
            <label>
              Broker Name:
              <input
                type="text"
                value={brokerName}
                onChange={(e) => setBrokerName(e.target.value)}
              />
            </label>
            <label>
              Broker Email:
              <input
                type="email"
                value={brokerEmail}
                onChange={(e) => setBrokerEmail(e.target.value)}
              />
            </label>
            <label>
              Broker License Number:
              <input
                type="text"
                value={brokerLicenseNum}
                onChange={(e) => setBrokerLicenseNum(e.target.value)}
              />
            </label>
            <label>
              Agency:
              <input
                type="text"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
              />
            </label>
            <label>
              Buyer Name:
              <input
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
              />
            </label>
            <label>
              Buyer Address:
              <input
                type="text"
                value={buyerAddress}
                onChange={(e) => setBuyerAddress(e.target.value)}
              />
            </label>
            <label>
              Buyer Email:
              <input
                type="email"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
              />
            </label>
            <label>
              Address Property:
              <input
                type="text"
                value={addressProperty}
                onChange={(e) => setAddressProperty(e.target.value)}
              />
            </label>
            <label>
              Deed of Sale Date:
              <input
                type="text"
                value={deedOfSaleDate}
                onChange={(e) => setDeedOfSaleDate(e.target.value)}
              />
            </label>
            <label>
              Occupancy Date:
              <input
                type="text"
                value={occupancyDate}
                onChange={(e) => setOccupancyDate(e.target.value)}
              />
            </label>
    
            <button type="submit">Submit Offer</button>
            <button onClick={onClose}>Close</button>
          </form>
        </div>
      );
    };
    
    export default OfferForm;