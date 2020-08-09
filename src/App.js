import React from "react";
//
import Container from "react-bootstrap/Container";
//
import "./Layout/components/style/Main.scss";
//
import NavBar from "./Layout/components/NavBar";
import OurCarousel from "./Layout/components/OurCarousel";
import CatGrid from "./Layout/components/CatGrid";
import ProductsCarousel from "./Layout/components/ProductsCarousel";
import Timer from "./Layout/components/Timer";
import Blogs from "./Layout/components/Blogs";
import Instagram from "./Layout/components/Instagram";
//
const App = () => {
  return (
    <Container className="p-0 m-0" fluid>
      <NavBar />
      <OurCarousel />
      <CatGrid />
      <ProductsCarousel />
      <Timer />
      <Blogs />
      <Instagram />
    </Container>
  );
};

export default App;
