import React, { useState } from "react";
import "./App.css";
import Data from "./Data";
import UserList from "./components/UserList";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [users, setUsers] = useState(Data);

  const changeColor = (id, color) => {
    const newUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, color: color };
      } else {
        return user;
      }
    });
    setUsers(newUsers);
  };

  return (
    <UserContext.Provider
      value={{
        users: users,
        changeColor: changeColor,
      }}
    >
      <div className="App">
        <header>
          <h1>Welcome to React!</h1>
        </header>
        <UserList />
      </div>
    </UserContext.Provider>
  );
}

export default App;
