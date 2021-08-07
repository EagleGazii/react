import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./doglist.css";

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center my-4">Dog List</h1>

        <div className="row">
          {this.props.dogs.map((dog) => (
            <div className="Dog col-md-6 col-lg-4 text-center" key={dog.name}>
              <img src={dog.src} alt={dog.name} />
              <h3>
                <Link className="underline" to={`/dogs/${dog.name}`}>
                  {dog.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
