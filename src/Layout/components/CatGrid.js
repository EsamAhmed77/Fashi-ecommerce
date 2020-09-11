////categories using grid css//
import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to="/">{register}</Link>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/cart">{productType}</Link>
                </>
              )}
            </div>
          )
        )}
      </Container>
    </div>
  );
};

export default CatGrid;
