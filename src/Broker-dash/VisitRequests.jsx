import React from 'react';
import './VisitRequests.css'; // Ensure this CSS file exists and is styled correctly

const VisitRequests = ({ visitRequests }) => {
  return (
    <div className="visit-requests">
      <ul>
        {visitRequests.map(request => (
          <li key={request.id}>
            <span>Property ID: {request.propertyId}</span>
            <span>Client Name: {request.clientName}</span>
            <span>Status: {request.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitRequests;
