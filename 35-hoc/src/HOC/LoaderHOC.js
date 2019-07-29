import React, { Component } from "react";

const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends Component {
    isLoading = props => {
      return (props.data && props.data.length < 1) || (props.loading && props.loading === true)
        ? true
        : false;
    };
    render() {
      return this.isLoading(this.props) ? (
        <img id="pizza" alt="loadingh pizza" src="https://media3.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default LoaderHOC;

// let newObject = Object.assign({}, {name: "Tim", age: 56, hobby: "jetski"}, {name: "Susie"}, {age: 3})
// console.log(newObject)
