import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//
import { LoadCart } from "../../../redux/action";

const ProductsCart = (props) => {
  const [productQuantity, setQuantity ] = useState(1)
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(LoadCart())
  }, [dispatch]);

  return (
    <div className={`products-cart ${props.show}`}>
      <div className="cart-header">
        Fashe
      </div>
      <div className="cart">
        <div className="all-products">
          {
              (cart.map(({ id, title, discount, price, quantity }) => ( <div className="product" key={id}>
                  <div className="product-details">
                    <a href="/">{title}</a>
                    <div className="price-quantity">
                      {(discount && price ? (<span> {quantity? quantity : 1} x {discount} </span>) :
                          (<span> {quantity? quantity : 1} x {price}</span>))}
                      <button className="quantity-control">
                        increment
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
        <div>
          <div  className="total-price text-right">Total: </div>
          <div className="cart-btns">
           <Link className="link" to="/cart">
              VIEW CART
            </Link>
            <Link className="link" to="/">
             CHECK OUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
