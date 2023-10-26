import React, { useState } from "react";
import "./style.css";

export const Frame = () => {
  const [displayFlag, setDisplayFlag] = useState(true);

  const submitForm = () => {
    alert("Form Submitted!");
  };

  const closeFrame = () => {
    setDisplayFlag(false);
  };

  if (!displayFlag) {
    return null;
  }

  return (
    <div className="main-frame">
      <div className="content-body-container">
        
        <div className="content-body-header">
          <h1>Request an Appointment</h1>
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
          <button className="close-button" onClick={closeFrame}>CLOSE</button>
        </div>
        
      </div>
    </div>
  );
};
