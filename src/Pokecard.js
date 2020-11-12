import React from 'react';

class Pokecard extends React.Component {
  constructor(props) {
    super(props);
  }
  getType() {
    let typeList = [];
    for (let type of this.props.types) {
      typeList.push(<span className="type">{type}</span>);
    }
    return typeList;
  }
  render() {
    console.log(this.props.id);
    return (
      <>
        <img src={this.props.image} alt={this.props.name} />
        <h2>{this.props.name}</h2>
        <div>{this.getType()}</div>
      </>
    );
  }
}

export default Pokecard;
