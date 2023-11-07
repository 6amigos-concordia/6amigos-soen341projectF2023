import React from 'react';
import './style.css'; 

const jimbo = {
  name: 'Jimbo',
  title: 'Broker',
  email: 'jimbo@example.com',
  phone: '04748292827',
  agency: "Jimbo's Agency",
  address: '123 Main St, City, Country',
  experience: 10,
  specialty: 'Residential Properties',
  image: 'https://i.ibb.co/r0N3Ffb/Jimbo.webp',
  properties: [
    {
      id: '12345',
      description: 'Beautiful 3-bedroom apartment in the heart of the city. Close to all amenities. Must see!',
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://i.ibb.co/r0N3Ffb/Jimbo.webp',
      // ... other property details ...
    },
    // ... other properties ...
  ],
};
//<BrokerProfile broker={jimbo} />
export const BrokerProfile = ({ broker }) => {
  return (
    <div className="broker-profile">

      {/* Broker's Personal Details */}
      <div className="broker-details">
        <img src={broker.image} alt={broker.name} className="broker-image" />
        <h1>{broker.name}</h1>

        <div className="info-box">
            <p>{broker.title}</p>
            <div className="contact-icons">
                <span>📧</span> <p>{broker.email}</p>
                <span>📞</span> <p>{broker.phone}</p>
            </div>
            <p className="agency">{broker.agency}</p>
            <p className="agency-address">{broker.address}</p>
        </div>
      </div>

      {/* More Information Section */}
      <div className="more-info">
        <h2>More information</h2>
        <ul>
          <li>Experience: {broker.experience} years</li>
          <li>Specialty: {broker.specialty}</li>
          {/* Add more details as needed */}
        </ul>
      </div>

      {/* Broker's Properties */}
      <div className="broker-properties">
        <h2>Broker's properties</h2>
        
        <div className="properties-grid">
          {broker.properties.map(property => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt="Property" className="property-image" />
              <h3>Property ID: {property.id}</h3>
              <p>{property.description}</p>
              <div className="property-icons">
                <span>🛏️ {property.bedrooms}</span>
                <span>🚿 {property.bathrooms}</span>
                {/* Add more property details/icons as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
