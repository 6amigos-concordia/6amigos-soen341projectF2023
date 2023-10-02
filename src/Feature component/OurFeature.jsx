import React from "react";
import "./style.css";

export const OurFeature = () => {
  return (
    <div className="our-feature">
      <div className="div">
        <div className="wrapper">
          <div className="cards-content">
            <div className="card">
              <div className="headline">Expertise</div>
              <p className="text-wrapper">
                Benefit from our extensive experience and a strong track record of successful real estate transactions
                for expert guidance on your journey.
              </p>
            </div>
            <div className="card">
              <div className="headline-2">Powerful Network</div>
              <p className="text-wrapper">
                Our extensive industry connections grant you access to exclusive listings and valuable insights,
                offering a competitive edge in your real estate endeavors.
              </p>
            </div>
            <div className="card">
              <div className="headline-2">Transparency</div>
              <p className="text-wrapper">
                We pledge to provide you with comprehensive, forthright, and clear information, empowering you to make
                well-informed decisions that align perfectly with your goals and preferences.
              </p>
            </div>
          </div>
          <img className="cover" alt="Cover" src="https://i.ibb.co/R6XSyVh/luxuryhouse.png" />
        </div>
        <p className="title">What Sets Us Apart ?</p>
      </div>
    </div>
  );
};
