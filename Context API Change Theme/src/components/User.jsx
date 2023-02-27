import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const User = ({ user }) => {
  const context = useContext(UserContext);

  const updateColor = (e) => {
    context.changeColor(user.id, e.target.value);
  };

  return (
    <div className="user" style={{ background: user.color }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Age: {user.age}</p>
      <input value={user.color} onChange={updateColor} type="text" />
    </div>
  );
};

export default User;
