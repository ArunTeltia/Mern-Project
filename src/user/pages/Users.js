import React from "react";

import UsersList from "../components/UsersList";
import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Arun Teltia",
      image:
        "https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg",
      places: 3
    }
  ];
  return <UserList items={USERS} />;
};

export default Users;
