import React from "react";

const Place = props => {
  const { street, city, state } = props;
  return (
    <div>
      <h3>{street}</h3>
      <div>
        <p>{city}, {state}</p>
      </div>
    </div>
  );
};

export default Place