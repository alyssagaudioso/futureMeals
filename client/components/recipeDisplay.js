import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe.js';
import Profile from './profile.js';


class RecipeDisplay extends Component {
  constructor(props) {
    super(props)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleRecipeChange = this.handleRecipeChange.bind(this);
    this.state = {
      q: "",
      healthlabel: "",
      recipes: [],
    }
  }


  handleRecipeChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }


  handleSearchSubmit(e) {
    e.preventDefault();
    let base = 'https://api.edamam.com/search?';
    let q = `q=${this.state.q}`;
    let idAndKey = `&app_id=9c91d5f4&app_key=6f47ee6858565edebe96788f8743461a`;
    let range = `&from=0&to=5`;
    //let health = `&health=`;
    let url = base + q + idAndKey + range;
    axios.get(url)

      .then((response) => {
        //response.hits is an array of 5 recipe objects... or at least should be.. test?
        this.setState({ recipes: response.data.hits });
      })
  }

  render() {
    let recipes = this.state.recipes.map((curr, i) => {
      return <Recipe recipedata={curr} username={this.props.username} key={i} />
    })

    // const ingredients = this.props.recipeData.ingredientLines[0].split(/,|;/g).map((ingredient, index) => {
    //   console.log(ingredient)
    //   return <li>{ingredient}</li>
    // })

    return (
      <div>
        <h1>Search for a Recipe</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input placeholder="Search" type="text" name="q" value={this.state.q} onChange={this.handleRecipeChange} />
          <input type="submit" value="submit" />
        </form>
        <button onClick={this.props.handleProfileClick}>Profile</button>
        {recipes}
      </div>
    )
  }
}

module.exports = RecipeDisplay;