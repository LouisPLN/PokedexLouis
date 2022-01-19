import React from "react";
import Nav from "../components/Nav";
import "../styles/home.scss";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="hero-body">
        <div className="hero-col">
          <div className="hero-title">
            <h1>
              <b>Trouve</b> tous tes <b>Pokémons</b> favoris
            </h1>
            <p>
              Vous pouvez désormais connaître le type des Pokémons, leurs
              forces, faiblesses ainsi que leurs capacitées.
            </p>
            <button>Voir le Pokédex</button>
          </div>
          <div className="hero-image">
            <img src="/logo/BannerComplete.svg" alt="hero banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
