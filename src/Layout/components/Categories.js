import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./style/cat-grid.scss";
import Container from "react-bootstrap/Container";
import { LoadCategories } from "../../redux/action"

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadCategories())
  }, [dispatch])
  const categories = useSelector(state => state.categories)

  return (
    <div className="cat-grid mr-auto ml-auto">
      <Container>
        {Array.isArray(categories) && categories.length? categories.map(
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
        ) : <div>Loading...</div>}
      </Container>
    </div>
  );
};

export default Categories;
