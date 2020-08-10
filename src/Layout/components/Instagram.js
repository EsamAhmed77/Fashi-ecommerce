import React from "react";
import "./style/instagram.scss";
import { instagram } from "../../api/api";

const Instagram = () => {
  return (
    <div className="instagram-section">
      <div className="section-header text-center">
        <h3>@ FOLLOW US ON INSTAGRAM</h3>
      </div>
      <div className="insta-imgs-wrapper">
        {instagram.map(({ id, src }) => (
          <div key={id} className="img">
            <img className="w-100" src={src} alt="gallery" />
            <a href="/">
              <span className="likes">
                <i className="far fa-heart"></i>
                <span>39</span>
              </span>
              <div className="picture-story">
                <p>
                  Nullam scelerisque, lacus sed consequat laoreet, dui enim
                  iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                  tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                  metus elit.
                </p>
                <span className="taken-by">Photo by @nancyward</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
