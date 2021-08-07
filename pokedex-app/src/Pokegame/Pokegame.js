import React, { Component } from 'react';
import Pokedex from '../Pokedex/Pokedex';
import './Pokegame.css';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { "id": 4, "name": "Charmander", "type": "fire", "base_experience": 62 },
            { "id": 7, "name": "Squirtle", "type": "water", "base_experience": 63 },
            { "id": 11, "name": "Metapod", "type": "bug", "base_experience": 72 },
            { "id": 12, "name": "Butterfree", "type": "flying", "base_experience": 178 },
            { "id": 25, "name": "Pikachu", "type": "electric", "base_experience": 112 },
            { "id": 39, "name": "Jigglypuff", "type": "normal", "base_experience": 95 },
            { "id": 94, "name": "Gengar", "type": "poison", "base_experience": 225 },
            { "id": 134, "name": "Eevee", "type": "normal", "base_experience": 65 }
        ]
    }
    render() {
        let firstHand = [];
        let secondHand = [...this.props.pokemon];
        while (firstHand < secondHand) {
            let randomIndex = Math.floor(Math.random() * secondHand.length);
            let randomPokemon = secondHand.splice(randomIndex, 1)[0];

            firstHand.push(randomPokemon);
        }
        let firstExperience = firstHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let secondExperience = secondHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);


        return (
            <div className="Pokegame">
                <Pokedex pokemon={firstHand} isWinner={firstExperience > secondExperience} exp={firstExperience} />
                <Pokedex pokemon={secondHand} isWinner={secondExperience > firstExperience} exp={secondExperience} />

            </div>
        )
    }
}
export default Pokegame;
