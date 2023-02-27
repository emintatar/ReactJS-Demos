import { useContext } from "react";
import User from "./User";
import { UserContext } from "../contexts/UserContext";

const UserList = () => {
  const context = useContext(UserContext);

  return (
    <div className="userList">
      <h2>User List</h2>
      {context.users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
