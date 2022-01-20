import React from "react";
import Pokedex from "../components/Pokedex";
import Nav from "../components/Nav";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "../styles/pokedex.scss";

const CategoryVue = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [listTypes, setAllTypes] = useState([]);

  //   {
  //     "pokemon": {
  //         "name": "heracross",
  //         "url": "https://pokeapi.co/api/v2/pokemon/214/"
  //     },
  //     "slot": 2
  //   }

  const getUrlList = (pokemonsList) => {
    return pokemonsList.map((pokemon) => pokemon.pokemon.url);
  };

  const handleType = async (url) => {
    setAllPokemons([]);
    const res = await fetch(url);
    const { pokemon } = await res.json();
    const urlList = getUrlList(pokemon);
    urlList.map(async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      await console.log("data", data);
      setAllPokemons((currentList) => [...currentList, data]);
    });
  };

  const getAllTypes = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/type");
    const { results } = await res.json();
    setAllTypes(results);
  };

  useEffect(async () => {
    getAllTypes();
  }, []);

  return (
    <div>
      <Nav />
      <div className="container">
        {listTypes &&
          listTypes?.map((type, index) => (
            <button
              onClick={(e) => handleType(e.target.value)}
              key={index}
              value={type.url}
            >
              {type.name}
            </button>
          ))}
        <div className="list-poke">
          {allPokemons &&
            allPokemons?.map((pokemon, index) => (
              <Pokedex
                id={pokemon.id}
                name={pokemon.name}
                image={
                  pokemon.sprites.other.dream_world.front_default
                    ? pokemon.sprites.other.dream_world.front_default
                    : pokemon.sprites.front_default
                }
                type={pokemon.types[0].type.name}
                height={pokemon.height}
                weight={pokemon.weight}
                attack={pokemon.moves}
                stats={pokemon.stats}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryVue;
