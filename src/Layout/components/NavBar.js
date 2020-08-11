import React, { useState } from "react";
//
import "./style/Main.scss";
import "./style/nav-bar.scss";
//
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
//
import ProductsCart from "./blocks/ProductsCart";
const NavBar = () => {
  const [currency, setCurrency] = useState("USA");
  const [visible, setVisible] = useState("d-none");
  const [cartVisibility, setCartVisibility] = useState("d-none");
  const [hover, setHover] = useState("");
  //
  const onDropDownClick = (e) => {
    e.preventDefault();
    if (visible === "d-none") setVisible("d-block");
    else setVisible("d-none");
  };

  const onCartClick = (e) => {
    if (cartVisibility === "d-none") setCartVisibility("d-block");
    else setCartVisibility("d-none");
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
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <div className="top-nav-collapse">
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
            <Nav>
              <NavDropdown
                renderMenuOnMount={true}
                title="Home"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/">HomePage V1</NavDropdown.Item>
                <NavDropdown.Item href="/">HomePage V1</NavDropdown.Item>
                <NavDropdown.Item href="/">HomePage V1</NavDropdown.Item>
              </NavDropdown>
              <a className="nav-link" href="/">
                Shop
              </a>
              <a className="nav-link sale" href="/">
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
          <div className="bnb-left-area">
            <div className="icons">
              <div className="header-icon">
                <a href="/">
                  <img src="img/icon/icon-header-01.png" alt="header" />
                </a>
              </div>
              <div className="divider"></div>
              <div onClick={() => onCartClick()} className="cart-icon">
                <img src="img/icon/icon-header-02.png" alt="cart" />
                <div className="cart-orders"></div>
              </div>
            </div>
            <ProductsCart show={cartVisibility} />
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
