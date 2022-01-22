import React from "react";
import LoaderImg from "./Pokeball2.svg";
import "./App.scss";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderImg} alt="Loader" />
    </div>
  );
};

export default Loader;
