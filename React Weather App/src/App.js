import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import City from "./City";

function App() {
  const [city, setCity] = useState();
  const [searchbar, setSearchbar] = useState();

  const changeSearchbar = (e) => {
    e.preventDefault();
    setSearchbar(e.target.value);
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchbar}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [searchbar]);

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center my-5">
        Open Weather Map API
      </h1>
      <input
        onChange={changeSearchbar}
        type="text"
        placeholder="Placeholder"
        className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
      />
      {city && <City city={city} />}
    </div>
  );
}

export default App;
