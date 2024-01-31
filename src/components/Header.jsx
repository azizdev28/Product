import React from "react";
import Navbar from "./Navbar";

export const Header = ({ handleClick }) => {
  return (
    <div>
      <Navbar handleClick={handleClick} />
    </div>
  );
};
