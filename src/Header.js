import React, { Component } from "react";
import PropTypes from "prop-types";

/**
* @augments {Component<{    mytext:string,cb:Function  >}
*/
 
class Header extends Component {
  static propTypes = {
    mytext: PropTypes.string,
    cb: PropTypes.func
  };
  render() {
    return <div>{this.props.cb}</div>;
  }
}

export default Header;
