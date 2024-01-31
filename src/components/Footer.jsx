import React from "react";
import FooterPage from "../assets/Img/FooterPage.png";
const Footer = () => {
  return (
    <div className="container footer">
      <div className="footerCard">
        <div className="footerInfo">
          <p>Join 100 Compannies who boost their business with Product</p>
          <h2>Product</h2>
          <button>Get This</button>
        </div>
        <div>
          <img src={FooterPage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
