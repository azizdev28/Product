import React from "react";

const Table = () => {
  return (
    <div className="container Table">
      <div className="TableInfo">
        <h3>Price Table</h3>
        <span>We offer competitive price</span>
      </div>
      <div className="TableCards">
        <div className="TableCard">
          <h4>Free</h4>
          <p>Brief price description</p>
          <div className="CardItem">
            <h2>0</h2>
            <div className="CardList">
              <span>$</span>
              <p>Per / month</p>
            </div>
          </div>
          <p>Only 2 Operators</p>
          <span>Notifications</span>
          <h5>Landing Pages</h5>
          <button>Order Now</button>
        </div>
        <div className="TableCard">
          <h4>Standard</h4>
          <p>Brief price description</p>
          <div className="CardItem">
            <h2>5</h2>
            <div className="CardList">
              <span>$</span>
              <p>Per / month</p>
            </div>
          </div>
          <p>5+ Operators</p>
          <span>Notifications</span>
          <h5>Landing Pages</h5>
          <button>Order Now</button>
        </div>
        <div className="TableCard">
          <h4>Premium</h4>
          <p>Brief price description</p>
          <div className="CardItem">
            <h2>10</h2>
            <div className="CardList">
              <span>$</span>
              <p>Per / month</p>
            </div>
          </div>
          <p>10+ Operators</p>
          <span>Notifications</span>
          <h5>Landing Pages</h5>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
