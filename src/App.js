import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Tachyons from 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className=''>
          <Card />
      </div>
    );
  }
}

export default App;
