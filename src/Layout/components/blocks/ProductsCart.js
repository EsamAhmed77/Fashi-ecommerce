import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//
import { LoadCart } from "../../../redux/action";

const ProductsCart = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(LoadCart())
  }, [dispatch]);

  const [ quantity, setQuantity ] = useState(1);
  function incrementQuantity (q, id) {
    const newQuantity = parseInt(q);
    setQuantity( newQuantity + 1);
    cart[id].quantity = newQuantity + 1;
    cart[id].total = (cart[id].quantity * cart[id].price).toFixed(2);
  }

  // function decrementQuantity (q, id) {
  //   const newQuantity = parseInt(q);
  //   setQuantity( newQuantity - 1);
  //   cart[id].quantity = newQuantity + 1;
  //   cart[id].total = (cart[id].quantity * cart[id].price).toFixed(2);
  // }

  return (
    <div className={`products-cart ${props.show}`}>
      <div className="cart-header">
        Fashe
      </div>
      <div className="cart">
        <div className="all-products">
          {
              (cart.map((product,id) => (
                  <div key={id}>
                    <div className="product">
                      <div className="product-details">
                        <a href="/">{product.title}</a>
                        <div className="price-quantity">
                          <span>{product.quantity} x {product.price} = {product.total}</span>
                          <button onClick={() => incrementQuantity(quantity, id)} className="quantity-control">
                            increment
                          </button>
                        </div>
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
