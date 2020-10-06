import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
//
import Container from "react-bootstrap/Container";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {LoadTopProducts, postCart} from "../../redux/action";
//
import "./style/productsCarousel.scss";
//
import FavoriteProduct from "./blocks/FavoriteProduct";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadTopProducts())
  }, [dispatch]);

  const products = useSelector(state => state.topProducts);

  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  return (
      <div className="products-carousel-section">
        <div className="section-header">
          <h2>Featured Products</h2>
        </div>
        <Container>
          <AliceCarousel mouseTrackingEnabled responsive={responsive} dotsDisabled>
            {
              (products || []).map(
                  ({ id, src, title, price, newProduct, discount, saleProduct }) => {
                    return (
                      <div key={id} className="item">
                        <div
                            className={`item-img ${newProduct ? newProduct : ""} ${
                                saleProduct ? saleProduct : ""
                            }`}
                        >
                          <div className="item-fav-icon">
                            <FavoriteProduct title={title} />
                          </div>
                          <img className="w-100" src={src} alt="" />
                          <button onClick={() => {
                            discount? postCart({title, quantity:1 ,total:discount, price:discount}, id) : postCart({price, quantity:1, total:price, title}, id);

                          }} className="add-btn">
                            add to cart
                          </button>
                        </div>
                        <div className="item-description">
                          <Link to="/cart">{title}</Link>
                          <div>
                            {discount ? (
                                <>
                                  <span className="old-price">${price}</span>
                                  <span className="new-price">${discount}</span>
                                </>
                            ) : (
                                <span>${price}</span>
                            )}
                          </div>
                        </div>
                      </div>
                  )
                }
              )
            }
          </AliceCarousel>
        </Container>
      </div>
  );
}