import React, { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import LogoProduct from "../assets/Img/LogoProduct.svg";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = ({ handleClick }) => {
  const [open, setOpen] = useState(false);

  const handleClickBurger = () => {
    setOpen(!open);
  };

  return (
    <div className="container">
      <div className="HeroNavbar">
        <div className="Logo">
          <img src={LogoProduct} alt="" />
          <h3>Product</h3>
        </div>

        <div className={`NavbarLine ${setOpen ? "open" : ""}`}>
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

          <span className="darkMode">
            <CgDarkMode className="DarkMode" onClick={handleClick} />
          </span>
        </div>
        <a href="#" className="BtnBurger">
          <CiMenuBurger className="btn" onClick={handleClickBurger} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
