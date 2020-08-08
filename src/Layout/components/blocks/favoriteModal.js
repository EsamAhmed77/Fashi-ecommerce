import React, { useState } from "react";
import "./style/Main.scss";
import swal from "sweetalert";

const FavoriteProduct = (props) => {
  const [current, setCurrent] = useState("white-heart");

  return (
    <>
      <div
        onClick={(e) => {
          if (current === "white-heart")
            return (
              setCurrent("red-heart"),
              swal(props.title, "is added to wishlist !", "success")
            );
          else if (current === "red-heart") return setCurrent("white-heart");
        }}
      >
        <svg viewBox="-1 -2 34 33">
          <path
            className={current + " heart"}
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
      </div>
    </>
  );
};

export default FavoriteProduct;
