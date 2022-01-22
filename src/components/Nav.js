import React from "react";
import "../styles/nav/nav.scss";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="container-nav">
        <div className="left-nav">
          <Link to="/">
            <img src={Logo} alt="logo Pokemon" />
          </Link>
        </div>
        <div className="right-nav">
          <ul>
            <li>
              <Link to="/React-PokedexLouis/">Accueil</Link>
            </li>
            <li>
              <Link to="/React-PokedexLouis/Pokedex">Pokédex</Link>
            </li>
            <li>
              <Link to="/React-PokedexLouis/Categories">Catégories</Link>
            </li>
            <li>
              <Link to="/React-PokedexLouis/Favoris">Favoris</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
