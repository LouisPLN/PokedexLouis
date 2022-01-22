import React from "react";
import Nav from "../components/Nav";
import "../styles/home/home.scss";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Banner from "../logo/BannerComplete.svg";
import Pokeball from "../logo/Pokeball2.svg";
import Github from "../logo/GitHub.png";

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
            <p className="hero-desc">
              Vous pouvez désormais connaître le type des Pokémons, leurs
              forces, faiblesses ainsi que leurs capacitées.
            </p>
            <div className="btn-home">
              <Link to="/React-PokedexLouis/Pokedex">
                <button>Voir le Pokédex</button>
              </Link>
              <Contact />
            </div>
            <p className="hero-dev">
              Projet réalisé par
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/louis-poulin/"
              >
                Louis Poulin
              </a>
              pour le cours de React d'ASI-DEV2{" "}
              <img src={Pokeball} alt="Pokéball" />
            </p>
          </div>
          <div className="hero-image">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/LouisPLN"
            >
              Suis moi sur GitHub <img src={Github} />
            </a>
          </div>
        </div>
        <img className="hero-banner" src={Banner} alt="hero banner" />
      </div>
    </div>
  );
};

export default Home;
