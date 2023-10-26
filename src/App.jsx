import React from 'react';
import {LandingPage} from './Landing component/LandingPage';
import {OurFeature} from './Feature component';
import {FeaturedProperties} from './FeaturedProperties';
import {Team} from './FeaturedBroker';
import {Cta} from './newsletter';
import {Mortgcalc} from './mortgCalc component/mortgcalc';
import {PropertyList} from './Listing component';
import {PropertyList} from './Listing component';
import{ListingProp} from './ListingProp';

const App = () => {
  return (
    <div className="app">
      <LandingPage />
      <OurFeature />   
      <FeaturedProperties/>   
      <Team/> 
      <Cta/>
      <PropertyList/>
      {/*<Mortgcalc/>*/}
       {/*<ListingProp/>*/}
    </div>
  );
};

export default App;
