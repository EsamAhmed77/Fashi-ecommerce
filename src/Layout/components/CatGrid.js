////categories using grid css//
import React from "react";
import "./style/cat-grid.scss";
import Container from "react-bootstrap/Container";
import { category } from "../../api/api";

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
