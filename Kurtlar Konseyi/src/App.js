import React, { useState } from "react";
import "./App.css";
import data from "./Data";

function App() {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState(data);

  const getInput = (e) => {
    setSearch(e.target.value);
  };

  const findMember = () => {
    const newMembers = data.filter((member) =>
      member.title.toLowerCase().includes(search.toLowerCase())
    );
    setMembers(newMembers);
  };

  return (
    <div className="App">
      <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
      <div className="inputContainer">
        <input
          onChange={getInput}
          className="searchBar"
          type="text"
          placeholder="Üye Giriniz..."
        />
        <button onClick={findMember} className="searchButton" type="submit">
          Ara
        </button>
      </div>
      <div className="members">
        {members.map((member) => (
          <div className="member" key={member.id}>
            <img src={member.image} alt={member.title} />
            <h3>{member.title}</h3>
            <p>{member.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
