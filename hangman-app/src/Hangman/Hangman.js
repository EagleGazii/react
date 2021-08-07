import React, { Component } from 'react';
import './Hangman.css';
import FirstShape from '../Assets/1.hangman.png';
import SecondShape from '../Assets/2.hangman.png';
import ThirdShape from '../Assets/3.hangman.png';
import FourthShape from '../Assets/4.hangman.png';
import FifthShape from '../Assets/5.hangman.png';
import SixthShape from '../Assets/6.hangman.png';
import SeventhShape from '../Assets/7.hangman.png';
import { randomWord } from '../words/words'

class Hangman extends Component {
    static defaultProps = {
        images: [
            { name: "Hangman First  Position", url: FirstShape },
            { name: "Hangman Second  Position", url: SecondShape },
            { name: "Hangman Third  Position", url: ThirdShape },
            { name: "Hangman Fourth  Position", url: FourthShape },
            { name: "Hangman Fifth  Position", url: FifthShape },
            { name: "Hangman Sixth  Position", url: SixthShape },
            { name: "Hangman Seventh  Position", url: SeventhShape }
        ],
        maxWrongs: 6
    }
    constructor(props) {
        super(props);
        this.state = {
            nWrong: 0,
            guessed: new Set(),
            answer: "apple",
            finish: false
        }
        this.handleGuess = this.handleGuess.bind(this);
        this.reset = this.reset.bind(this);
    }
    guessedWord() {
        return this.state.answer.split("").map(ltr => (this.state.guessed.has(ltr) ? ltr : " _ "))
    }

    handleGuess(evt) {
        let ltr = evt.target.value;

        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));


    }


    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
            >{ltr}</button>
        ))
    }




    reset() {
        this.setState({
            nWrong: 0,
            answer: randomWord(),
            guessed: new Set()

        })
    }

    render() {
        const gameOver = this.state.nWrong >= this.props.maxWrongs;
        const win = this.guessedWord().join("") === this.state.answer;
        return (
            <div className="Hangman">
                <h1 className="Hangman-title">Hangman</h1>
                <img className="Hangman-image" src={this.props.images[this.state.nWrong].url} alt={this.props.images[this.state.nWrong].name} />
                <p>Guesses Wrong : {this.state.nWrong}</p>
                <p className="Hangman-word">{!gameOver ? this.guessedWord() : this.state.answer}</p>
                {win ? <p>You Win</p> : <p className="Hangman-btns">{!gameOver ? this.generateButtons() : <p>You lose</p>}</p>}

                <p><button onClick={this.reset}>Restart</button></p>

            </div>
        )
    }
}

export default Hangman;
