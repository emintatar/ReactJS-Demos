import React, { useState } from "react";
import "./App.css";
import data from "./Data";

function App() {
  const [holidays, setHolidays] = useState(data);

  return (
    <div className="App">
      <div className="container">
        <h3>Ulusal Bayramlar</h3>
        <div className="days">
          {holidays.map((holiday) => (
            <div className="holiday" key={holiday.id}>
              <img src={holiday.img} alt={holiday.title} />
              <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
