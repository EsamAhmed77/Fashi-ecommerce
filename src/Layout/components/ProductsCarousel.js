import React from "react";
//
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Container from "react-bootstrap/Container";
//
import "./style/Main.scss";
import "./style/productsCarousel.scss";

class ProductsCarousel extends React.Component {
  state = { galleryItems: [4], currentIndex: 0 };

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
        <Container className="p-0">
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
          >
            <div className="item">
              <div className="item-img new-product">
                <div className="item-fav-icon">
                  <i className="far fa-heart"></i>
                </div>
                <img className="w-100" src="/img/item-02.jpg" alt="" />
                <a href="/" className="add-btn">
                  add to cart
                </a>
              </div>
              <div className="item-description">
                <a href="/">Herschel supply co 25l</a>
                <div>
                  <span>$75.00</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-img">
                <div className="item-fav-icon">
                  <i className="far fa-heart"></i>
                </div>
                <img className="w-100" src="/img/item-03.jpg" alt="" />
                <a href="/" className="add-btn">
                  add to cart
                </a>
              </div>
              <div className="item-description">
                <a href="/">Denim jacket blue</a>
                <div>
                  <span>$92.50</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-img">
                <div className="item-fav-icon">
                  <i className="far fa-heart"></i>
                </div>
                <img className="w-100" src="/img/item-05.jpg" alt="" />
                <a href="/" className="add-btn">
                  add to cart
                </a>
              </div>
              <div className="item-description">
                <a href="/">Coach slim easton black</a>
                <div>
                  <span>$165.90</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-img sale-product">
                <div className="item-fav-icon">
                  <i className="far fa-heart"></i>
                </div>
                <img className="w-100" src="/img/item-07.jpg" alt="" />
                <a href="/" className="add-btn">
                  add to cart
                </a>
              </div>
              <div className="item-description">
                <a href="/">Frayed denim shorts</a>
                <div>
                  <span className="old-price">$29.50</span>
                  <span className="new-price">$15.90</span>
                </div>
              </div>
            </div>
          </AliceCarousel>
          <button className="prev-btn" onClick={() => this.slidePrev()}>
            <i class="fas fa-angle-left"></i>
          </button>
          <button className="next-btn" onClick={() => this.slideNext()}>
            <i class="fas fa-angle-right"></i>
          </button>
        </Container>
      </div>
    );
  }
}

export default ProductsCarousel;
