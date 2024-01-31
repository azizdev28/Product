import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import Product from "./Product";
import ContentsStrategies from "./ContentsStrategies";
import Table from "../components/Table";
import WhatClientsSay from "./WhatClientsSay";

const Main = () => {
  return (
    <div>
      <HeaderWrapper />
      <Product />
      <ContentsStrategies />
      <Table />
      <WhatClientsSay />
    </div>
  );
};

export default Main;
