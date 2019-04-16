import React from 'react';
// import '../scss/style.css';

export default class Greeting extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}!</h1>
        <div className='test'>bouga</div>
        <p class="test"> dfgsdfgsBrought to you from a Docker container by Webpack Hot Module Replacement</p>
      </div>
    );
  }
}
