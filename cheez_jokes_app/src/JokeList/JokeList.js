import React, { Component } from 'react';
import './Jokelist.css';
import axios from 'axios';
import Joke from '../Joke/Joke';
import { v4 as uuidv4 } from 'uuid';

class JokeList extends Component {
    static defaultProps = {
        numOfJokes: 10
    }
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            loading: false,
            error: false
        }
        this.handleVoting = this.handleVoting.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.seenJokes = new Set(this.state.jokes.map(joke => joke.content))
    }
    componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.getJokes()
        }
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({ loading: true }, this.getJokes)
    }
    /* sortJokes() {
        let sortedObject = [];
        let minVote;
        let jokesLength = this.state.jokes.length;
        let jokes = this.state.jokes;


        for (let index = 0; index < jokesLength; index++) {
            minVote = jokes[index].vote;

            for (let secondIndex = index; secondIndex < jokesLength; secondIndex++) {
                if (minVote < jokes[secondIndex].vote) {
                    let firstObject = { ...jokes[index] };
                    jokes[index] = { ...jokes[secondIndex] };
                    jokes[secondIndex] = firstObject;
                }
            }

        }

        this.setState({
            jokes: jokes
        }, () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)))

    } */

    async getJokes() {
        try {
            let jokes = [];
            while (jokes.length < this.props.numOfJokes) {
                let response = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })

                let newJoke = response.data.joke;
                if (!this.seenJokes.has(newJoke)) {
                    jokes.push({ content: response.data.joke, vote: 0, id: response.data.id })
                }


            }

            this.setState(prevState => ({
                loading: false,
                jokes: [...prevState.jokes, ...jokes]
            }), () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)))
        } catch (error) {
            this.setState({
                loading: false,
                error: true
            })

        }

    }
    handleVoting(jokeID, delta) {
        this.setState(prevState => ({
            jokes: prevState.jokes.map(joke =>
                joke.id === jokeID ? { ...joke, vote: joke.vote + delta } : joke
            )
        }), () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)));
    }



    render() {
        if (this.state.loading) {
            return (
                <div className="spinner">
                    <i className="far fa-8x fa-laugh fa-spin"></i>
                    <h1 className="JokeList-title">Loading...</h1>
                </div>
            )
        }
        if (this.state.error) {
            return (
                <div className="JokeList-error-bar">
                    <i className="em em-cry Error-property"></i>
                    <h1 className="JokeList-title">Check your internet connection!!</h1>
                </div>
            )
        }
        let jokes = this.state.jokes.sort((a, b) => b.vote - a.vote);
        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <div className="JokeList-icon">
                        <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="happy emoji" />
                    </div>
                    <button className="JokeList-btn" onClick={this.handleClick}>Add Jokes</button>
                </div>

                <div className="JokeList-jokes">

                    {
                        jokes.map(joke => (

                            <Joke id={joke.id} key={joke.id} joke={joke.content} vote={joke.vote} increase={this.handleVoting} decrease={this.handleVoting} />
                        ))}
                </div>
            </div>
        )
    }
}

export default JokeList
