import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Greeting from "./Greeting";
import Random from "./Random";
import Music from "./Music";
import Tour from "./components/Tour"
import "./App.css";

class AppRouter extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron title">
          <h1>App Component</h1>
        </div>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/random">Random Number Generator</Link>
            </li>
            <li>
              <Link to="/bands">Music</Link>
            </li>
            <li>
              <Link to="/tour">Tour dates</Link>
            </li>
          </ul>
          <Route path="/" exact component={Greeting} />
          <Route path="/random" exact component={Random} />
          <Route path="/bands" exact component={Music} />
          {/* <Route path="/names" exact component={Names} /> */}
          <Route path="/tour" exact component={Tour} />
        </Router>
      </div>
    );
  }
}

export default AppRouter;
