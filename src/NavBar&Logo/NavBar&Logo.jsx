import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Landing component/components landing/Button';
import { ButtonSecondary } from '../Landing component/components landing/ButtonSecondary';

import "./style.css";

export const NavBarLogo = () => {
  const navigate = useNavigate();

  const handleFindHomeClick = () => {
    console.log('Find a Home button clicked');
    navigate('/property-listing');
  };

  const MortgcalcClick = () => {
    console.log('Mortgage Calc button clicked');
    navigate('/Mortgcalc');
  };
  const handleFindBrokerClick = () => {
    console.log('Find a broker button clicked');
    navigate('/BrokerList');
  };
  const handleFindBrokerDashClick = () => {
    console.log('Broker Dashboard clicked');
    navigate('/BrokerDash');
  };
  const handleFavoriteClick = () => {
    console.log('Favorite Clicked');
    navigate('/Favorite');
  };

  return (
    <div className="header">
      <div className="top-fixed-container">
        <div className="brand">
          <Link to="/">
            <img className="IMG" alt="" src="https://i.ibb.co/zh7bVNh/luxium.png" />
          </Link>
        </div>
        <div className="hamburger-menu">
          <div className="links">
            <div className="link">
              <Link to="/property-listing" onClick={handleFindHomeClick}> Find a home </Link>
            </div>
            <div className="link">
              <Link to="/Mortgcalc" onClick={MortgcalcClick}> Mortage Calculator </Link>
            </div>
            <div className="link">
              <Link to="/BrokerList" onClick={handleFindBrokerClick}> Find a broker </Link>
            </div>
            <div className="link">
              <Link to="/BrokerDash" onClick={handleFindBrokerDashClick}>Dashboard </Link>
            </div>
            <div className="link">
              <Link to="/Favorite" onClick={handleFavoriteClick}> Favorite </Link>
            </div>
          </div>
        </div>
        <div className="signing">
          <ButtonSecondary className="log-in2" text="Log in" textClassName="button-secondary-instance" />
          <Button className="sign-up" divClassName="design-component-instance-node" frameClassName="button-instance" />
        </div>
      </div>
    </div>
  );
};
