import React from 'react';
import './App.scss';
import Pokedex from './data/Pokedex.json';

import PokeList from './PokeList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: Pokedex,
    };
  }
  render() {
    return <PokeList pokemons={this.state.pokemons} />;
  }
}

export default App;
