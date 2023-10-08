import React, { useState } from "react";
import { ButtonTextOnly } from "../../components news/ButtonTextOnly";
import { Input } from "../../components news/Input";
import "./style.css";

export const Cta = () => {
  const [email, setEmail] = useState("");  // Step 1: Capture the Email

  const handleSubscribe = () => {
    // Step 2: Handle the Submission
    if (email) {
      // Step 3: Send the Brochure (example API call)
      fetch('/api/sendBrochure', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert("Brochure sent successfully!");
        } else {
          alert("There was an error. Please try again later.");
        }
      });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="CTA">
      <div className="div">
        <div className="shapes">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="rectangle-2" />
          </div>
        </div>
        <div className="subscribe-wrapper">
          <div className="title-description">
            <div className="title">Stay Ahead in Luxury Living</div>
            <p className="description">
            Sign up with your email and receive exclusive updates on elite properties every day.
            </p>
          </div>
          <div className="input-2">
          <input 
            type="email"
            id="email"
            className="input-instance design-component-instance-node" 
            placeholder="Your email here"
            value={email}   
            onChange={e => setEmail(e.target.value)}  
          />
           <ButtonTextOnly 
  className="button-text-only-instance" 
  text="Subscribe"
  onClick={handleSubscribe}
/>


          </div>
        </div>
      </div>
    </div>
  );
};
