import React, { useEffect, useState } from "react";
import {
  PokedexContainer,
  PokemonEntry,
  PokemonId,
  PokemonImage,
  PokemonName,
  PokemonNameContainer,
  PokemonType,
  TeamNumber,
} from "./Pokedex.style";
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
    <PokedexContainer>
      {pokemonList.length > 0 &&
        pokemonList.map((pokemon, index) => (
          <PokemonEntry>
            <TeamNumber>{index + 1}</TeamNumber>
            <PokemonImage src={pokemon.sprites.front_default} alt="" />
            <PokemonNameContainer>
              <PokemonName>{pokemon.name}</PokemonName>
              <div>
                {pokemon.types.map((typeArray) => (
                  <PokemonType>{typeArray.type.name}</PokemonType>
                ))}
              </div>
            </PokemonNameContainer>
            <PokemonId>{pokemon.id}</PokemonId>
          </PokemonEntry>
        ))}
    </PokedexContainer>
  );
};

export default Card;
