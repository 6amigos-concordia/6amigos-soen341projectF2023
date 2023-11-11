import React from "react";
import React, { useState } from "react";
import { Arrowsout2 } from "../../icons/Arrowsout2";
import { Bathtub } from "../../icons/Bathtub";
import { Car2 } from "../../icons/Car2";
import "./style.css";

export const Propertice = () => {
  const [offerStatus, setOfferStatus] = useState(""); 
  const [offerStatus1, setOfferStatus1] = useState(""); 
  const [offerStatus2, setOfferStatus2] = useState(""); 

  const handleAcceptOffer = () => {
    setOfferStatus("Accepted"); 
  };

  const handleRejectOffer = () => {
    setOfferStatus("Rejected"); 
  };
  const handleAcceptOffer1 = () => {
    setOfferStatus1("Accepted"); 
  };

  const handleRejectOffer1 = () => {
    setOfferStatus1("Rejected"); 
  };
  const handleAcceptOffer2 = () => {
    setOfferStatus2("Accepted"); 
  };

  const handleRejectOffer2= () => {
    setOfferStatus2("Rejected"); 
  };
  
  return (
    <div className="propertice">
      <div className="div">
        <div className="overlap">
          <div className="div-wrapper">
            <div className="text-wrapper">Properties Offers</div>
          </div>
          <br />
        </div>
      </div>
      <div className="overlap-group">
        <img className="line" alt="Line" src="/img/line-7.svg" />
        <div className="frame-5">
          <div className="frame-wrapper">
            <div className="frame-6">
              <img className="ellipse" alt="Ellipse" src="https://i.ibb.co/MN94v6h/ellipse-1-2.png" />
              <div className="text-wrapper-4">Jenny Wilson</div>
            </div>
          </div>
          <br />
          <div className="frame-7">
            <div className="text-wrapper-5">1234 RUE DU CHALET, MONTRÉAL, QUÉBEC, H9Y 2Z4</div>
            <br />
            <p className="p">
              Nestled amidst the serene surroundings on a quaint street, this exquisite luxury home redefines opulence.
              Boasting a harmonious blend of modern architecture and classic charm, this residence stands as a testament to timeless sophistication.
            </p>
            <br />
            <p className="p">
              1234 Rue du Chalet offers more than just a residence; it provides a lifestyle.
              Located in a prestigious neighborhood, residents enjoy the convenience of nearby amenities, renowned schools, and easy access to the city's cultural and culinary delights.
            </p>
          </div>
          <div className="frame-8">
            <div className="text-wrapper-6">Offer: $ 600 000</div>
          </div>
          <div className="offer-status">{offerStatus}</div>
          <div className="button-container">
            <button className="button-offer" onClick={handleAcceptOffer}>Accept Offer</button>
            <button className="button-offer" onClick={handleRejectOffer}>Decline Offer</button>
          </div>
        </div>
        <div className="frame-9">
          <div className="frame-10">
            <div className="frame-wrapper">
              <div className="frame-6">
                <img className="ellipse" alt="Ellipse" src="https://i.ibb.co/mc8n8vs/ellipse-1.png" />
                <div className="text-wrapper-4">Lily Courrier</div>
              </div>
            </div>
            <br />
            <div className="frame-7">
              <p className="text-wrapper-7">92 AV. ELM WESTMOUNT, QUÉBEC, H5T 4R5</p>
              <br />
              <p className="p">
                Nestled in the heart of Westmount, this exquisite luxury home offers unparalleled elegance and sophistication.
                With its prime location and impeccable design, this residence defines luxury living, renowned restaurants, and cultural attractions.
              </p>
              <br />
              <p className="p">
                Nestled in the heart of Westmount, residents enjoy the convenience of being minutes away from the city's finest amenities.
                The neighborhood boasts tree-lined streets, upscale boutiques.
                Westmount is also renowned for its excellent schools, making it an ideal choice for families seeking a top-tier education for their children.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="text-wrapper-8">Offer: $ 2 400 000</p>
          <div className="offer-status">{offerStatus1}</div>
          <div className="button-container">
            <button className="button-offer" onClick={handleAcceptOffer1}>Accept Offer</button>
            <button className="button-offer" onClick={handleRejectOffer1}>Decline Offer</button>
          </div>
        </div>
      </div>
      <img className="rectangle" alt="Rectangle" src="https://i.ibb.co/85wDgBm/Eleonon-House.jpg" />
      <div className="frame-11">
        <div className="frame-12">
          <div className="frame-13">
            <Car2 className="icon-instance-node" />
            <div className="text-wrapper-9">5</div>
          </div>
          <img className="img" alt="Line" src="/img/line-8.svg" />
          <div className="frame-13">
            <Bathtub className="icon-instance-node" />
            <div className="text-wrapper-9">6</div>
          </div>
          <img className="img" alt="Line" src="/img/line-9.svg" />
          <div className="frame-13">
            <Arrowsout2 className="icon-instance-node" />
            <div className="text-wrapper-9">3,090.98 ft</div>
          </div>
        </div>
      </div>
      <img className="rectangle-2" alt="Rectangle" src="https://i.ibb.co/F6wxK8w/Tour-the-Homes-Designed-by-Hollywood-s-Newest-A-List-Architect.jpg" />
      <div className="frame-14">
        <div className="frame-12">
          <div className="frame-13">
            <Car2 className="icon-instance-node" />
            <div className="text-wrapper-9">6</div>
          </div>
          <img className="img" alt="Line" src="/img/line-8.svg" />
          <div className="frame-13">
            <Bathtub className="icon-instance-node" />
            <div className="text-wrapper-9">5</div>
          </div>
          <img className="img" alt="Line" src="/img/line-9.svg" />
          <div className="frame-13">
            <Arrowsout2 className="icon-instance-node" />
            <div className="text-wrapper-9">2,096.00 ft</div>
          </div>
        </div>
      </div>
      <div className="group">
        <img className="rectangle-3" alt="Rectangle" src="https://i.ibb.co/9bW0w7B/The-12-000-000-Montreal-Mansion-You-ll-Want-To-Buy-Right-Meow.jpg" />
        <div className="frame-15">
          <div className="frame-12">
            <div className="frame-13">
              <Car2 className="icon-instance-node" />
              <div className="text-wrapper-9">4</div>
            </div>
            <img className="img" alt="Line" src="/img/line-9.svg" />
            <div className="frame-13">
              <Bathtub className="icon-instance-node" />
              <div className="text-wrapper-9">3</div>
            </div>
            <img className="img" alt="Line" src="/img/line-8.svg" />
            <div className="frame-13">
              <Arrowsout2 className="icon-instance-node" />
              <div className="text-wrapper-9">2,500.90 ft</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-16">
        <div className="frame-17">
          <div className="frame-wrapper">
            <div className="frame-6">
              <img className="ellipse" alt="Ellipse" src="https://i.ibb.co/yY65DBp/ellipse-1-1.png" />
              <div className="text-wrapper-4">Jane Doe</div>
            </div>
          </div>
          <div className="frame-7">
            <br />
            <p className="text-wrapper-7">120 CH. DU BORD-DU-LAC, Montréal, Québec, H8Z 3T5</p>
            <br />
            <p className="p">
              Nestled along the serene shores of the picturesque Lac Saint-Louis, this exquisite waterfront retreat embodies the epitome of luxury living.
              Set against the backdrop of breathtaking panoramic views, this architectural masterpiece offers an unparalleled blend of sophistication, comfort, and natural beauty.
            </p>
          </div>
          <p className="p">
            Situated in the prestigious neighborhood of Montréal, this home offers the perfect balance of seclusion and convenience.
          </p>
        </div>
        <p className="text-wrapper-8">Offer: $ 1 230 000</p>
        <div className="offer-status">{offerStatus2}</div>
        <div className="button-container">
          <button className="button-offer" onClick={handleAcceptOffer2}>Accept Offer</button>
          <button className="button-offer" onClick={handleRejectOffer2}>Decline Offer</button>
        </div>
      </div>
    </div>

  );
};
