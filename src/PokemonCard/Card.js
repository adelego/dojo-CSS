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
      fetch('https://pokeapi.co/api/v2/pokemon/43'),
      fetch('https://pokeapi.co/api/v2/pokemon/32'),
      fetch('https://pokeapi.co/api/v2/pokemon/145'),
      fetch('https://pokeapi.co/api/v2/pokemon/89'),
      fetch('https://pokeapi.co/api/v2/pokemon/65'),
      fetch('https://pokeapi.co/api/v2/pokemon/123')
    ])
        .then(([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]) => Promise.all([pokemon1.json(), pokemon2.json(), pokemon3.json(), pokemon4.json(), pokemon5.json(), pokemon6.json()]))
        .then(([pokemonData1, pokemonData2, pokemonData3, pokemonData4, pokemonData5, pokemonData6]) => {
          this.setState({
            pokemonList: [pokemonData1, pokemonData2, pokemonData3, pokemonData4, pokemonData5, pokemonData6]
          })
        });
  }

  render() {
    const pokemonList = this.state.pokemonList;
    return (
      <div className="Card">
        <div className={style.content}></div>

        {pokemonList.length > 0 &&
          pokemonList.map((pokemon, index) =>
              <div className={style.card}>
                <div className={style.cardNumber}>
                  {index+1}
                </div>
                <div className={style.cardLogo}>
                  <img src={pokemon.sprites.front_default} alt="" />
                </div>
                <div className={style.cardNameAndTypes}>
                  <span className={style.cardName}>{pokemon.name}</span>
                  <span className={style.cardTypes}>
                    {pokemon.types.map(typeArray =>
                        <span className={style.cardType}> {typeArray.type.name},&nbsp;</span>
                    )}
                  </span>
                </div>
                <div className={style.cardId}>
                  {pokemon.id}
                </div>
              </div>
          )
        }
      </div>
    );
  }
}

export default Card;
