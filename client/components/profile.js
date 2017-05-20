import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './recipe.js';
import Day from './day.js'; //whatever child components we need

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username, 
    }
  }

  render() {
    console.log('inside Profile render function')
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayComponents = [];
    for (let i = 0; i < days.length; i += 1) {
      dayComponents.push(<Day username={this.state.username} day={days[i]} />);
    }

    console.log(dayComponents);
    return (
      <div>
        <h1>Profile Page</h1>
        {dayComponents}
      </div>
    )
  }
}

module.exports = Profile;