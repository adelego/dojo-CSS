import React, { Component } from 'react';
import style from './Header.module.scss'

var classNames = require('classnames');


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className={style.header_container}>
        </div>
      </div>

  );
  }
}

export default Header;
