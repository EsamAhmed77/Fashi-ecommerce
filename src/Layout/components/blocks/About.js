import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
//
import Footer from "../Footer";
import "./style/about.scss";
import NavBar from "../NavBar";
const About = () => {


  useEffect(() => {
    document.title = "About - Fashe"
  });
  return (
    <div className="About">
      <NavBar />
      <div
        className="About-banner"
        style={{
          backgroundImage: `url(${"img/heading-pages-06.jpg"})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="About-header">
          <h1>About</h1>
        </div>
      </div>
      <div className="our-story-section">
        <Container>
          <Row>
            <Col md={4}>
              <div className="section-img">
                <img
                  className="w-100"
                  src="img/banner-14.jpg"
                  alt="our story"
                />
              </div>
            </Col>
            <Col md={8}>
              <div className="ourStory">
                <div className="header">
                  <h2>Out story</h2>
                </div>
                <p>
                  Phasellus egestas nisi nisi, lobortis ultricies risus semper
                  nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur
                  fringilla dolor quis lorem accumsan, vitae molestie urna
                  dapibus. Pellentesque porta est ac neque bibendum viverra.
                  Vivamus lobortis magna ut interdum laoreet. Donec gravida
                  lorem elit, quis condimentum ex semper sit amet. Fusce eget
                  ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla
                  turpis in vehicula vehicula. Pellentesque congue ac orci ut
                  gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu
                  facilisis, eu sodales lectus sagittis. Etiam pellentesque,
                  magna vel dictum rutrum, neque justo eleifend elit, vel
                  tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                  efficitur, quam velit convallis ipsum, et maximus enim ligula
                  ac ligula. Vivamus tristique vulputate ultricies. Sed vitae
                  ultrices orci.
                </p>
                <div className="steve-words">
                  <p>
                    Creativity is just connecting things. When you ask creative
                    people how they did something, they feel a little guilty
                    because they didn't really do it, they just saw something.
                    It seemed obvious to them after a while.
                  </p>
                  <span>- Steve Job’s</span>
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

export default About;
