import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
//
import "./style/shop.scss";
import "../style/productsCarousel.scss";
//
import NavBar from "../NavBar";
import Footer from "../Footer";
import { PriceFilter, ColorFilter } from "./Filters";
import { shopItems } from "../../../api/api";
import FavoriteProduct from "./FavoriteProduct";
const Shop = () => {
  return (
    <Container className="p-0 m-0" fluid>
      <NavBar />
      <div className="women-shop">
        <div
          className="ws-banner"
          style={{
            backgroundImage: `url(${"img/heading-pages-02.jpg"})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="ws-header">
            <h1>women</h1>
            <h5>New Arrivals Women Collection 2018</h5>
          </div>
        </div>
        <Container>
          <Row className="p-b-60">
            <Col sm={6} md={4} lg={3}>
              <div className="left-side">
                <div className="ws-categories">
                  <div className="cats">
                    <h3>categories</h3>
                    <ul className="list-unstyled">
                      <li>
                        <Link className="cat-links main" to="/Shop">
                          All
                        </Link>
                      </li>
                      <li>
                        <Link className="cat-links" to="/Shop">
                          Women
                        </Link>
                      </li>
                      <li>
                        <Link className="cat-links" to="/Shop">
                          Men
                        </Link>
                      </li>
                      <li>
                        <Link className="cat-links" to="/Shop">
                          Kids
                        </Link>
                      </li>
                      <li>
                        <Link className="cat-links" to="/Shop">
                          Accessories
                        </Link>
                      </li>
                    </ul>
                    <h3>Filter</h3>
                  </div>
                </div>
                <PriceFilter />
                <ColorFilter />
                <div className="search-for-items">
                  <input
                    type="search
                  "
                    placeholder="Search Product..."
                  />
                </div>
              </div>
            </Col>
            <Col sm={6} md={8} lg={9}>
              <div className="selectors">
                <div className="sort-price-select">
                  <div className="sort">
                    <div className="select">
                      <select>
                        <option>Default Sorting</option>
                        <option>Popularity</option>
                        <option>Price: low to high</option>
                        <option>Price: hight to low</option>
                      </select>
                    </div>
                  </div>
                  <div className="sort">
                    <div className="select">
                      <select>
                        <option>Price</option>
                        <option>$0.00-$50.00</option>
                        <option>$50.00-$100.00</option>
                        <option>$100.00-$150.00</option>
                        <option>$150.00-$200.00</option>
                        <option>$200.00+</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="showed-pages">Showing 1–12 of 16 results</div>
              </div>
              <Row>
                {(shopItems || []).map(
                  ({
                    id,
                    src,
                    title,
                    price,
                    newProduct,
                    discount,
                    saleProduct,
                  }) => (
                    <Col key={id} sm={12} md={6} lg={4}>
                      <div className="item p-b-50 m-0">
                        <div
                          className={`item-img ${
                            newProduct ? newProduct : ""
                          } ${saleProduct ? saleProduct : ""}`}
                        >
                          <div className="item-fav-icon">
                            <FavoriteProduct title={title} />
                          </div>
                          <img className="w-100" src={src} alt="" />
                          <Link to="/Cart" className="add-btn">
                            add to cart
                          </Link>
                        </div>
                        <div className="item-description">
                          <Link to="/Cart">{title}</Link>
                          <div>
                            {discount ? (
                              <>
                                <span className="old-price">{price}</span>
                                <span className="new-price">{discount}</span>
                              </>
                            ) : (
                              <span>{price}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Col>
                  )
                )}
              </Row>
              <div className="pages">
                <Link to="/Shop">1</Link>
                <Link to="/Shop">2</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </Container>
  );
};

export default Shop;
