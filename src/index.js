import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Card from './PokemonCard/Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Card />, document.getElementById('card'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
