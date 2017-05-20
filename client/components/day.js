import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe.js';
import SavedRecipe from './savedRecipe.js'
//whatever child components we need

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
      day: this.props.day,
      savedRecipes: []
    }
  }

  deleteSavedRecipe(index){
    console.log('in the deleteSavedRecipe function');
    axios.delete('/saveRecipe', { params: { day: this.state.day, 
                                            username: this.state.username, 
                                            label: this.state.label }})
      .then(response => {
        let newState = {};
        newState.savedRecipes = this.state.savedRecipes.splice(index,1);
        this.setState(newState);
        //have to change the state of day parent component saved recipies
      });
  }

  componentDidMount() {
    console.log('in component did mount')
    axios.get(`day/${this.state.day}/${this.state.username}`)
      .then((response) => {
        this.setState({savedRecipes: response.data});
      });
  }

  render() {

    const recipes = this.state.savedRecipes.map((curr, index) => {
       return 
        // <div>
          {/*<button value="delete" onClick={() => this.deleteSavedRecipe(index)}>Delete</button>*/}
          <SavedRecipe day={this.state.day} username={this.state.username} recipeData={curr} key={index} />
         {/*</div>*/}
    });

    return (
      <div>
        <h4>{this.props.day}</h4>
        {recipes}
      </div>
    )
  }
}

module.exports = Day;