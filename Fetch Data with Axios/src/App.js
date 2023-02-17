import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [id, setId] = useState(1);

  const changeText = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data[id].title);
        console.log(response.data[id].title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data, id]);

  return (
    <div className="App">
      <h1>{data}</h1>
      <input onChange={changeText} value={id} type="text" />
    </div>
  );
}

export default App;
