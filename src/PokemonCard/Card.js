import React, { Component } from 'react';

import style from './Card.module.scss'

class Card extends Component {

  constructor() {
    super();
    this.state = {
      pokemonList: []
    };

  }

  componentDidMount() {
    Promise.all([
      fetch('https://pokeapi.co/api/v2/pokemon/ditto'),
      fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    ])
        .then(([pokemon1, pokemon2]) => Promise.all([pokemon1.json(), pokemon2.json()]))
        .then(([pokemonData1, pokemonData2]) => {
          this.setState({
            pokemonList: [pokemonData1, pokemonData2]
          })
        });
  }

  render() {
    const pokemonList = this.state.pokemonList;
    return (
      <div className="Card">
        {pokemonList.length > 0 &&
          pokemonList.map(pokemon =>
              <div className={style.card}>
                <div>
                  {pokemon.weight}
                  {pokemon.sprites.front_default}
                </div>
              </div>
          )
        }
      </div>
    );
  }
}

export default Card;
