import React, {useEffect} from "react";
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
import NavBar from "./Layout/components/NavBar";
//

export default (props) => {

  useEffect(() => {
    document.title = "Home -Fashe"
  });

  return (
    <Container className="p-0 m-0" fluid>
      <NavBar p={props} />
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
