////categories using grid css//
import React from "react";
import "./style/cat-grid.scss";
import Container from "react-bootstrap/Container";

const category = [
  {
    id: 1,
    img: "img/banner-02.jpg",
    box: "box1",
    productType: "dresses",
  },
  {
    id: 2,
    img: "img/banner-05.jpg",
    box: "box4",
    productType: "glasses",
  },
  {
    id: 3,
    img: "img/banner-03.jpg",
    box: "box2",
    productType: "watches",
  },
  {
    id: 4,
    img: "img/banner-07.jpg",
    box: "box5",
    productType: "footerwear",
  },
  {
    id: 5,
    img: "img/banner-04.jpg",
    box: "box3",
    productType: "Bags",
  },
  {
    id: 6,
    mainClass: "category-offer",
    img: "img/icon/bg-01.jpg",
    box: "box6",
    offer: "offer",
    header: "SIGN UP & GET 20% OFF",
    paragraph:
      "Be the frist to know about the latest fashion news and get exclu-sive offers",
    register: "sign up",
  },
];
const CatGrid = () => {
  return (
    <div className="cat-grid mr-auto ml-auto">
      <Container>
        {category.map(
          ({
            id,
            img,
            box,
            productType,
            offer,
            header,
            paragraph,
            register,
            mainClass,
          }) => (
            <div
              key={id}
              className={`${mainClass ? mainClass : "category"} ${box}`}
            >
              <img
                className="w-100"
                src={img}
                alt={productType ? productType : "bg"}
              />
              {offer ? (
                <>
                  <div className={offer}>
                    <h2>{header}</h2>
                    <p>{paragraph}</p>
                    <a href="/">{register}</a>
                  </div>
                </>
              ) : (
                <>
                  <a href="/">{productType}</a>
                </>
              )}
            </div>
          )
        )}
        {/* 
        <div className="category-offer box6">
          <img className="w-100" src="" alt="bg" />
          <div className="offer">
            <h2>SIGN UP & GET 20% OFF</h2>
            <p>
              Be the frist to know about the latest fashion news and get
              exclu-sive offers
            </p>
            <a href="/">sign up</a>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default CatGrid;
