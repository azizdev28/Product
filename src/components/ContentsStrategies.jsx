import React from "react";
import Product1 from "../assets/Img/Product1.png";
import Product2 from "../assets/Img/Product2.png";
import Product3 from "../assets/Img/Product3.png";
const ContentsStrategies = () => {
  return (
    <div className="container ContentsStrategies">
      <div className="ContentsStrategiesInfo">
        <h2> Contents Strategies</h2>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <div className="ContentsStrategiesCards">
        <div className="ContentsStrategiesCard">
          <img src={Product1} alt="ProductBg" />

          <p>
            By <span>Wahid Ari </span>| 03 March 2019
          </p>
          <h3>Motivation Is The First Step To Success</h3>
        </div>
        <div className="ContentsStrategiesCard">
          <img src={Product2} alt="ProductBg" />

          <p>
            By <span>Wahid Ari </span>| 03 March 2019
          </p>
          <h3>Success Steps For Your Personal Or Business</h3>
        </div>
        <div className="ContentsStrategiesCard">
          <img src={Product3} alt="ProductBg" />

          <p>
            By <span>Wahid Ari </span>| 03 March 2019
          </p>
          <h3>Increasing Prosperity With Positive Thinking</h3>
        </div>
      </div>
    </div>
  );
};

export default ContentsStrategies;
