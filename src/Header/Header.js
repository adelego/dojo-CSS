import React, { Component } from "react";
import { Header as StyledHeader } from "./Header.style";

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div id="header-container"></div>
      </StyledHeader>
    );
  }
}

export default Header;
