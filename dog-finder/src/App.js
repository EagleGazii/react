import "./App.css";
import React, { Component } from "react";
import Routes from "./Routes";

import hazel from "./Images/hazel.jpg";
import tubby from "./Images/tubby.jpg";
import whiskey from "./Images/whiskey.jpg";
import NavBar from "./NavBar/NavBar";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating foods.",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has sooo much energy!",
          "Hazel is highly intellegent.",
          "Hazel loves people more than dogs",
        ],
      },
    ],
  };
  render() {
    return (
      <div>
        <NavBar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}
export default App;
