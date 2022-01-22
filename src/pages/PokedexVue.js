import React from "react";
import { useLocation } from "react-router-dom";
import Pokedex from "../components/Pokedex";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import "../styles/pokedex/pokedex.scss";

const PokedexVue = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [seeMore, setSeeMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=150"
  );

  const location = useLocation();

  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState(allPokemons);

  const handleChange = (value) => {
    setValue(value);
    setFiltered(
      allPokemons.filter((poke) =>
        poke.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleClear = () => {
    setValue("");
    setFiltered(allPokemons);
  };

  const createPokemonObject = async (result) => {
    result.forEach(async (pokemon) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await res.json();
      setAllPokemons((currentList) => [...currentList, data]);
    });
  };

  const getAllPokemons = async () => {
    const res = await fetch(seeMore);
    const data = await res.json();
    createPokemonObject(data.results);
    setSeeMore(data.next);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      <Nav />
      <div className="container">
        <img className="logo" src="/logo/Logo.svg" alt="logo" />
        <input
          onChange={(e) => handleChange(e.target.value)}
          value={value}
          type="text"
          placeholder="Tapez le nom de votre Pokémon favori !"
        />
        <div className="list-poke">
          {filtered.length === 0
            ? allPokemons.map((pokemon, index) => (
                <Pokedex
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  attack={pokemon.moves}
                  stats={pokemon.stats}
                />
              ))
            : filtered.map((pokemon, index) => (
                <Pokedex
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  attack={pokemon.moves}
                  stats={pokemon.stats}
                  key={index}
                />
              ))}
        </div>
        {!value && (
          <button className="see-more" onClick={getAllPokemons}>
            Afficher plus
          </button>
        )}
      </div>
    </div>
  );
};

export default PokedexVue;
