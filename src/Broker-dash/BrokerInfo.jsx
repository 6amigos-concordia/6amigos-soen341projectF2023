import React from 'react';
import './BrokerInfo.css'; // Ensure this CSS file exists and is styled correctly

const BrokerInfo = ({ info }) => {
  return (
    <div className="broker-info">
      <p>Name: {info.name}</p>
      <p>Email: {info.email}</p>
      <p>Phone: {info.phone}</p>
      {/* Add more info here if needed */}
    </div>
  );
};

export default BrokerInfo;
