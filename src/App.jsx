import React from 'react';
import {LandingPage} from './Landing component/LandingPage';
import {OurFeature} from './Feature component';
import {FeaturedProperties} from './FeaturedProperties';
import {Team} from './FeaturedBroker';
import {Cta} from './newsletter';
import {Frame} from './booking component/Frame';
{/*import {Mortgcalc} from './mortgCalc component/mortgcalc';*/}

const App = () => {
  return (
    <div className="app">
      <LandingPage />
      <OurFeature />   
      <FeaturedProperties/>   
      <Team/> 
      <Cta/>
     <Frame/>
      {/*<Mortgcalc/>*/}
    </div>
  );
};

export default App;
