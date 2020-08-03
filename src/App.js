import React from "react";
//
import Container from "react-bootstrap/Container";
//
import "./Layout/components/style/Main.scss";
//
import NavBar from "./Layout/components/NavBar";


const App = () => {
  return (
    <Container className="p-0 m-0" fluid>
      <NavBar />
    </Container>
  );
};

export default App;
