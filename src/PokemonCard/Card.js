import React, { Component } from "react";
import { Card as StyledCard } from "./Card.style";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      pokemonList: [],
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("https://pokeapi.co/api/v2/pokemon/43"),
      fetch("https://pokeapi.co/api/v2/pokemon/32"),
      fetch("https://pokeapi.co/api/v2/pokemon/145"),
      fetch("https://pokeapi.co/api/v2/pokemon/89"),
      fetch("https://pokeapi.co/api/v2/pokemon/65"),
      fetch("https://pokeapi.co/api/v2/pokemon/123"),
    ])
      .then(([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]) =>
        Promise.all([
          pokemon1.json(),
          pokemon2.json(),
          pokemon3.json(),
          pokemon4.json(),
          pokemon5.json(),
          pokemon6.json(),
        ])
      )
      .then(
        ([
          pokemonData1,
          pokemonData2,
          pokemonData3,
          pokemonData4,
          pokemonData5,
          pokemonData6,
        ]) => {
          this.setState({
            pokemonList: [
              pokemonData1,
              pokemonData2,
              pokemonData3,
              pokemonData4,
              pokemonData5,
              pokemonData6,
            ],
          });
        }
      );
  }

  render() {
    const pokemonList = this.state.pokemonList;
    return (
      <StyledCard>
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
      </StyledCard>
    );
  }
}

export default Card;
