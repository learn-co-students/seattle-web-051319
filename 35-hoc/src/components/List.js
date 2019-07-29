import React, { Fragment } from "react";
import LoaderHOC from '../HOC/LoaderHOC'

const List = props => {
  const { data, contentDisplayComponent } = props;
  return data.map((item, idx) => {
    return <Fragment key={idx}>{contentDisplayComponent(item)}</Fragment>;
  });
};

export default LoaderHOC(List);
