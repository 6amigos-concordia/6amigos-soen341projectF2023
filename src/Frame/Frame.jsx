import React from "react";
import "./style.css";

export const Frame = ({ onClose }) => {

  const submitForm = () => {
    alert("Form Submitted!");
  };

  return (
    <div className="main-frame">
      <div className="content-body-container">
        
        <div className="content-body-header">
          <h1>Request an Appointment</h1>
          {/* Added a close button at the top right corner */}
          <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
        </div>
        
        <div className="content-body">
          <label>
            Type of Request:
            <textarea className="textarea-input"></textarea>
          </label>
          <label>
            Date:
            <input type="date" className="date-input" />
          </label>
          <label>
            Time:
            <input type="time" className="time-input" />
          </label>
        </div>
        
        <div className="content-footer">
          <button className="submit-button" onClick={submitForm}>SUBMIT</button>
          <button className="cancel-button">CANCEL RESERVATION</button>
         
        </div>
        
      </div>
    </div>
  );
};
