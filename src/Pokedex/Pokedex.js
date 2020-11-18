import React, { useEffect, useState } from "react";
import { Pokedex as StyledPokedex } from "./Pokedex.style";
import { fetchPokemon } from "./fetchPokemon";

export const Card = () => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await fetchPokemon();
      setPokemonList(pokemons);
    };
    fetchData();
  }, []);

  return (
    <StyledPokedex>
      {pokemonList.length > 0 &&
        pokemonList.map((pokemon, index) => (
          <div>
            {index + 1} &nbsp;
            <img src={pokemon.sprites.front_default} alt="" /> &nbsp;
            {pokemon.name} &nbsp;
            {pokemon.types.map((typeArray) => (
              <span id="cardType"> {typeArray.type.name},&nbsp;</span>
            ))}
            {pokemon.id} &nbsp;
          </div>
        ))}
    </StyledPokedex>
  );
};

export default Card;
