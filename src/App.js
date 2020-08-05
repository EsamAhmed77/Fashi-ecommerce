import React from "react";
//
import Container from "react-bootstrap/Container";
//
import "./Layout/components/style/Main.scss";
//
import NavBar from "./Layout/components/NavBar";
import OurCarousel from "./Layout/components/OurCarousel";
import CatGrid from "./Layout/components/CatGrid";
//

const App = () => {
  return (
    <Container className="p-0 m-0" fluid>
      <NavBar />
      <OurCarousel />
      <CatGrid />
    </Container>
  );
};

export default App;
