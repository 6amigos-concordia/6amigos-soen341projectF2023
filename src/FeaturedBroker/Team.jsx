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
              <img className="avatar-mask" alt="Avatar mask" src="/img/avatar-mask.png" />
              <div className="div-2">
                <div className="title-2">Kathryn Murphy</div>
                <button className="sub-title">See More</button>
              </div>
              
            </div>
          </div>
          <div className="element">
            <div className="team-member">
              <img className="avatar-mask" alt="Avatar mask" src="/img/avatar-mask-3.png" />
              <div className="div-2">
                <div className="title-2">Floyd Miles</div>
                <button className="sub-title">See More</button>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="team-member">
              <img className="avatar-mask" alt="Avatar mask" src="/img/avatar-mask-2.png" />
              <div className="div-2">
                <div className="title-2">Floyd Miles</div>
                <button className="sub-title">See More</button>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="team-member">
              <img className="avatar-mask" alt="Avatar mask" src="/img/avatar-mask-1.png" />
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
