import React from 'react';
import Pokecard from './Pokecard';

// function generateList(props) {
//   console.log(props);
//   for (let pokemon of props.pokemons) {
//     <Pokecard
//       id={pokemon.id}
//       name={pokemon.name}
//       type={pokemon.types}
//       evolution={pokemon.evolution}
//       image={pokemon.url}
//     />;
//   }
// }
class PokeList extends React.Component {
  constructor(props) {
    super(props);
  }

  generateList() {
    let list = [];
    for (let pokemon of this.props.pokemons) {
      list.push(
        <li key={pokemon.id} className="card">
          <Pokecard
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            evolution={pokemon.evolution}
            image={pokemon.url}
          />
        </li>
      );
    }
    return list;
  }
  render() {
    return (
      <>
        <h1 className="title">Pokedex</h1>
        <ul className="list">{this.generateList()}</ul>
      </>
    );
  }
}

export default PokeList;
