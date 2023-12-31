import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './Landing component/LandingPage';
import { OurFeature } from './Feature component';
import { FeaturedProperties } from './FeaturedProperties';
import { Team } from './FeaturedBroker';
import { Cta } from './newsletter';
import { PropertyList } from "./Listing component";
import { Mortgcalc } from './Mortgcalc';
import { BrokerList } from './BrokerList';
import { ListingProp } from "./ListingProp/ListingProp";
import { BrokerProfile } from "./BrokerProfile/BrokerProfile";
import { BrokerDashboard } from "./Broker-dash/BrokerDashboard";
import { Favorite } from "./FavoriteComponent/Favorite";
import { Frame } from "./Frame/Frame";
import { AdminDashboard } from "./AdminDashboard/AdminDashboard";
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
              <Frame/>
              <AdminDashboard />
            </>
          } />
          <Route path="/property-listing" element={<PropertyList />} />
          <Route path="/Mortgcalc" element={<Mortgcalc />} />
          <Route path="/BrokerList" element={<BrokerList />} />
          <Route path="/listing/:id" element={<ListingProp />} />
          <Route path="/property/:id" element={<ListingProp />} />

          <Route path="/BrokerDash" element={<BrokerDashboard />} />
          <Route path="/broker/:brokerId" element={<BrokerProfile />} />
          <Route path="/Favorite" element={<Favorite />} /> 
          <Route path= "/Frame" element={<Frame />} />
          <Route path = "/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
