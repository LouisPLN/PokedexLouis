import React from "react";
import "../styles/pokedex.scss";

const Pokedex = ({ id, name, image, type }) => {
  const style = `poke-card ${type}`;

  const imageSrc = `/badges/${type}.png`;

  return (
    <div className={style}>
      <div className="poke-number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="poke-identity">
        <h3>{name}</h3>
        <img src={imageSrc} alt={type} />
      </div>
    </div>
  );
};

export default Pokedex;
