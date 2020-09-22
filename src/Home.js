import React from "react";
import Container from "react-bootstrap/Container";
//
import "./Layout/components/style/Main.scss";
import OurCarousel from "./Layout/components/OurCarousel";
import Categories from "./Layout/components/Categories";
import ProductsCarousel from "./Layout/components/ProductsCarousel";
import Timer from "./Layout/components/Timer";
import Blogs from "./Layout/components/Blogs";
import Instagram from "./Layout/components/Instagram";
import Shipping from "./Layout/components/Shipping";
import Footer from "./Layout/components/Footer";
//

export default (props) => {
  return (
    <Container className="p-0 m-0" fluid>
      <OurCarousel />
      <Categories />
      <ProductsCarousel />
      <Timer />
      <Blogs />
      <Instagram />
      <Shipping />
      <Footer />
    </Container>
  );
};
