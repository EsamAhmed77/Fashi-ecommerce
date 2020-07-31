import React from "react";
import "./style/carousel.scss";
//
import Carousel from "react-bootstrap/Carousel";

const OurCarousel = () => {
  return (
    <Carousel indicators={false} fade={true}>
      <Carousel.Item className="active">
        <div
          style={{
            background: `url(${"/img/master-slide-02.jpg"}) center / auto 100% no-repeat`,
          }}
          className="carousel-img"
        ></div>
        <div className="caption">
          <div className="caption-content">
            <h4 className="collection">Women Collection 2020</h4>
            <span className="new-arrival">NEW ARRIVALS</span>
            <a className="caption-btn" href="/">
              SHOP NOW
            </a>
          </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <div
          style={{ background: `url(${"/img/master-slide-03.jpg"}) center / auto 100% no-repeat`}}
          className="carousel-img"
        ></div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <div
          style={{ background: `url(${"/img/master-slide-04.jpg"}) center / auto 100% no-repeat`}}
          className="carousel-img"
        ></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default OurCarousel;
