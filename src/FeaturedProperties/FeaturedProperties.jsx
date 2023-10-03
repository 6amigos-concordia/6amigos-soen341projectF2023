import React from "react";
import "./style.css";

export const FeaturedProperties = () => {
  return (
    <div className="featured-properties">
       <div className="highlited-properties">
          <div className="grouped-text">
            <div className="title">Highlighted Listings</div>
            <p className="description">
              Explore our collection of exceptional properties, each handpicked for their unique charm and outstanding
              features. Discover the best in real estate with our highlighted listings.
            </p>
          </div>
        </div>
      <div className="div">
        <img className="image" alt="Image" src="/img/image-5.png" />
        <img className="image" alt="Image" src="/img/image-4.png" />
        <img className="image" alt="Image" src="/img/image-5.png" />
        <img className="image" alt="Image" src="/img/image-5.png" />
        <img className="image" alt="Image" src="/img/image-5.png" />
        <img className="image" alt="Image" src="/img/image-5.png" />

    
      </div>
    </div>
  );
};
