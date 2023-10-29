import React, { useState } from "react";
import "./style.css";

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Kathryn Murphy",
      avatar: "https://i.ibb.co/M2LJjHY/Staci.webp",
      email: "kathryn@example.com",
    },
    {
      name: "Floyd Miles",
      avatar: "https://i.ibb.co/r0N3Ffb/Jimbo.webp",
      email: "floyd@example.com",
    },
    {
      name: "Floyd Miles",
      avatar: "https://i.ibb.co/s1yGF6k/static1-squarespace.jpg",
      email: "floyd@example.com",
    },
    {
      name: "Ronald Richards",
      avatar: "https://i.ibb.co/vVDbJxs/688-6883042-boss-baby-triplets-png-png-download-transparent-png.png",
      email: "ronald@example.com",
    },
  ];

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
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="element"
              onClick={() => setSelectedMember(member.name === selectedMember ? null : member.name)}
            >
              <div className="team-member">
                <img className="avatar-mask" alt="Avatar mask" src={member.avatar} />
                <div className="div-2">
                  <div className="title-2">{member.name}</div>
                  <button className="sub-title">See More</button>
                  {member.name === selectedMember && (
                    <div className="contact">Email: {member.email}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
