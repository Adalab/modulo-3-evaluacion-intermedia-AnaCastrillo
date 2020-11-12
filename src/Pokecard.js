import React from 'react';

class Pokecard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.id);
    return <h2>{this.props.name}</h2>;
  }
}

export default Pokecard;
