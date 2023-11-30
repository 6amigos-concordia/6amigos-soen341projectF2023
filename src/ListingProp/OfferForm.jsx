import "./style.css";
import React from "react";
import axios from 'axios';



// Full-Page Offer Form Component
export const OfferForm = ({
    onClose,
    onSubmit,
    offerPrice,
    brokerName,
    brokerEmail,
    brokerLicenseNum,
    Agency,
    buyerName,
    buyerAddress,
    buyerEmail,
    addressProperty,
    deedOfSaleDate,
    occupancyDate,
  }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/offers/add', {
                offerPrice,
                brokerName,
                brokerEmail,
                brokerLicenseNum,
                Agency,
                buyerName,
                buyerAddress,
                buyerEmail,
                addressProperty,
                deedOfSaleDate,
                occupancyDate,
            });
            alert('Offer Submitted:', response.data);
            // handle success (maybe close the form or show a success message)
        } catch (error) {
            console.error('Error submitting offer:', error);
            // handle error
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
           
              <input type="number" value={offerPrice}  />
          </label>
        
          <label>
            Broker Name:
            <input type="text" value={brokerName}  />
          </label>
          <label>
            Broker Email:
            <input type="email" value={brokerEmail}  />
          </label>
          <label>
            Broker License Number:
            <input type="text" value={brokerLicenseNum}  />
          </label>
          <label>
            Agency:
            <input type="text" value={Agency}  />
          </label>
          <label>
            Buyer Name:
            <input type="text" value={buyerName}  />
          </label>
          <label>
            Buyer Address:
            <input type="text" value={buyerAddress}  />
          </label>
          <label>
            Buyer Email:
            <input type="email" value={buyerEmail}  />
          </label>
          <label>
            Address Property:
            <input type="text" value={addressProperty}  />
          </label>
          <label>
            Deed of Sale Date:
            <input type="text" value={deedOfSaleDate} />
          </label>
          <label>
            Occupancy Date:
            <input type="text" value={occupancyDate} />
          </label>
  
          <button type="submit">Submit Offer</button>
          <button  onClick={onClose}>
          Close
        </button>
        </form>
      </div>
    );
  };
  export default OfferForm;