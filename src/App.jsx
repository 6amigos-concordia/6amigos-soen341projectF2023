import React from 'react';
import {LandingPage} from './Landing component/LandingPage';
import {OurFeature} from './Feature component';

const App = () => {
  return (
    <div className="app">
      <LandingPage />
      <OurFeature />   
    </div>
  );
};

export default App;
