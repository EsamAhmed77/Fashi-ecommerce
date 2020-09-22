import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
//
import Footer from "../Footer";
import "./style/Contact.scss";
import { Container, Row, Col } from "react-bootstrap";

const AnyReactComponent = ({ text }) => (
  <div
    className="marker"
    style={{
      background: `url(${"img/icon/icon-position-map.png"})`,
      width: "60px",
      height: "74px",
    }}
  >
    {text}
  </div>
);

class Contact extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  render() {
    return (
      <div className="contact">
        <div
          className="contact-banner"
          style={{
            backgroundImage: `url(${"img/heading-pages-06.jpg"})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="contact-header">
            <h1>Contact</h1>
          </div>
        </div>
        <Container>
          <Row className="p-b-30">
            <Col md={6} className="p-b-30 min-height-530">
              <div style={{ height: "100%", width: "100%" }}>
                <GoogleMapReact
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={""}
                  />
                </GoogleMapReact>
              </div>
            </Col>
            <Col
              md={6}
              className="p-b-30 min-height-530 d-flex align-items-center"
            >
              <div className="user-form">
                <div className="uf-header">Send us your message</div>
                <div className="user-info">
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Phone Number" />
                  <input type="text" placeholder="Email Address" />
                </div>
                <textarea
                  id="story"
                  name="story"
                  rows="4"
                  placeholder="Message"
                ></textarea>
                <div className="send-btn">
                  <button>send</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Contact;

