import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//
import Home from "./Home";
import Cart from "./Layout/components/blocks/Cart";
import Shop from "./Layout/components/blocks/Shop";
import Blogs from "./Layout/components/blocks/Blogs";
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/Cart" exact component={Cart} />
      <Route path="/Shop" exact component={Shop} />
      <Route path="/Blogs" exact component={Blogs} />
    </BrowserRouter>
  );
};

export default App;
