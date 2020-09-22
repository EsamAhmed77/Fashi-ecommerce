import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import Footer from "../Footer";
import "./style/blogBlock.scss";
import { Container, Row, Col } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {LoadAds, LoadBlogs} from "../../../redux/action";

const Blog = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadBlogs());
    dispatch(LoadAds());
  }, [dispatch])
  const blogs = useSelector(state => state.blogs)
  const ads = useSelector(state => state.ads)

  return (
    <div>
      <div className="blog-section">
        <div
          className="blog-banner"
          style={{
            backgroundImage: `url(${"img/heading-pages-05.jpg"})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="blog-header">
            <h1>Blog</h1>
          </div>
        </div>
        <Container>
          <Row>

            <Col md={8} lg={9}>
              <div className="blogs-container">
                {blogs.map(({ id, img, title, date, story, blogType }) => (
                  <div key={id} className="the-blog">
                    <Link to={`/blog-details/${id}`} className="img-wrapper">
                      <img className="w-100" src={img} alt="blog" />
                      <span className="date">{date}</span>
                    </Link>
                    <div
                      className="blog-information"
                    >
                      <h4>
                        <Link to={`/blog-details/${id}`}>{title}</Link>
                      </h4>
                      <div className="info">
                        <span>By Admin</span>
                        <span className="border-rl">{blogType}</span>
                        <span>8 Comments</span>
                      </div>
                      <p className="blog-story">{story}</p>
                      <Link
                        className="continue-reading"
                        to={`/blog-details/${id}`}
                      >
                        continue reading
                        <i className="fas fa-long-arrow-alt-right"> </i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pages">
                <Link to="/shop">1</Link>
                <Link to="/shop">2</Link>
              </div>
            </Col>
            <Col md={4} lg={3}>
              <div className="d-flex flex-column">
                <div className="search-input">
                  <input type="search" placeholder="Search" />
                  <i className="fas fa-search"> </i>
                </div>
                <div className="all-categories">
                  <h3>Categories</h3>
                  <ul className="list-unstyled">
                    <li className="border-tb">
                      <Link to="/blog">Fashion</Link>
                    </li>
                    <li>
                      <Link to="/blog">Beauty</Link>
                    </li>
                    <li className="border-tb">
                      <Link to="/blog">Street Style</Link>
                    </li>
                    <li>
                      <Link to="/blog">Life Style</Link>
                    </li>
                    <li className="border-tb">
                      <Link to="/blog">DIY & Crafts</Link>
                    </li>
                  </ul>
                </div>
                <ul className="featured-products list-unstyled">
                  {ads.map(({ id, img, price, title }) => (
                    <li key={id} className="fp-product">
                      <div className="img-container">
                        <img src={img} alt="product" />
                      </div>
                      <div className="details">
                        <a href="/">{title}</a>
                        <span>{price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="list-unstyled archive">
                  <h3>Archive</h3>
                  <li>
                    <Link to="/blog">July 2018</Link>
                    <span>(9)</span>
                  </li>
                  <li>
                    <Link to="/blog">June 2018</Link>
                    <span>(39)</span>
                  </li>
                  <li>
                    <Link to="/blog">May 2018</Link>
                    <span>(49)</span>
                  </li>
                  <li>
                    <Link to="/blog">April 2018</Link>
                    <span>(49)</span>
                  </li>
                  <li>
                    <Link to="/blog">March 2018</Link>
                    <span>(29)</span>
                  </li>
                  <li>
                    <Link to="/blog">February 2018</Link>
                    <span>(19)</span>
                  </li>
                  <li>
                    <Link to="/blog">January 2018</Link>
                    <span>(59)</span>
                  </li>
                  <li>
                    <Link to="/blog">December 2017</Link>
                    <span>(69)</span>
                  </li>
                </ul>
                <div className="tags">
                  <h3>Tags</h3>
                  <div className="all-tags">
                    <Link to="/blog">Fashion</Link>
                    <Link to="/blog">LifeStyle</Link>
                    <Link to="/blog">Denim</Link>
                    <Link to="/blog">StreetStyle</Link>
                    <Link to="/blog">Crafted</Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
