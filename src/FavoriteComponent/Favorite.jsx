import React, { useState } from 'react';
import './Favorite.css';
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';

export const Favorite = ({ favoritedProperties, properties }) => {
  const savedProperties = properties ? properties.filter(property => favoritedProperties.includes(property.id)) : [];
  
  const [requests, setRequests] = useState(visitRequests);
  
  const visitRequests = [
    { id: 1, propertyId: 1, status: 'Pending' },
    { id: 2, propertyId: 2, status: 'Confirmed' },
  ];

  const handleStatusChange = (id, newStatus) => {
    // Implement your logic to handle status change
  };

  return (
    <div className="saved-properties">
      <div className="NavBarLogo">
        <NavBarLogo />
      </div>
      <div className='favorites'>
        <h1>Saved Properties</h1>
        {savedProperties.map(property => (
          <div key={property.id}>
            <img src={property.image} alt={property.name} />
            <h2>{property.name}</h2>
            <p>Price: ${property.price}</p>
          </div>
        ))}
      </div>
      <div className="visit-requests">
        <h2>Requested Visits</h2>
        <ul>
          {requests.map(request => (
            <li key={request.id} className="request-item">
              <p>Property ID: {request.propertyId}</p>
              <p>Client Name: {request.clientName}</p>
              <p>Status: {request.status}</p>
              <div className="request-actions">
                <button
                  className="button accept"
                  onClick={() => handleStatusChange(request.id, 'Accepted')}
                >
                  Accept
                </button>
                <button
                  className="button decline"
                  onClick={() => handleStatusChange(request.id, 'Declined')}
                >
                  Decline
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
