import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { paletteName, emoji } = this.props;
    return (
      <footer className="Footer">
        <div className="copyright">&copy;2021 EagleGazi</div>
        <div className="palette-name">{`${paletteName} ${emoji}`}</div>
      </footer>
    );
  }
}

export default Footer;
