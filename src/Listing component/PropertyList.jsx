import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api'; // Ensure this path is correct
import './PropertyList.css';
import { NavBarLogo } from '../NavBar&Logo/NavBar&Logo';
import { Search } from '../Search component/screens/Search';

export const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [favoritedProperties, setFavoritedProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const data = await api.properties.getAllProperties();
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    const handleInterestToggle = (propertyId) => {
        if (favoritedProperties.includes(propertyId)) {
            setFavoritedProperties(prev => prev.filter(id => id !== propertyId));
        } else {
            setFavoritedProperties(prev => [...prev, propertyId]);
        }
    };

    return (
        <div className="property-list">
            <div className="Navbar">
                <NavBarLogo />
            </div>
            <div className="Searchbar">
                <Search />
            </div>
            <div className="Postings">
                {properties.map(property => (
                    <div className="property" key={property.id}>
                        {/* Update Link to point to ListingProp */}
                        <Link to={`/property/${property.id}`}> 
                            <img src={property.image} alt={property.name} className="property-image" />
                            <div className="property-details">
                                <h2>{property.name}</h2>
                                <p>Price: ${property.price}</p>
                            </div>
                        </Link>
                        <button
                            className={`favorite-button ${favoritedProperties.includes(property.id) ? 'favorited' : ''}`}
                            onClick={() => handleInterestToggle(property.id)}
                        >
                            ♥
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
