import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './Landing component/LandingPage';
import { OurFeature } from './Feature component';
import { FeaturedProperties } from './FeaturedProperties';
import { Team } from './FeaturedBroker';
import { Cta } from './newsletter';
import { PropertyList } from "./Listing component"; // Import PropertyList
import { PropertyDetail } from "./Listing component"; // Import PropertyList
import {Mortgcalc} from './Mortgcalc';
import {BrokerList} from './BrokerList';
import { ListingProp } from "./ListingProp/ListingProp"; // Import ListingProp
import { BrokerProfile } from "./BrokerProfile/BrokerProfile";
import { ListingProp } from "./ListingProp/ListingProp";
import {BrokerDashboard} from "./Broker-dash/BrokerDashboard";


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
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/listing/:id" element={<ListingProp />} />
          <Route path="/BrokerDash" element={<BrokerDashboard/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
