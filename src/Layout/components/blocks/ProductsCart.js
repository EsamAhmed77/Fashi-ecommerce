import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//
import {LoadCart} from "../../../redux/action";

const ProductsCart = (props) => {
  const [ total, setTotal ] = useState(0)
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(LoadCart())
  }, [dispatch]);
  

  function incrementQuantity(q, id) {
    const newQuantity = parseInt(q);
    cart[id].quantity = newQuantity + 1;
    cart[id].total = (cart[id].quantity * cart[id].price).toFixed(2);
    setTotal(cart[id].total)
  }

  function decrementQuantity(q, id) {
    if (q <= 1) {
    const newQuantity = parseInt(q);
    cart[id].quantity = newQuantity - 1;
    cart[id].total = (cart[id].quantity * cart[id].price).toFixed(2);
    }
  }
  return (
      <div className={`products-cart ${props.show}`}>
        <div className="cart-header">
          Fashe
        </div>
        <div className="cart">
          <div className="all-products">
            {
              (cart.map((product, id) => (
                      <div key={id}>
                        <div className="product">
                          <div className="product-info">{product.title}</div>
                          <div className="product-info d-flex justify-content-between align-items-center">
                            <span className={"info"}>{product.quantity} x ${product.price}</span>
                            <span className={"info"}> total: {cart[id].total}</span>
                            <div className="quantity">
                              <button onClick={() => {
                                incrementQuantity(product.quantity, id);
                                setTotal(cart[id].total)
                              }}><i
                                  className="fas fa-plus"></i></button>
                              <button onClick={() => {
                                decrementQuantity(product.quantity, id);
                                setTotal(cart[id].total)
                              }}>
                                <i className="fas fa-minus"></i>
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
