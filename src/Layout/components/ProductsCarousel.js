import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Container from "react-bootstrap/Container";
//
import "./style/Main.scss";
import "./style/productsCarousel.scss";
import FavoriteProduct from "./blocks/FavoriteProduct";
import { items } from "../../api/api";
class ProductsCarousel extends React.Component {
  state = {
    galleryItems: (items || []).map(
      ({ id, src, title, price, newProduct, discount, saleProduct }) => (
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
      )
    ),
    currentIndex: 0,
  };

  responsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  slideTo = (i) => this.setState({ currentIndex: i });

  onSlideChanged = (e) => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  render() {
    const { galleryItems, currentIndex } = this.state;
    return (
      <div className="products-carousel-section">
        <div className="section-header">
          <h2>Featured Products</h2>
        </div>
        <Container>
          <AliceCarousel
            items={galleryItems}
            responsive={this.responsive}
            autoPlayInterval={1000}
            fadeOutAnimation={false}
            dotsDisabled={true}
            buttonsDisabled={true}
            touchTrackingEnabled={true}
            mouseTrackingEnabled={true}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
          />
          <button
            className="carousel-control prev-btn"
            onClick={() => this.slidePrev()}
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <button
            className="carousel-control next-btn"
            onClick={() => this.slideNext()}
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </Container>
      </div>
    );
  }
}

export default ProductsCarousel;
