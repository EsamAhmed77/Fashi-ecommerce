import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./style/instagram.scss";
import {useDispatch, useSelector} from "react-redux";
import {LoadInstagramView} from "../../redux/action";

const Instagram = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadInstagramView())
  }, [dispatch])
  const instagram = useSelector(state => state.instagramView)

  return (
    <div className="instagram-section">
      <div className="section-header text-center">
        <h3>@ FOLLOW US ON INSTAGRAM</h3>
      </div>
      <div className="insta-imgs-wrapper">
        {instagram.map(({ id, src }) => (
          <div key={id} className="img">
            <img className="w-100" src={src} alt="gallery" />
            <Link to="/">
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
