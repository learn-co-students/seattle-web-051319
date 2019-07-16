import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// document.body.innerHTML = "<h1>Hello World</h1>"

const myElement = React.createElement("h1", {name: "john"}, "Hello from React")
// console.log(myElement)
ReactDOM.render(<App test="example"/>, document.getElementById("root"));
