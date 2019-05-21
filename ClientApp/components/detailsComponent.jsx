import React from "react";

const Details = props => {
  return (
    <div>
      <h3><strong>{props.user.name}</strong></h3>
      <p>{props.user.address}</p>
      <p>{props.user.email}</p>
      <p>{props.user.gender}</p>
      <p>{props.user.description}</p>
    </div>
  );
};

export default Details;
