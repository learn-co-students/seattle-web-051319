import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Person from "./components/Person";
import Place from "./components/Place";
import List from "./components/List";

class App extends Component {
  state = {
    people: [],
    places: [],
    loading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        people: [
          { name: "Lisa Simpson", age: 8, home: "Springfield, ?" },
          { name: "Bruce Wayne", age: 43, home: "Gotham, NY" },
          { name: "Walter White", age: 50, home: "Albuquerque, NM" },
          { name: "Dana Scully", age: 37, home: "Georgetown, VA" }
        ]
      });
    }, 800);
    fetch("https://randomuser.me/api/?results=4")
      .then(res => res.json())
      .then(data => {
        const places = [];
        data.results.forEach(item => {
          const { location } = item;
          const newPlace = {
            street: location.street,
            state: location.state,
            city: location.city
          };
          places.push(newPlace);
        });
        setTimeout(() => this.setState({ places, loading: false }), 1150);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <Welcome loading={this.state.loading} />
        </div>
        <div className="left-list">
          <List data={this.state.people} contentDisplayComponent={Person} />
        </div>
        <div className="right-list">
          <List data={this.state.places} contentDisplayComponent={Place} />
        </div>
      </div>
    );
  }
}

export default App;
