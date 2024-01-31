import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import ClientCard from "../assets/Img/ClientCard.png";
import ClientCard1 from "../assets/Img/ClientCard1.png";
import ClientCard2 from "../assets/Img/ClientCard2.png";

const WhatClientsSay = () => {
  const [star, setStar] = useState("");
  const Click = () => {
    setStar("yellow");
  };
  return (
    <div className="container WhatClientsSay">
      <div className="ClientInfo">
        <h2>What Clients Say</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="ClientCardItem">
        <div className="ClientCard">
          <span>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </span>
          <p>
            Product helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="CardPerson">
            <img src={ClientCard} alt="" />
            <div>
              <h3>Wahid Ari</h3>
              <p>Designer</p>
            </div>
          </div>
        </div>
        <div className="ClientCard">
          <span>
            <CiStar onClick={Click} className={star ? "yellow" : ""} />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </span>
          <p>
            Product helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="CardPerson">
            <img src={ClientCard2} alt="" />
            <div>
              <h3>Wahid Ari</h3>
              <p>Designer</p>
            </div>
          </div>
        </div>
        <div className="ClientCard">
          <span>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </span>
          <p>
            Product helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="CardPerson">
            <img src={ClientCard1} alt="" />
            <div>
              <h3>Wahid Ari</h3>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatClientsSay;
