import React from "react";

const UsersList = props => {
// seleciona o usuario pro componente container
  return (
    <ul>
      {props.users.map(user => (
        <li key={user.id}
         onClick={() => props.selected(user)}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;

