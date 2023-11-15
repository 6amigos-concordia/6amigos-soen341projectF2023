import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';
import { Search } from '../SearchBrokers/Search';
import axios from 'axios';




export const BrokerList = () => {
  const [brokers, setBrokers] = useState([]);

  useEffect(() => {
    const fetchBrokers = async () => {
        try {
            const response = await api.get('/api/brokers');
            console.log(response.data); // Log the response data
            setBrokers(response.data);
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
      <img src={broker.image} alt={broker.name} className="property-image" />
      <div className="property-details">
        <h2>{broker.name}</h2>
        <p className="bio"> {broker.bio}</p>
        <p>Listings: {broker.numberOfListings}</p>
      </div>
    </Link>
  </div>
))}

      </div>
    </div>
  );
};
