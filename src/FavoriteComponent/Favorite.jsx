import React from 'react';
import './Favorite.css';
import "../NavBar&Logo/NavBar&Logo";
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';

export const Favorite = ({ favoritedProperties, properties }) => {
  // Add defensive checks to ensure properties is defined and is an array
  const favoritedListings =
    properties && Array.isArray(properties)
      ? properties.filter(property => favoritedProperties.includes(property?.id))
      : [];

  return (
    <div className="favorited-listings">
      <NavBarLogo />
      <h1>Favorited Properties</h1>
      <div className='favorites'>
        {favoritedListings.map(property => (
          <div key={property.id} className="favorited-property">
            <img src={property.image} alt={property.name} />
            <h2>{property.name}</h2>
            <p>Price: ${property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
