import React, { Component } from 'react';
import style from './Header.module.scss'

var classNames = require('classnames');


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className={style.header_container}>
          <div className={style.header_div}>
            <img src={require("../img/logo-cmp.png")} alt={'Theodo'} className={style.logo}/>
            <span className={style.header_text}>Menu Item 1</span>
            <span className={style.header_text}>Menu Item 2</span>
            <span className={style.header_text}>Menu Item 3</span>
          </div>
          <div className={style.header_div}>
            <input className={style.header_search_input} placeholder={'Rechercher'}/>
            <a className={style.header_text}>Subscribe</a>
            <button className={classNames(style.header_button)}>Login</button>
          </div>
        </div>
      </div>

    );
  }
}

export default Header;
