import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Random Drink',
      thumbnail: 'https://cdn3.vectorstock.com/i/1000x1000/88/37/neon-sign-beer-bar-vector-3168837.jpg',
      ingredients: [],
      measures: [],
      instructions: 'How to make it',
    }
  }

  nullIngredient = (x) => {
    return (x !== null);
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
          const newIngredients = [ drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4,
                                   drink.strIngredient5, drink.strIngredient6, drink.strIngredient7, drink.strIngredient8,
                                   drink.strIngredient9, drink.strIngredient10, drink.strIngredient11, drink.strIngredient12,
                                   drink.strIngredient13, drink.strIngredient14, drink.strIngredient15 ];
          const arr = newIngredients.filter(this.nullIngredient);
          this.setState({ingredients: newIngredients});
        })
        .catch(err => console.log)
  }

  listIngredients = () => {
    const arr = this.state.ingredients.filter(this.nullIngredient);
    let str = arr.toString();
    return str;
  }

  render() {
    const { name, thumbnail, instructions, ingredients } = this.state;
    return (
      <div>
      <a onClick={this.fetchRandomDrink}>
        <p className="ma0 white tc f1 grow pointer">Thirsty?</p>
      </a>
        <article className="br2 bg-dark-gray white mv4 w-100 w-50-m w-25-l mw5 center">
          <img src={ thumbnail } class="db w-100 br2 br--top" alt=""/>
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">{ name }</h1>
              </div>
              <div className="dtc tr">
                <h2 className="f5 mv0"></h2>
              </div>
            </div>
            <p className="f6 lh-copy measure ma2 gray">{this.listIngredients()}</p>
            <p className="f6 lh-copy measure mt2 mid-gray">{ instructions }</p>
          </div>
        </article>
      </div>
    )
  }
}

export default Card;
