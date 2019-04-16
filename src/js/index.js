import React from 'react';
import ReactDom from 'react-dom';
import Greeting from './greeting';
import '../scss/style.scss'

ReactDom.render(<Greeting name='World'/>, document.getElementById('render-target'));

