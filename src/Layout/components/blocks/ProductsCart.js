import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//
import {LoadCart} from "../../../redux/action";
import {database} from "../../../database/config";

const ProductsCart = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  useEffect(() => {
    dispatch(LoadCart())
  }, [dispatch]);

  // eslint-disable-next-line

  console.log(cart)
  return (
      <div className={`products-cart ${props.show}`}>
        <div className="cart-header">
          Fashe
        </div>
        <div className="cart">
          <div className="all-products">
            {(cart.map((product) => {
                  return <div key={product.id}>

                    <div className="product">

                      <img src={product.src} alt={"product"}/>

                      <div className="product-info">

                        <div className="product-info">{product.title}</div>

                        <div className="d-flex justify-content-between align-items-center">

                          <span className="info">{product.quantity} x ${product.price}</span>

                          <div className="quantity">

                            <button
                                onClick={() => {
                                  database.ref('cart/' + product.id).set({
                                    id: product.id,
                                    title: product.title,
                                    price: product.price,
                                    src: product.src,
                                    quantity: (product.quantity + 1),
                                  })
                                      .then(() => dispatch(LoadCart()))
                                      .catch((err) => console.log(err))
                                }}
                            >
                              <i className="fas fa-plus"> </i>
                            </button>

                            <button
                                onClick={() => {
                                  database.ref('cart/' + product.id).set({
                                    id: product.id,
                                    title: product.title,
                                    price: product.price,
                                    src: product.src,
                                    quantity: product.quantity - 1 === 0 ? 1 : (product.quantity - 1),
                                  })
                                      .then(() => dispatch(LoadCart()))
                                      .catch((err) => console.log(err))
                                }}
                            >
                              <i className="fas fa-minus"> </i>
                            </button>

                          </div>

                        </div>

                        <div>
                          <span className="info"> total: {product.quantity * product.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                })
            )
            }
          </div>
          <div className="mt-3">
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
