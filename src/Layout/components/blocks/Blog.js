import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./style/blogBlock.scss";
import { Container, Row, Col } from "react-bootstrap";
import { ourBlogs } from "../../../api/api";

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
            {ourBlogs.map(({ id, img, title, date, story, blogType }) => (
              <Col key={id} md={8} lg={9}>
                <div className="the-blog">
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
              </Col>
            ))}
            <Col md={4} lg={3}>
              <div>cats</div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
