import React from "react";

const ProductsCart = (props) => {
  return (
    <div className={`products-cart ${props.show}`}>
      <div className="cart">
        <div className="all-products">
          <div className="product">
            <div className="product-img">
              <img src="img/item-cart-01.jpg" alt="product-1" />
              <span>X</span>
            </div>
            <div className="product-details">
              <a href="/">White Shirt With Pleat Detail Back</a>
              <span>1 x $19.00</span>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img src="img/item-cart-02.jpg" alt="product-2" />
              <span>X</span>
            </div>
            <div className="product-details">
              <a href="/">Converse All Star Hi Black Canvas</a>
              <span>1 x $39.00</span>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img src="img/item-cart-03.jpg" alt="product-3" />
              <span>X</span>
            </div>
            <div className="product-details">
              <a href="/">Nixon Porter Leather Watch In Tan</a>
              <span>1 x $17.00</span>
            </div>
          </div>
        </div>
        <div className="total-price text-right">Total: $75.00</div>
        <div className="cart-btns">
          <a href="/">VIEW CART</a>
          <a href="/">CHECK OUT</a>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
