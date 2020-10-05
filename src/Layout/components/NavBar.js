import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//
import "./style/nav-bar.scss";

//
import ProductsCart from "./blocks/ProductsCart";
import {firebase} from "../../database/config";

const NavBar = ({p}) => {
  console.log(p)
  const [currency, setCurrency] = useState("USA");
  const [visible, setVisible] = useState("d-none");
  const [cartVisibility, setCartVisibility] = useState("d-none");
  const [userStatus, setUserStatus] = useState(false);
  const [userData, setUserData] = useState({});
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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUserStatus(true);
        setUserData(user);
      } else {
        console.log("There is no user!")
      }
    });
  }, [])

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
            <img src="/img/icon/logo.png" alt="logo" />
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
              <div className="signing-btns display-block-md">
                <div className="sm-user-signing">
                {!userStatus ? <><Link className="signing-btn" to="/login">
                  Login
                </Link>
                  <Link className="signing-btn" to="/register">
                    Sign up
                  </Link></> : <><Link className="signing-btn" to="/settings">
                  {(userData.displayName || "") + "'s Profile"}
                </Link>
                  <button
                      onClick={() => {
                        firebase.auth().signOut()
                            .then(() => {
                              // p.history.push("/")
                              window.location.reload();
                            })
                            .catch(function(error) {
                              console.log(error)
                            });
                      }}
                      className="signing-btn">
                    Logout
                  </button></>}
              </div>
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
              <div className="dropdown nav-item">
                <Link to="/" aria-haspopup="true" aria-expanded="false" id="basic-nav-dropdown" className="dropdown-toggle nav-link">
                  Home
                </Link>
                <div className="dropdown-menu" aria-labelledby="basic-nav-dropdown" style={{ margin: "0"}}>
                  <Link to="/" className="dropdown-item">HomePage V1</Link>
                  <Link to="/" className="dropdown-item">HomePage V1</Link>
                  <Link to="/" className="dropdown-item">HomePage V1</Link>
                </div>
              </div>
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
              <Link className="nav-link sale" to="/shop">
                Sale
              </Link>
              <Link className="nav-link" to="/cart">
                Feature
              </Link>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
          <div className="bnb-left-area">
            <div className="icons">
              <div className="user-signing display-none-md">
                {!userStatus ? <><Link className="signing-btn" to="/login">
                  Login
                </Link>
                  <Link className="signing-btn" to="/register">
                  Sign up
                  </Link></> : <><Link className="signing-btn" to="/settings">
                  {(userData.displayName || "") + "'s Profile"}
                </Link>
                  <button
                      onClick={() => {
                        firebase.auth().signOut()
                            .then(() => {
                              // p.history.push("/")
                              window.location.reload();
                            })
                            .catch(function(error) {
                              console.log(error)
                            });
                      }}
                      className="signing-btn">
                  Logout
                  </button></>}
              </div>
              <div className="divider display-none-md"></div>
              <div onClick={() => onCartClick()} className="cart-icon">
                <img src="/img/icon/icon-header-02.png" alt="cart" />
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
