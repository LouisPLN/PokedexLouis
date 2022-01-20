import React from "react";
import "../styles/nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="container-nav">
        <div className="left-nav">
          <img src="/logo/Logo.svg" alt="logo Pokemon" />
        </div>
        <div className="right-nav">
          <ul>
            <li>
              <Link to="/">Acceuil</Link>
            </li>
            <li>
              <Link to="/Pokedex">Pokédex</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
