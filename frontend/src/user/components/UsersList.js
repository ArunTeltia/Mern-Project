import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
const UserList = props => {
  if (props.items.length=== 0) {
    return (
      <div class="center">
        <h2>No User Found</h2>
      </div>
    );
  }

  return (
    <ul className="user-list">
      {props.items.map(user => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
