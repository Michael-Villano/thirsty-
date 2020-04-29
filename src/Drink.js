import React, { Component } from 'react';

class Drink extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      thumbnail: '',
      ingredients: [],
      measures: [],
      instructions: ''
    }
  }

  fetchRandomDrink = () => {
    fetch('http://localhost:3001/random', {
          method: 'get',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => response.json())
        .then(drink => {
          this.setState({name: drink.strDrink, thumbnail: drink.strDrinkThumb, instructions: drink.strInstructions})
        })
        .catch(err => console.log)
  }
  render() {
    <div className='tc'>
      <a onClick={ this.fetchRandomDrink }>Random</a>
    </div>
  }
}

export default Drink;
