import React, { Component } from "react";
import Greetings from "./components/Greetings";

class App extends Component {

  state = {
    name: "John",
    pet: "Fido",
    friendsList: ["Zoe", "Nathan", "Bob", "Sarah"]
  }

  handleClickTitle = () => {
    this.setState({name:"Zoe", friendsList:["Bob"]})
    // this.state.name = "Zoe"
  }


  render() {
    return (
      <div>
        <h1 onClick={this.handleClickTitle}>Hello from {this.state.name} at App Component</h1>
        {this.state.friendsList.map((friend, index) => {
          return <Greetings key={index} friend={friend} />
        })}
      </div>
    );
  }
}

export default App;
