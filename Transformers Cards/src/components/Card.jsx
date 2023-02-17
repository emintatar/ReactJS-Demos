import React from "react";

const Card = ({ transformer }) => {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={transformer.img} alt="transformerImage" />
        <div className="about">
          <h2 className="cardTitle">{transformer.name}</h2>
          <p className="cardDescription">{transformer.about}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
