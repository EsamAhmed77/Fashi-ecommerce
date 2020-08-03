import React from "react";
import "./style/carousel.scss";
//
import Carousel from "react-bootstrap/Carousel";

const OurCarousel = () => {
  return (
    <Carousel indicators={false} fade={true}>
      <Carousel.Item>
        <div
          style={{
            background: `url(${"/img/master-slide-02.jpg"}) center / auto 100% no-repeat`,
          }}
          className="carousel-img"
        ></div>
        <div className="caption">
          <div className="caption-content">
            <h4 className="collection" id="collection-1">
              Women Collection 2020
            </h4>
            <span className="new-arrival" id="new-arrival-1">
              NEW ARRIVALS
            </span>
            <a className="caption-btn" id="caption-btn-1" href="/">
              SHOP NOW
            </a>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            background: `url(${"/img/master-slide-03.jpg"}) center / auto 100% no-repeat`,
          }}
          className="carousel-img"
        ></div>
        <div className="caption">
          <div className="caption-content">
            <h4 className="collection" id="collection-2">
              Women Collection 2020
            </h4>
            <span className="new-arrival" id="new-arrival-2">
              NEW ARRIVALS
            </span>
            <a className="caption-btn" id="caption-btn-2" href="/">
              SHOP NOW
            </a>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            background: `url(${"/img/master-slide-04.jpg"}) center / auto 100% no-repeat`,
          }}
          className="carousel-img"
        ></div>
        <div className="caption">
          <div className="caption-content">
            <div>
              <h4 className="collection" id="collection-3">
                Women Collection 2020
              </h4>
            </div>
            <span className="new-arrival" id="new-arrival-3">
              NEW ARRIVALS
            </span>
            <a className="caption-btn" id="caption-btn-3" href="/">
              SHOP NOW
            </a>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default OurCarousel;
