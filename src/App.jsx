import ReactDOM from "react-dom";
import {LandingPage} from './Landing component/LandingPage';
import {OurFeature} from './Feature component';
import {FeaturedProperties} from './FeaturedProperties';
import {Team} from './FeaturedBroker';
import {Cta} from './newsletter';
import {Frame} from './Frame/Frame';
import {PropertyList} from './Listing component/PropertyList';
import {ListingForm} from "./ListingForm/ListingForm";
import {ListingProp} from "./ListingProp/ListingProp";


const App = () => {
  return (
    <div className="app">
      <LandingPage />
      <OurFeature />   
      <FeaturedProperties/>   
      <Team/> 
      <Cta/>
     
      <ListingProp/>
      
      
     
 {/*<PropertyList/>*/}
       {/*<ListingProp/>*/}
       {/*<Frame/>*/}
       {/*<ListingForm/>*/}
       
       

     
    </div>
  );
};

export default App;
