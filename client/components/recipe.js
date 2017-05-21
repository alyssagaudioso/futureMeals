import React, { Component } from 'react';
import axios from 'axios';


class Recipe extends Component {
  constructor(props) {
    super(props)
    this.saveToDay = this.saveToDay.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.state = {
      day: "",
    }
  }

  handleDropDownChange(e) {
    this.setState({day: e.target.value})
  }


  saveToDay(e) {
    e.preventDefault();
    axios.post('/recipeDisplay', { day: this.state.day, //TEST THIS!!!
                                   username: this.props.username, //USERNAME MUST BE PASSED DOWN FROM PARENT
                                   recipe: this.props.recipedata
                                  })
      .then(response => {
        console.log(response.data);
      });

  }

  render() {
    console.log(this.state)

    let ingredients = this.props.recipedata.recipe.ingredientLines.map((curr, index) => {
      return <li>{curr}</li>
    })
    //ingredientLines is an array so wont display properly
    return (
      <div>

        <form onSubmit={this.saveToDay}>
          <select name="days" onChange={this.handleDropDownChange}>
            <option value="Select Day">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <input type="submit" value="Save" />
        </form>
        <a href={this.props.recipedata.recipe.url}><img src={this.props.recipedata.recipe.image}/></a>
        <h3>{this.props.recipedata.recipe.label}</h3>
        <ul>{ingredients}</ul>
        <p>Yield: {this.props.recipedata.recipe.yield}</p>
        <p>Calories: {this.props.recipedata.recipe.calories}</p>
      </div>
    )
  }
}

module.exports = Recipe;