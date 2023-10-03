import React from "react";
import { Button } from "../../Landing component/components landing/Button";
import { ButtonSecondary } from "../../Landing component/components landing/ButtonSecondary";
import { ContentCta } from "../../Landing component/components landing/CTA"; 
import {Search} from "../../Search component/screens/Search";
import "./style.css";


export const LandingPage = () => {
  return (
    
    <div className="landing-page">
      <div className="top-fixed-container">
      <div className="brand">
        <img className="IMG" alt="" src="https://i.ibb.co/MBMvKS6/luxium.png"/>
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
       {/*  <Search/> */}
       <Search/>
     
      
    </div>
  );
};
