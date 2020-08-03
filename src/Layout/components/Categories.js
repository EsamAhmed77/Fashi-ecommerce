import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//localStyle
import "./style/Main.scss";
import "./style/categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <Container>
        <Row>
          <Col sm={10} md={8} lg={4} className="mr-auto ml-auto">
            <div className="category">
              <img className="w-100" src="img/banner-02.jpg" alt="dresses" />
              <a href="/">dresses</a>
            </div>
            <div className="category">
              <img className="w-100" src="img/banner-05.jpg" alt="Glasses" />
              <a href="/">glasses</a>
            </div>
          </Col>
          <Col sm={10} md={8} lg={4} className="mr-auto ml-auto">
            <div className="category">
              <img className="w-100" src="img/banner-03.jpg" alt="dresses" />
              <a href="/">watches</a>
            </div>
            <div className="category">
              <img className="w-100" src="img/banner-07.jpg" alt="Glasses" />
              <a href="/">footerwear</a>
            </div>
          </Col>
          <Col sm={10} md={8} lg={4} className="mr-auto ml-auto">
            <div className="category">
              <img className="w-100" src="img/banner-04.jpg" alt="dresses" />
              <a href="/">Bags</a>
            </div>
            <div className="category-offer">
              <img className="w-100" src="img/icon/bg-01.jpg" alt="bg" />
              <div className="offer">
                <h2>SIGN UP & GET 20% OFF</h2>
                <p>
                  Be the frist to know about the latest fashion news and get
                  exclu-sive offers
                </p>
                <a href="/">sign up</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
