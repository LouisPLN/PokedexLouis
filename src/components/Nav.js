import React from "react";
import "../styles/nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="container-nav">
        <div className="left-nav">
          <img src="/logo/Logo.svg" alt="logo Pokemon" />
        </div>
        <div className="right-nav">
          <ul>
            <li>Acceuil</li>
            <li>Pokédex</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
