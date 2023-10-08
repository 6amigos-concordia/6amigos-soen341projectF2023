import React from "react";
import "./style.css";

export const Team = () => {
  return (
    <div className="team">
      <div className="div">
        <div className="title-description">
          <div className="title">Featured Brokers</div>
          <p className="description">
            Our team of dedicated brokers is here to guide you through every step of the buying or selling process.
          </p>
        </div>
        <div className="content">
          <div className="element">
            <div className="team-member">
              <img className="avatar-mask" alt="Avatar mask" src="https://i.ibb.co/M2LJjHY/Staci.webp" />
              <div className="div-2">
                <div className="title-2">Kathryn Murphy</div>
                <button className="sub-title">See More</button>
              </div>
              
            </div>
          </div>
          <div className="element">
            <div className="team-member">
              <img className="avatar-mask" alt="Avatar mask" src="https://i.ibb.co/r0N3Ffb/Jimbo.webp" />
              <div className="div-2">
                <div className="title-2">Floyd Miles</div>
                <button className="sub-title">See More</button>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="team-member">
              <img className="avatar-mask" alt="Avatar mask" src="https://i.ibb.co/s1yGF6k/static1-squarespace.jpg" />
              <div className="div-2">
                <div className="title-2">Floyd Miles</div>
                <button className="sub-title">See More</button>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="team-member">
              <img className="avatar-mask" alt="Avatar mask" src="https://i.ibb.co/vVDbJxs/688-6883042-boss-baby-triplets-png-png-download-transparent-png.png" />
              <div className="div-2">
                <div className="title-2">Ronald Richards</div>
                <button className="sub-title">See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
