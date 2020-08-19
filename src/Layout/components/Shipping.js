import React from "react";
import { Link } from "react-router-dom";
import "./style/shipping.scss";

const Shipping = () => {
  return (
    <div className="shipping">
      <div className="shipping-row">
        <div className="shipping-offers">
          <h4>Free Delivery Worldwide</h4>
          <Link to="/Cart">Click here for more info</Link>
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
    </div>
  );
};

export default Shipping;
