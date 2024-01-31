import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import Product from "./Product";
import ContentsStrategies from "./ContentsStrategies";
import Table from "../components/Table";

const Main = () => {
  return (
    <div>
      <HeaderWrapper />
      <Product />
      <ContentsStrategies />
      <Table />
    </div>
  );
};

export default Main;
