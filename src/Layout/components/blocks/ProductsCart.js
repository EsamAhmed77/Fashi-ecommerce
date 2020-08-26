import React from "react";
import { Link } from "react-router-dom";
import { cartProducts } from "../../../api/api";

const ProductsCart = (props) => {
  return (
    <div className={`products-cart ${props.show}`}>
      <div className="cart">
        <div className="all-products">
          {cartProducts.map(({ id, img, productTitle, productPrice }) => (
            <div key={id} className="product">
              <div className="product-img">
                <img src={img} alt="product" />
                <span>X</span>
              </div>
              <div className="product-details">
                <a href="/">{productTitle}</a>
                <span>1 x {productPrice}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price text-right">Total: $75.00</div>
        <div className="cart-btns">
          <Link className="link" to="/Cart">
            VIEW CART
          </Link>
          <Link className="link" to="/">
            CHECK OUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
