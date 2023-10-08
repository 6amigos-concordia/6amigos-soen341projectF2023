import React from 'react';
import {LandingPage} from './Landing component/LandingPage';
import {OurFeature} from './Feature component';
import {FeaturedProperties} from './FeaturedProperties'
import {Team} from './FeaturedBroker'
import {Cta} from './newsletter'

const App = () => {
  return (
    <div className="app">
      <LandingPage />
      <OurFeature />   
      <FeaturedProperties/>   
      <Team/>   
      <Cta/>
    </div>
  );
};

export default App;
