import React from 'react';
import './BrokerDashboard.css'; // Assuming the CSS file is in the same directory

// Properties data as provided earlier
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

// Mock data for visit requests
const visitRequests = [
  { id: 1, propertyId: 1, clientName: 'Client A', status: 'Pending' },
  { id: 2, propertyId: 2, clientName: 'Client B', status: 'Confirmed' },
  // ... additional requests
];

// Broker's information
const brokerInfo = {
  name: 'Haifaa Brokerage',
  email: 'contact@haifaabrokerage.com',
  phone: '+1234567890',
};

const BrokerDashboard = () => {
  return (
    <div className="broker-dashboard">
      <h1>Broker Dashboard</h1>
      
      {/* My Postings Section */}
      <div className="my-postings">
        <h2>My Postings</h2>
        <div className="postings">
          {properties.map((property) => (
            <div className="posting" key={property.id}>
              <img src={property.image} alt={property.name} className="posting-image" />
              <div className="posting-details">
                <h3>{property.name}</h3>
                <p>Price: ${property.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Requested Visits Section */}
      <div className="visit-requests">
        <h2>Requested Visits</h2>
        <ul>
          {visitRequests.map(request => (
            <li key={request.id} className="request-item">
              <p>Property ID: {request.propertyId}</p>
              <p>Client Name: {request.clientName}</p>
              <p>Status: {request.status}</p>
              <div className="request-actions">
                <button className="button accept">Accept</button>
                <button className="button decline">Decline</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Broker Information Section */}
      <div className="broker-info">
        <h2>Broker Information</h2>
        <div className="info-box">
          <p>Name: {brokerInfo.name}</p>
          <p>Email: {brokerInfo.email}</p>
          <p>Phone: {brokerInfo.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default BrokerDashboard;
