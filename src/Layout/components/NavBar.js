import React, { useState } from "react";
//
import "./style/Main.scss";
import "./style/nav-bar.scss";
//
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  const [currency, setCurrency] = useState("USA");
  const [visible, setVisible] = useState("d-none");

  //
  const onDropDownClick = (e) => {
    e.preventDefault();
    if (visible === "d-none") setVisible("d-block");
    else setVisible("d-none");
  };

  return (
    <div className="nav-bar">
      <div className="top-nav-bar">
        <div className="socialMedia-links">
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="/">
            <i className="fab fa-snapchat-ghost"></i>
          </a>
          <a href="/">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="free-shipping">
          Free shipping for standard order over $100
        </div>
        <div className="nav-bar-left">
          <span>fashe@example.com</span>
          <div onClick={onDropDownClick} className="d-inline-block">
            <a href="/" className="language">
              {currency}
              <i className="fas fa-angle-down"></i>
            </a>
            <div className={`lang-list ${visible}`}>
              <div onClick={() => setCurrency("USA")}>USA</div>
              <div onClick={() => setCurrency("EUR")}>EUR</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bot-nav-bar">
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img src="img/icon/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-between">
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">HomePage V1</NavDropdown.Item>
                <NavDropdown.Item href="/">HomePage V1</NavDropdown.Item>
                <NavDropdown.Item href="/">HomePage V1</NavDropdown.Item>
              </NavDropdown>
              <a className="nav-link" href="/">
                Link
              </a>
              <a className="nav-link" href="/">
                Shop
              </a>
              <a className="nav-link" href="/">
                Sale
              </a>
              <a className="nav-link" href="/">
                Feature
              </a>
              <a className="nav-link" href="/">
                Blog
              </a>
              <a className="nav-link" href="/">
                About
              </a>
              <a className="nav-link" href="/">
                Content
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
