import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; // Add the missing imports
import urls from '../urls';

export const BrokerProfile = () => {
  const [broker, setBroker] = useState({
    id: "65628153db74f873d1f20071",
    name: "zineb",
    email: "",
    phone: "",
    agency: "zineb's agency",
    licenseNum: "",
    experience: 123,
    imageUrl: ""
  });
  const { brokerId } = useParams(); // Get broker ID from URL

  useEffect(() => {
    const fetchBrokerProfile = async () => {
      try {
        const response = await urls.brokersSearch.getBrokerById(brokerId);
        setBroker(response);
      } catch (error) {
        console.error('Error fetching broker profile:', error);
      }
    };

    fetchBrokerProfile();
  }, [brokerId]);

  return (
    <div className="broker-profile">

      {/* Broker's Personal Details */}
      <div className="broker-details">
        <img src={broker.imageUrl ? broker.imageUrl : ""} alt={broker.name} className="broker-image" />
        <h1>{broker.name ? broker.name : ""}</h1>

        <div className="info-box">
          <p>{broker.title ? broker.title : ""}</p>
          <div className="contact-icons">
            <span>📧</span> <p>{broker.email ? broker.email : ""}</p>
            <span>📞</span> <p>{broker.phone ? broker.phone : ""}</p>
          </div>
          <p className="agency">{broker.agency ? broker.agency : ""}</p>
          <p className="agency-address">{broker.address ? broker.address : ""}</p>
        </div>
      </div>

      {/* More Information Section */}
      <div className="more-info">
        <h2>More information</h2>
        <ul>
          <li>Experience: {broker.experience ? broker.experience : ""} years</li>

          {/* Add more details as needed */}
        </ul>
      </div>
    </div>
  );
};
