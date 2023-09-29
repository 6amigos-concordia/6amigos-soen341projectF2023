import React from "react";
import { Button } from "../../components/Button";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { ContentCta } from "../../components/CTA"; 
import "./style.css";


export const LandingPage = () => {
  return (
    
    <div className="landing-page">
      <div className="top-fixed-container">
      <div className="brand">
        <img className="IMG" alt="" src="logo.png" />
        <h1 className="Logo-title">LUXIUM</h1>
    
      </div>
      <div className="links">
        <div className="link">Find a home</div>
        <div className="link">Mortage Calculator</div>
        <div className="link">Find a broker</div>
        <div className="link">Saved properties</div>
      </div>
      <div className="signing">
        <ButtonSecondary className="log-in2" text="Log in" textClassName="button-secondary-instance" />
        <Button className="sign-up" divClassName="design-component-instance-node" frameClassName="button-instance" />
      </div>
      </div>
      <ContentCta />
      
    </div>
  );
};
