import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import Navigation from "./Navigation";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import "./Styles/header.less";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          
          <Route exact path="/">
            <Navigation selected="home" />
            <Home />
          </Route>{" "}

          <Route path="/gallery">
            <Navigation selected="gallery" />
            <Gallery />
          </Route>{" "}

          <Route path="/about">
            <Navigation selected="about" />
            <About />
          </Route>{" "}

          <Route path="/contact">
            <Navigation selected="contact" />
            <Contact />
          </Route>{" "}

        </Switch>{" "}
      </Router>
    );
  }
}

export default hot(module)(App);
