import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./style/blogs.scss";
import { blogs } from "../../api/api";

const Blogs = () => {
  return (
    <div className="blogs">
      <Container>
        <div className="blogs-header">
          <h1>our blog</h1>
        </div>
        <Row>
          {blogs.map(({ id, img, title, blogger, date, description }) => (
            <Col key={id} sm={10} md={4} className="m-auto">
              <div className="blog">
                <Link to="/blog" className="blog-img">
                  <img className="w-100" src={img} alt="blog" />
                </Link>
                <div className="blog-info">
                  <h4>
                    <Link to="/blog">{title}</Link>
                  </h4>
                  <div>
                    <span className="by-on">by</span>
                    <span className="date-data">{blogger}</span>
                    <span className="by-on">on</span>
                    <span className="date-data">{date}</span>
                  </div>
                  <p className="blog-description">{description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
