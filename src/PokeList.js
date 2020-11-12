import Pokecard from './Pokecard';

function PokeList(props) {
  function generateList() {
    for (let pokemon of props.pokemons) {
      console.log(pokemon.name);
      <Pokecard
        id={pokemon.id}
        name={pokemon.name}
        type={pokemon.types}
        evolution={pokemon.evolution}
        image={pokemon.url}
      />;
    }
  }

  return generateList;
}

export default PokeList;
