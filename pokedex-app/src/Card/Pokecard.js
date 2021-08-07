import React, { Component } from 'react';
import "./Pokecard.css"
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
class Pokecard extends Component {
    render() {
        let imageId = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
        let imageUrl = `${POKE_API}${imageId(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-title">{this.props.name}</h2>
                <div className="Pokecard-image">
                    <img src={imageUrl} alt={this.props.name} />
                </div>

                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.base_experience}</div>
            </div>
        );
    }
}

export default Pokecard;