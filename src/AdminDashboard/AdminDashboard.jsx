import React, { useState } from 'react';
import './AdminDashboard.css'; // Make sure this CSS file is in the same directory

export const AdminDashboard = () => {
  const [brokers, setBrokers] = useState([]);
  const [brokerNameToAdd, setBrokerNameToAdd] = useState('');
  const [brokerNameToRemove, setBrokerNameToRemove] = useState('');

  const addBroker = (e) => {
    e.preventDefault();
    if (brokerNameToAdd.trim() && !brokers.includes(brokerNameToAdd)) {
      setBrokers([...brokers, brokerNameToAdd]);
      setBrokerNameToAdd('');
    }
  };

  const removeBroker = (e) => {
    e.preventDefault();
    setBrokers(brokers.filter(broker => broker !== brokerNameToRemove));
    setBrokerNameToRemove('');
  };

  return (
    <div className="AdminDashboard">
      <h1>Admin Dashboard</h1>
      <div className="forms-container">
        <form onSubmit={addBroker} className="broker-form">
          <input 
            type="text" 
            value={brokerNameToAdd} 
            onChange={(e) => setBrokerNameToAdd(e.target.value)} 
            placeholder="Enter broker name to add" 
            required 
          />
          <button type="submit">Add Broker</button>
        </form>
        <form onSubmit={removeBroker} className="broker-form">
          <input 
            type="text" 
            value={brokerNameToRemove} 
            onChange={(e) => setBrokerNameToRemove(e.target.value)} 
            placeholder="Enter broker name to remove" 
            required 
          />
          <button type="submit">Remove Broker</button>
        </form>
      </div>
      <BrokerList brokers={brokers} />
    </div>
  );
};

const BrokerList = ({ brokers }) => {
  return (
    <ul>
      {brokers.map((broker, index) => (
        <li key={index}>{broker}</li>
      ))}
    </ul>
  );
};
