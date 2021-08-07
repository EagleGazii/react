import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

class NavBar extends Component {
  render() {
    const navList = this.props.dogs.map((dog, index) => (
      <li className="nav-item" key={index}>
        <NavLink exact className="nav-link" to={`/dogs/${dog.name}`}>
          {dog.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
        <Link className="navbar-brand" to="/dogs">
          Dog App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarItemCollapse"
          aria-controls="navbarItemCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarItemCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/dogs">
                Home
              </NavLink>
            </li>
            {navList}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
