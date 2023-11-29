import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';
import { Search } from '../SearchBrokers/Search';
import api from '../api'; // Ensure this is correctly pointing to your API setup

export const BrokerList = () => {
  const [brokers, setBrokers] = useState([]);

  useEffect(() => {
    const fetchBrokers = async () => {
      try {
        const data = await api.brokers.allBrokers(); // Corrected API call
        setBrokers(data); // Set the data received from the API
      } catch (error) {
        console.error('Error fetching brokers:', error);
      }
    };

    fetchBrokers();
  }, []);

  return (
    <div className="broker-list">
      <div className="Navbar">
        <NavBarLogo />
      </div>
      <div className="Searchbar">
        <Search />
      </div>
      <div className='Postings'>
        {brokers.map((broker) => (
          <div className="property" key={broker.id}>
            <Link to={`/broker/${broker.id}`}>
              <img src={broker.imageUrl} alt={broker.name} className="property-image" />
              <div className="property-details">
                <h2>{broker.name}</h2>
                <p><strong>Email:</strong> {broker.email}</p>
                <p><strong>Phone:</strong> {broker.phone}</p>
                <p><strong>Agency:</strong> {broker.agency}</p>
                <p><strong>License Number:</strong> {broker.licenseNum}</p>
                <p><strong>Experience:</strong> {broker.experience}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
