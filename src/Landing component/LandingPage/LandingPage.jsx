import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../Landing component/components landing/Button";
import { Button1 } from "../components landing/Button1"
import { ButtonSecondary } from "../../Landing component/components landing/ButtonSecondary";
import { ContentCta } from "../../Landing component/components landing/CTA";
import { Search } from "../../Search component/screens/Search";
import "./style.css";

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleFindHomeClick = () => {
    console.log('Find a Home button clicked');
    navigate('/property-listing');
  };

  return (
    <div className="landing-page">
      <div className="top-fixed-container">
        <div className="brand">
          <Link to="/">
            <img className="IMG" alt="" src="https://i.ibb.co/TbH49Cr/luxium.png" />
          </Link>
        </div>
        <div className="hamburger-menu">
          <div className="links">
            <div className="link">
              <Link to="/property-listing" onClick={handleFindHomeClick}> Find a home </Link>
            </div>
            <div className="link">Mortage Calculator</div>
            <div className="link">Find a broker</div>
            <div className="link">Saved properties</div>
          </div>
        </div>
        <div className="signing">
          <ButtonSecondary className="log-in2" text="Log in" textClassName="button-secondary-instance" />
          <Button className="sign-up" divClassName="design-component-instance-node" frameClassName="button-instance" />
        </div>
      </div>
      <ContentCta />
      <Search />

    </div>
  );
};
