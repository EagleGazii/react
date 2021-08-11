import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Colorbox.css";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    marginBottom: "-4px",
  },
  copyBtn: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginTop: "-15px",
    marginLeft: "-50px",
    textAlign: "center",
    border: "none",
    fontSize: "1rem",
    textTransform: "uppercase",
    outline: "none",
    lineHeight: "30px",
    color: "white",
    background: "rgba(255, 255, 255, 0.3)",
    opacity: "0",
  },
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.root}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
          <div className={"copy-container"}>
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className={classes.copyBtn}>Copy</button>
          </div>
          {name && <span className="see-more">More</span>}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
