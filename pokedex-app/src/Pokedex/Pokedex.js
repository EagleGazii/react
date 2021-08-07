import React, { Component } from 'react'
import './Pokedex.css'
import Pokecard from '../Card/Pokecard'

class Pokedex extends Component {
    /* static defaultProps = {
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
    } */
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h2 className="Pokedex-winner">Winner</h2>;
        } else {
            title = <h2 className="Pokedex-losser">Losser</h2>
        }
        return (
            <div className="Pokedex">


                {title}
                <h4>Total Experience : {this.props.exp}</h4>


                <div className="Pokedex-cards">
                    {console.log(this.props.pokemon)}
                    {this.props.pokemon.map((item) => (
                        <Pokecard id={item.id} name={item.name} type={item.type} base_experience={item.base_experience} />
                    ))}
                </div>

            </div>
        )
    }
}

export default Pokedex;