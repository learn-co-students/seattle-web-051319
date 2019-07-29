import React, { Fragment } from "react";
import LoaderHOC from "../HOC/LoaderHOC";

const Welcome = () => {
  return (
    <Fragment>
      <h1>Welcome to the Listr App</h1>
      <img
        alt="lister company logo"
        id="logo"
        src="http://silviadoomra.com/wp-content/uploads/2017/08/Shopping-List.jpg"
      />
    </Fragment>
  );
};

export default LoaderHOC(Welcome);
