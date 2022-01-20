import React, { useState } from "react";
import PokedexVue from "../pages/PokedexVue";
import "../styles/pokedex.scss";
import "../styles/type.scss";
import "../styles/modal.scss";

const Pokedex = ({ id, name, image, type, height, weight, attack, stats }) => {
  const style = `poke-right ${type}`;

  const imageSrc = `/badges/${type}.png`;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      {modal && (
        <div className="poke-modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content">
              <button className="close-modal" onClick={toggleModal}>
                <img src="/logo/close.svg" alt="Close" />
              </button>

              <div className="poke-left">
                <h3>{name}</h3>
                <div className="poke-infos">
                  <p className={style}>{weight}kg</p>
                  <p className={style}>{height}cm</p>
                </div>
                <div className="poke-attack">
                  <h5>Attaques</h5>
                  <div className="attacks">
                    <p className={style}>{attack[0].move.name}</p>
                    <p className={style}>{attack[1].move.name}</p>
                    <p className={style}>{attack[2].move.name}</p>
                  </div>
                </div>
                <div className="poke-stats">
                  <h5>Statistiques</h5>
                  <div className="all-stats">
                    <div className="stats">
                      <p>{stats[0].base_stat}</p>
                      <p>{stats[0].stat.name}</p>
                    </div>
                    <div className="stats">
                      <p>{stats[1].base_stat}</p>
                      <p>{stats[1].stat.name}</p>
                    </div>
                    <div className="stats">
                      <p>{stats[2].base_stat}</p>
                      <p>{stats[2].stat.name}</p>
                    </div>
                    <div className="stats">
                      <p>{stats[3].base_stat}</p>
                      <p>{stats[3].stat.name}</p>
                    </div>
                    <div className="stats">
                      <p>{stats[4].base_stat}</p>
                      <p>{stats[4].stat.name}</p>
                    </div>
                    <div className="stats">
                      <p>{stats[5].base_stat}</p>
                      <p>{stats[5].stat.name}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style}>
                <img src={image} alt={name} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="poke-card">
        <div className="poke-left">
          <div className="poke-name">
            <h3>{name}</h3>
          </div>
          <p>#0{id}</p>

          <button onClick={toggleModal}>Détails</button>
        </div>
        <div className={style}>
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
