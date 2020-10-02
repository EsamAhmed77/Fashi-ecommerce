import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
//
import Home from "./Home";
import Cart from "./Layout/components/blocks/Cart";
import Shop from "./Layout/components/blocks/Shop";
import About from "./Layout/components/blocks/About";
import Contact from "./Layout/components/blocks/Contact";
import Blog from "./Layout/components/blocks/Blog";
import BlogDetails from "./Layout/components/blocks/BlogDetails";
import Error404 from "./404Error";
import { Login } from "./Layout/components/blocks/account";
import { Register } from "./Layout/components/blocks/account";
import { ForgetPassword } from "./Layout/components/blocks/account";
import history from "./Layout/components/history/history";
const App = () => {
  return (
    <BrowserRouter history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog-details/:id" exact component={BlogDetails} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/reset-password" exact component={ForgetPassword} />
          <Route path="*" exact component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
