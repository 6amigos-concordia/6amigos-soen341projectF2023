import React from "react";
import "./style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Feature = ({ title, content }) => (
  <p className="feature">
    <span className="feature-title">{title}</span>
    <span className="feature-content">{content}</span>
  </p>
);

const images = [
  "https://i.ibb.co/7kxNmJT/localimagereader-ashx.jpg",
  "https://i.ibb.co/7kxNmJT/localimagereader-ashx.jpg",
  "https://i.ibb.co/7kxNmJT/localimagereader-ashx.jpg",
  "https://i.ibb.co/7kxNmJT/localimagereader-ashx.jpg",
  "https://i.ibb.co/7kxNmJT/localimagereader-ashx.jpg",
  "https://i.ibb.co/7kxNmJT/localimagereader-ashx.jpg",
  "https://i.ibb.co/7kxNmJT/localimagereader-ashx.jpg",
  "https://i.ibb.co/7kxNmJT/localimagereader-ashx.jpg",
  "https://i.ibb.co/7kxNmJT/localimagereader-ashx.jpg",]


export const ListingProp = () => {
  return (
    <div className="listing-prop">
      <div className="top-fixed-container">
      <div className="brand">
        <img className="IMG" alt="" src="https://i.ibb.co/TbH49Cr/luxium.png"/>
      </div>
      <div className="links">
        <div className="link">Find a home</div>
        <div className="link">Mortage Calculator</div>
        <div className="link">Find a broker</div>
        <div className="link">Saved properties</div>
      </div>      
    </div>
    
    <div className="content-div">
    <div className="address-bar">
        <p className="address">1234, RUE DU CHALET, MONTREAL, QUEBEC, H4H 2B7</p>
    </div>
    <div className="overlap">


    <div className="box">
    <Carousel useKeyboardArrows={true} style={{ maxWidth: "300px" }}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
    </div>
      

        <div className="price-section">
          <div className="price">$ 1,500,000</div>
          <p className="tax-info"> USD(incl. of all taxes)</p>
        </div>
        <div className="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur, voluptatibus cupiditate id minima autem consequuntur nesciunt! Officiis similique, nisi explicabo provident perspiciatis impedit minima error quia asperiores enim in?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod perferendis vel quidem, iure alias exercitationem ullam saepe placeat aspernatur, accusamus fugiat harum eos culpa commodi ea quae fugit dolor mollitia?</p>
        </div>

        <Feature title="Listing Status:" content="Active" />
        <Feature title="Presented by:" content="Broker name" />
        <Feature title="Appliances" content="Central Air Conditioning, Dishwasher, Dryer, Refrigerator, Washer & Dryer." />
        <Feature title="General Features" content="Fireplace." />
        <Feature title="Interior Features" content="Elevator, Granite Counter Tops." />
        <Feature title="Exterior Features" content="Basketball Court, Outbuilding(s), Tennis Court(s)." />
        <Feature title="Flooring" content="Hardwood." />
        <Feature title="View" content="Panoramic, Water View." />
        <Feature title="Heating & Cooling" content="Electric Heating, Central air conditioning, Air exchanger." />
        <Feature title="Amenities Nearby" content="Locust Valley High School, Locust Valley Middle School." />

       

        <div className="actions">
          <div className="request-visit">Request Visit</div>
          <div className="save-to-fav">Save to Favorite</div>
        </div>

        <div className="property-images">
          {/* ... Any additional images for the property ... */}
        </div>
      </div>
    </div>
  );
};
