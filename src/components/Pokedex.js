import React, { useState } from "react";
import "../styles/pokedex.scss";
import "../styles/type.scss";
import "../styles/modal.scss";

const Pokedex = ({ id, name, image, type }) => {
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

              <div className="poke-left"></div>

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
        {/* <div className="poke-number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="poke-identity">
        <h3>{name}</h3>
        <img src={imageSrc} alt={type} />
      </div> */}
      </div>
    </div>
  );
};

export default Pokedex;
