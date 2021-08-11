import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Slider from "rc-slider";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { formatColor: "hex", open: false };
    this.handleformatColor = this.handleformatColor.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  handleformatColor(event) {
    let formatColor = event.target.value;
    this.setState({ formatColor, open: true });
    this.props.changeFormatColor(formatColor);
  }
  render() {
    const { level, changeLevel } = this.props;
    const { formatColor, open } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              min={100}
              max={900}
              step={100}
              defaultValue={level}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={formatColor} onChange={this.handleformatColor}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          onClose={this.closeSnackbar}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed To - {formatColor.toUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describeby": "message-id" }}
          action={
            <IconButton onClick={this.closeSnackbar}>
              <CloseIcon />
            </IconButton>
          }
        />
      </header>
    );
  }
}

export default Navbar;
