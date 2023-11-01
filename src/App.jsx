import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LandingPage } from './Landing component/LandingPage';
import { OurFeature } from './Feature component';
import { FeaturedProperties } from './FeaturedProperties';
import { Team } from './FeaturedBroker';
import { Cta } from './newsletter';
import { PropertyList } from "./Listing component";
import {Mortgcalc} from './Mortgcalc';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PropertyList, PropertyDetail } from './Listing component';
import{BrokerList} from './BrokerList'





import { Frame } from './Frame/Frame';
import { ListingForm } from "./ListingForm/ListingForm";
import { ListingProp } from "./ListingProp/ListingProp";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
              <OurFeature />
              <FeaturedProperties />
              <Team />
              <Cta />
            </>
          } />
          <Route path="/property-listing" element={<PropertyList />} />
          <Route path="/Mortgcalc" element={<Mortgcalc />} />
          <Route path="/BrokerList" element={<BrokerList />} />
          <Route path="/" element={<PropertyList />} />
        <Route path="/property/:id" element={<PropertyDetail />} />

        <Route path="/" element={<PropertyList />} />
        <Route path="/property/:id" element={<ListingProp />} />

      
       

    
  
          
           {/*<ListingProp/>*/}
          {/*<PropertyList/>*/}
          {/*<ListingProp/>*/}
          {/*<Frame/>*/}
          {/*<ListingForm/>*/}
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;