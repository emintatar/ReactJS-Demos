import React from "react";

const City = ({ city }) => {
  return (
    <div>
      <h1 className="text-5xl">{city.name}</h1>
      <h2 className="text-3xl">{city.main.temp}</h2>
      <h3 className="text-2xl">{city.weather[0].description}</h3>
    </div>
  );
};

export default City;
