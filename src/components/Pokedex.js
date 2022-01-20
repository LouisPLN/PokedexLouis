import React from "react";
import "../styles/pokedex.scss";
import "../styles/type.scss";

const Pokedex = ({ id, name, image, type }) => {
  const style = `poke-right ${type}`;

  const imageSrc = `/badges/${type}.png`;

  return (
    <div className="poke-card">
      <div className="poke-left">
        <div className="poke-name">
          <h3>{name}</h3>
        </div>
        <p>#0{id}</p>

        <a href="#">Détails</a>
      </div>
      <div className={style}>
        <img src={image} alt={name} />
      </div>
      {/* <div className="poke-number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="poke-identity">
        <h3>{name}</h3>
        <img src={imageSrc} alt={type} />
      </div> */}
    </div>
  );
};

export default Pokedex;
