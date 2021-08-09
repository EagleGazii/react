import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, formatColor: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormatColor = this.changeFormatColor.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }

  changeFormatColor(formatColor) {
    this.setState({ formatColor });
  }
  render() {
    const { colors, name, emoji } = this.props.palette;
    const { level, formatColor } = this.state;
    const colorList = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        background={color[formatColor]}
        name={color.name}
      />
    ));
    return (
      <div className="Palette">
        {/* Navbar section */}
        <Navbar
          changeLevel={this.changeLevel}
          level={level}
          changeFormatColor={this.changeFormatColor}
        />
        <div className="Palette-colors">
          {/* Create Colors Boxes */ colorList}
        </div>
        {/* Footer sectiom */}
        <Footer paletteName={name} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
