import React from "react";

const Greetings = (props) => {
    console.log(props)
  return <h4>Hello {props.friend}</h4>;
};

export default Greetings;
