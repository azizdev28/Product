import React from "react";
import strelka from "../assets/Img/First.png";
import Second from "../assets/Img/second.png";
import Three from "../assets/Img/Three.png";
import Four from "../assets/Img/Four.png";
const Product = () => {
  return (
    <div className="container Product">
      <div className="ProductHeading">
        <h3>Product was Built Specifically for You</h3>
      </div>
      <div className="Cards">
        <div className="Card">
          <span>
            <img src={strelka} alt="Ha" />
          </span>
          <h3>First click tests</h3>
          <p>While most people enjoy casino gambling,</p>
        </div>
        <div className="Card">
          <span className="blue">
            <img src={Second} alt="Ha" />
          </span>
          <h3>First click tests</h3>
          <p>While most people enjoy casino gambling,</p>
        </div>
        <div className="Card">
          <span className="pink">
            <img src={Three} alt="Ha" />
          </span>
          <h3>First click tests</h3>
          <p>While most people enjoy casino gambling,</p>
        </div>
        <div className="Card">
          <span className="orange">
            <img src={Four} alt="Ha" />
          </span>
          <h3>First click tests</h3>
          <p>While most people enjoy casino gambling,</p>
        </div>
      </div>
      <button>SIGN UP NOW</button>
    </div>
  );
};

export default Product;
