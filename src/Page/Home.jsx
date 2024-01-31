import React from "react";
import { Header } from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = ({ handleClick }) => {
  return (
    <div className="container">
      <Header handleClick={handleClick} />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
