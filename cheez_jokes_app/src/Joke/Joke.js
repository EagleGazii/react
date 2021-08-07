import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {

    getColor() {
        if (this.props.vote >= 15) {
            return "#4CAF50";
        } else if (this.props.vote >= 12) {
            return "#8BC34A";
        } else if (this.props.vote >= 9) {
            return "#CDDC39";
        } else if (this.props.vote >= 6) {
            return "#FFEB3B";
        } else if (this.props.vote >= 3) {
            return "#FFC107";
        } else if (this.props.vote >= 0) {
            return "#FF9800";
        } else {
            return "#F44336";
        }

    }
    getEmoji() {
        if (this.props.vote >= 15) {
            return "em em-rolling_on_the_floor_laughing";
        } else if (this.props.vote >= 12) {
            return "em em-laughing";
        } else if (this.props.vote >= 9) {
            return "em em-smiley";
        } else if (this.props.vote >= 6) {
            return "em em-slightly_smiling_face";
        } else if (this.props.vote >= 3) {
            return "em em-neutral_face";
        } else if (this.props.vote >= 0) {
            return "em em-confused";
        } else {
            return "em em-angry";
        }

    }

    constructor(props) {
        super(props);

        this.increaseVote = this.increaseVote.bind(this);
        this.decreaseVote = this.decreaseVote.bind(this);
    }
    increaseVote() {
        this.props.increase(this.props.id, 1);
    }
    decreaseVote() {
        this.props.decrease(this.props.id, -1);
    }
    render() {
        return (
            <div className="Joke">
                <div className="Joke-rating">
                    <button onClick={this.increaseVote} className="Joke-btn"><i className="fas fa-arrow-up"></i></button>
                    <div className="Joke-rating-content" style={{ borderColor: this.getColor() }}>
                        {this.props.vote}
                    </div>
                    <button onClick={this.decreaseVote} className="Joke-btn"><i className="fas fa-arrow-down"></i></button>
                </div>
                <div className="Joke-content">
                    {this.props.joke}
                </div>
                <div className="Joke-emoji">
                    <i className={this.getEmoji()}></i>
                </div>
            </div>
        )
    }
}

export default Joke
