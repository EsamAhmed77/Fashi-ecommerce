import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//
import Home from "./Home";
import Cart from "./Layout/components/blocks/Cart";
import Shop from "./Layout/components/blocks/Shop";
import About from "./Layout/components/blocks/About";
import Contact from "./Layout/components/blocks/Contact";
import Blog from "./Layout/components/blocks/Blog";
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Cart" exact component={Cart} />
      <Route path="/Shop" exact component={Shop} />
      <Route path="/About" exact component={About} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Blog" exact component={Blog} />
    </BrowserRouter>
  );
};

export default App;
