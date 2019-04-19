import React, { Component } from 'react';
// import classname from {classname} classnames(class1, class2)

import style from './Header.module.scss'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className={style.header}>
          <div className={style.header_div}>
            <img src={require("../img/logo-theodo.png")} alt={'Theodo'} className={style.logo}/>
            <span className={style.header_text}>Menu Item 1</span>
            <span className={style.header_text}>Menu Item 2</span>
            <span className={style.header_text}>Menu Item 3</span>
          </div>
          <div className={style.header_div}>
            <button className={style.header_text}>Subscribe</button>
            <a className={style.header_text}>Login</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
