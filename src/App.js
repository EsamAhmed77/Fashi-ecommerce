import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//
import Home from "./Home";
import Cart from "./Layout/components/blocks/Cart";
import Shop from "./Layout/components/blocks/Shop";
import About from "./Layout/components/blocks/About";
import Contact from "./Layout/components/blocks/Contact";
import Blog from "./Layout/components/blocks/Blog";
import BlogDetails from "./Layout/components/blocks/BlogDetails";
import Error404 from "./404Error";
import Account from "./Layout/components/blocks/Account";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog-details/:id" exact component={BlogDetails} />
          <Route path="/user/:page" exact component={Account} />
          <Route path="*" exact component={Error404} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
