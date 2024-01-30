import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import LogoProduct from "../assets/Img/LogoProduct.svg";
const Navbar = () => {
  const [dark, setDark] = useState("white");
  const DarkMode = () => {
    setDark("black");
  };
  return (
    <div className="container">
      <div className="HeroNavbar">
        <div className="Logo">
          <img src={LogoProduct} alt="" />
          <h3>Product</h3>
        </div>

        <div className="NavbarLine">
          <ul>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#"> Pricing </a>
            </li>
            <li>
              <a href="#"> Resources</a>
            </li>
          </ul>
          <button>Sign In</button>
          <button>Sign Up</button>

          <MdLightMode className="DarkMode" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
