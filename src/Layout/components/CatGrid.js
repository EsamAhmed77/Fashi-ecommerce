////categories using grid css//
import React from "react";
import "./style/cat-grid.scss";
import Container from "react-bootstrap/Container";

const CatGrid = () => {
  return (
    <div className="cat-grid mr-auto ml-auto">
      <Container>
        <div className="category box1">
          <img className="w-100" src="img/banner-02.jpg" alt="dresses" />
          <a href="/">dresses</a>
        </div>
        <div className="category box4">
          <img className="w-100" src="img/banner-05.jpg" alt="Glasses" />
          <a href="/">glasses</a>
        </div>
        <div className="category box2">
          <img className="w-100" src="img/banner-03.jpg" alt="dresses" />
          <a href="/">watches</a>
        </div>
        <div className="category box5">
          <img className="w-100" src="img/banner-07.jpg" alt="Glasses" />
          <a href="/">footerwear</a>
        </div>
        <div className="category box3">
          <img className="w-100" src="img/banner-04.jpg" alt="dresses" />
          <a href="/">Bags</a>
        </div>
        <div className="category-offer box6">
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
      </Container>
    </div>
  );
};

export default CatGrid;
