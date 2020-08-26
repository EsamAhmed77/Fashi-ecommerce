import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./style/blogBlock.scss";
import { Container, Row, Col } from "react-bootstrap";
import { ourBlogs, blogsProducts } from "../../../api/api";

const Blog = () => {
  return (
    <div>
      <NavBar />
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
                {ourBlogs.map(({ id, img, title, date, story, blogType }) => (
                  <div key={id} className="the-blog">
                    <a href="/" className="img-wrapper">
                      <img className="w-100" src={img} alt="blog" />
                      <span className="date">{date}</span>
                    </a>
                    <div className="blog-information">
                      <h4>
                        <a href="/">{title}</a>
                      </h4>
                      <div className="info">
                        <span>By Admin</span>
                        <span className="border-rl">{blogType}</span>
                        <span>8 Comments</span>
                      </div>
                      <p className="blog-story">{story}</p>
                      <Link className="continue-reading" to="/Blog">
                        continue reading
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pages">
                <Link to="/Shop">1</Link>
                <Link to="/Shop">2</Link>
              </div>
            </Col>
            <Col md={4} lg={3}>
              <div className="d-flex flex-column">
                <div className="search-input">
                  <input type="search" placeholder="Search" />
                  <i className="fas fa-search"></i>
                </div>
                <div className="all-categories">
                  <h3>Categories</h3>
                  <ul className="list-unstyled">
                    <li className="border-tb">
                      <Link to="/Blog">Fashion</Link>
                    </li>
                    <li>
                      <Link to="/Blog">Beauty</Link>
                    </li>
                    <li className="border-tb">
                      <Link to="/Blog">Street Style</Link>
                    </li>
                    <li>
                      <Link to="/Blog">Life Style</Link>
                    </li>
                    <li className="border-tb">
                      <Link to="/Blog">DIY & Crafts</Link>
                    </li>
                  </ul>
                </div>
                <ul className="featured-products list-unstyled">
                  {blogsProducts.map(({ id, img, price, title }) => (
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
                    <Link to="/Blog">July 2018</Link>
                    <span>(9)</span>
                  </li>
                  <li>
                    <Link to="/Blog">June 2018</Link>
                    <span>(39)</span>
                  </li>
                  <li>
                    <Link to="/Blog">May 2018</Link>
                    <span>(49)</span>
                  </li>
                  <li>
                    <Link to="/Blog">April 2018</Link>
                    <span>(49)</span>
                  </li>
                  <li>
                    <Link to="/Blog">March 2018</Link>
                    <span>(29)</span>
                  </li>
                  <li>
                    <Link to="/Blog">February 2018</Link>
                    <span>(19)</span>
                  </li>
                  <li>
                    <Link to="/Blog">January 2018</Link>
                    <span>(59)</span>
                  </li>
                  <li>
                    <Link to="/Blog">December 2017</Link>
                    <span>(69)</span>
                  </li>
                </ul>
                <div className="tags">
                  <h3>Tags</h3>
                  <div className="all-tags">
                    <Link to="/Blog">Fashion</Link>
                    <Link to="/Blog">LifeStyle</Link>
                    <Link to="/Blog">Denim</Link>
                    <Link to="/Blog">StreetStyle</Link>
                    <Link to="/Blog">Crafted</Link>
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
