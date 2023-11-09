import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';
// Removed the duplicate import line
import './style.css';
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';
import { Search } from '../SearchBrokers/Search';
// ... rest of your code ...

const brokers = [
  { 
    id: 1, 
    name: 'Broker 1', 
    numberOfListings: 15, 
    bio: 'Experienced broker specializing in luxury residential properties. Adept at catering to high-end clientele.',
    image: 'https://i.ibb.co/r0N3Ffb/Jimbo.webp' 
  },
  { 
    id: 2, 
    name: 'Broker 2', 
    numberOfListings: 25, 
    bio: 'Distinguished expert in luxury commercial properties with a decade of exclusive dealings.',
    image: 'https://i.ibb.co/r0N3Ffb/Jimbo.webp' 
  },
  { 
    id: 3, 
    name: 'Broker 3', 
    numberOfListings: 5, 
    bio: 'Emerging star in the luxury property scene, bringing fresh insights and impeccable service.',
    image: 'https://i.ibb.co/r0N3Ffb/Jimbo.webp' 
  },
  { 
    id: 4, 
    name: 'Broker 4', 
    numberOfListings: 40, 
    bio: 'Veteran luxury properties broker with unmatched intuition for premium real estate opportunities.',
    image: 'https://i.ibb.co/r0N3Ffb/Jimbo.webp' 

  },
  { 
    id: 5, 
    name: 'Broker 5', 
    numberOfListings: 12, 
    bio: 'Renowned for fostering elite connections and ensuring swift transactions in the luxury market.',
    image: 'https://i.ibb.co/r0N3Ffb/Jimbo.webp' 
  },
  { 
    id: 6, 
    name: 'Broker 6', 
    numberOfListings: 18, 
    bio: 'Specializes in opulent suburban and countryside estates, providing clients with unrivaled local insights.',
    image: 'https://i.ibb.co/r0N3Ffb/Jimbo.webp' 
  },
];

export const BrokerList = () => {
  return (
    <div className="broker-list">
      <div className="Navbar">
        <NavBarLogo />
      </div>

      <div className="Searchbar" data-testid="searchbar">
  <Search />
</div>

      
      <div className='Postings'>
        {brokers.map((broker) => (
          <div className="property" key={broker.id}> {/* Using the 'property' class for styling consistency */}
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
