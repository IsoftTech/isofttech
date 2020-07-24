import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import About from "./core/About";
import Contact from "./core/Contact";
import Home from "./core/Home";
import Dashboard from "./core/Dashboard";
import AdminPanel from "./core/AdminPanel";
import Product from "./core/Product";
import Checkout from "./core/Checkout";
import Signin from "./user/Signin";
import Signup from "./user/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/admin" exact component={AdminPanel} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/product" exact component={Product} />
        <Route path="/checkout" exact component={Checkout} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
