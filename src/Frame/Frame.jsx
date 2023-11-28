import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

export const Frame = () => {
  const [formData, setFormData] = useState({
    username: '',
    userEmail: '',
    address: '',
    /*requestType: '',*/
    dateTime: '',
   
  });
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/appointments/add', formData);
      console.log(response.data);
      alert('Form Submitted and email sent!');
      // Reset form or handle success further here
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to submit form');
    }
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      userEmail: '',
      address: '',
      /*requestType: '',*/
      dateTime: '',
      
    });
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="frame">
      <div className="container">
        <div className="header">
          <h1>Request an Appointment</h1>
        </div>
        <form onSubmit={handleSubmit} className="content">
        
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="input-text" />
          </label>
          <label>
            Email:
            <input type="email" name="userEmail" value={formData.email} onChange={handleChange} className="input-text" />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="input-text" />
          </label>
          <label>
            Type of Request:
            <textarea name="requestType" value={formData.requestType} onChange={handleChange} className="input-textarea"></textarea>
          </label>
          <label>
            Date:
            <input type="date" name="dateTime" value={formData.date} onChange={handleChange} className="input-date" />
          </label>
         {/*  <label>
            Time:
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="input-time" />
          </label> */}
          <div className="footer">
            <button type="submit" className="btn-submit">SUBMIT</button>
            <button type="button" className="btn-cancel" onClick={handleCancel}>CANCEL RESERVATION</button>
            <button type="button" className="btn-close" onClick={handleClose}>CLOSE</button>
          </div>
        </form>
      </div>
    </div>
  );
};
