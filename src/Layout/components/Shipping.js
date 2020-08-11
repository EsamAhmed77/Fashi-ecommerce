import React from "react";
import "./style/shipping.scss";

const Shipping = () => {
  return (
    <div className="shipping">
      <div className="shipping-offers">
        <h4>Free Delivery Worldwide</h4>
        <a href="/">Click here for more info</a>
      </div>
      <div className="shipping-offers divider">
        <h4>30 Days Return</h4>
        <span>Simply return it within 30 days for an exchange</span>
      </div>
      <div className="shipping-offers">
        <h4>Store Opening</h4>
        <span>Shop open from Monday to Sunday</span>
      </div>
    </div>
  );
};

export default Shipping;
