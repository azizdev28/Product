import React from "react";
import { Header } from "../components/Header";
import Main from "../components/Main";

const Home = ({ handleClick }) => {
  return (
    <div className="container">
      <Header handleClick={handleClick} />
      <Main />
    </div>
  );
};

export default Home;
