import React from "react";

const Pokedex = ({ id, name, image, type }) => {
  const style = `poke-card ${type}`;
  return (
    <div className={style}>
      <div className="poke-number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="poke-identity">
        <h3>{name}</h3>
        <small>Type : {type}</small>
      </div>
    </div>
  );
};

export default Pokedex;
