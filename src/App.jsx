import React from 'react';
import {LandingPage} from './Landing component/LandingPage';
import {OurFeature} from './Feature component';
import {FeaturedProperties} from './FeaturedProperties';
import {Team} from './FeaturedBroker';
import {Cta} from './newsletter';
import {Frame} from './booking component/Frame';
import {PropertyList} from './Listing component/PropertyList';

const App = () => {
  return (
    <div className="app">
      <LandingPage />
      <OurFeature />   
      <FeaturedProperties/>   
      <Team/> 
      <Cta/>
      {/*<PropertyList/>*/}
       {/*<ListingProp/>*/}
       {/*<Frame/>*/}
    </div>
  );
};

export default App;
