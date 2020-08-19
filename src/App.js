import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//
import Home from "./Home";
import Cart from "./Layout/components/blocks/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Cart" exact component={Cart} />
    </BrowserRouter>
  );
};

export default App;
