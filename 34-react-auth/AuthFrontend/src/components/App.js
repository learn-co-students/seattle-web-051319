import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Login from "./Login";
import PaintingsContainer from "./PaintingsContainer";
import { api } from "../services/api";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      auth: {
        user: {}
      }
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("there is a token");
      // make a request to the backend and find our user
      api.auth.getCurrentUser().then(user => {
        const updatedState = { ...this.state.auth, user: user };
        this.setState({ auth: updatedState });
      });
    }
  }

  login = data => {
    const updatedState = { ...this.state.auth, user: data };
    // console.log(data);
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
          currentUser={this.state.auth.user}
          handleLogout={this.logout}
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Route exact path="/" component={About} />
            <Route
              exact
              path="/login"
              render={props => <Login {...props} handleLogin={this.login} />}
            />
            <Route path="/paintings" component={PaintingsContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
