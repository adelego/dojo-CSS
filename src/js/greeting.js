import React from 'react';
// import '../scss/style.css';

export default class Greeting extends React.Component {
  constructor() {
    super();
  }

  render() {
      const elements = ['one', 'two', 'three'];

      const items = []

      for (const [index, value] of elements.entries()) {
          items.push(<li key={index}>{value}</li>)
      }
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}!</h1>
        <div className='test'>bouga</div>
          <div> {items} </div>
        <p class="test"> dfgsdfgsBrought to you from a Docker container by Webpack Hot Module Replacement</p>
      </div>
    );
  }
}
