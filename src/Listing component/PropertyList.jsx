import React, { useState } from 'react';
import './PropertyList.css';
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';
import { Search } from '../Search component/screens/Search';

const properties = [
  { id: 1, name: 'Property 1', price: 2000000, image: 'https://i.ibb.co/85wDgBm/Eleonon-House.jpg' },
  { id: 2, name: 'Property 2', price: 2500000, image: 'https://i.ibb.co/F6wxK8w/Tour-the-Homes-Designed-by-Hollywood-s-Newest-A-List-Architect.jpg' },
  { id: 3, name: 'Property 3', price: 1800000, image: 'https://i.ibb.co/bWf5j8v/Custom-Mantels-UT-Stone-Mountain-Castings-Design.jpg' },
  { id: 4, name: 'Property 4', price: 3000000, image: 'https://i.ibb.co/9bW0w7B/The-12-000-000-Montreal-Mansion-You-ll-Want-To-Buy-Right-Meow.jpg' },
  { id: 5, name: 'Property 5', price: 2200000, image: 'https://i.ibb.co/zJYdCZk/image.jpg' },
  { id: 6, name: 'Property 6', price: 3700000, image: 'https://i.ibb.co/48YZtTt/2021-Dream-Home.jpg' },
  { id: 7, name: 'Property 7', price: 1900000, image: 'https://i.ibb.co/dWjqQrS/2-Story-home-gallery.jpg' },
  { id: 8, name: 'Property 8', price: 2800000, image: 'https://i.ibb.co/CBZTxgj/Exteriors-Gallery.jpg' },
  { id: 9, name: 'Property 9', price: 4000000, image: 'https://i.ibb.co/5rxyzDR/House-Plan-1020-00083-European-Plan-4-381-Square-Feet-4-Bedrooms-4-5-Bathrooms.jpg' },
  { id: 10, name: 'Property 10', price: 3200000, image: 'https://i.ibb.co/DDbtcs0/17-Gorgeous-Traditional-Home-Exterior-Designs-You-Will-Find-Inspiration-In.jpg' },
  
];
export const PropertyList = () => {
  const [favoritedProperties, setFavoritedProperties] = useState([]);

  const handleInterestToggle = (propertyId) => {
    if (favoritedProperties.includes(propertyId)) {
      // Remove from favorites
      setFavoritedProperties((prevFavoritedProperties) =>
        prevFavoritedProperties.filter((id) => id !== propertyId)
      );
    } else {
      // Add to favorites
      setFavoritedProperties((prevFavoritedProperties) => [...prevFavoritedProperties, propertyId]);
    }
  };
  return (
    <div className="property-list">

      <div className="Navbar" >
      <NavBarLogo/>
      </div>

      <div className="Searchbar">
      <Search/>
      </div>
     
       <div className='Postings'>

      {properties.map((property) => (
        <div className="property" key={property.id}>
          <img src={property.image} alt={property.name} className="property-image" />
          <div className="property-details">
            <h2>{property.name}</h2>
            <p>Price: ${property.price}</p>
            <button
  className={`favorite-button ${favoritedProperties.includes(property.id) ? 'favorited' : ''}`}
  onClick={() => handleInterestToggle(property.id)}
>
  ♥
</button>
          </div>
        </div>
      ))}
       </div>
       
    </div>
  );
}; 