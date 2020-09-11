import React from "react";
import { Link } from "react-router-dom";
import "./style/timer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Counter from "./blocks/Timer";

const Timer = () => {
  return (
    <div className="timer-section">
      <Container>
        <Row>
          <Col sm={10} md={8} lg={6} className="m-auto">
            <div className="section-img-container md-margin">
              <img className="w-100" src="img/banner-08.jpg" alt="IMG-banner" />
              <div className="img-content">
                <h3>The beauty</h3>
                <h1>lookbook</h1>
                <Link to="/cart">view collection</Link>
              </div>
            </div>
          </Col>
          <Col sm={10} md={8} lg={6} className="m-auto">
            <div className="section-img-container">
              <img
                className="w-100"
                src="img/shop-item-09.jpg"
                alt="IMG-banner"
              />
              <div className="timer-content">
                <Link to="/cart">Gafas sol Hawkers one</Link>
                <div className="prices">
                  <span className="old-price">$29.50</span>
                  <span className="new-price">$15.40</span>
                </div>
                <Counter />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Timer;
