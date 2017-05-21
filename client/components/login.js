import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div>
      <div className="jumbotron">
        <h1>Recipe Generator</h1>
      </div>
      <form onSubmit={this.props.handleLoginSubmit}>
        <input placeholder="Username" type="text" name="username" value={this.props.username} onChange={this.props.handleChange} />
        <input placeholder="Password" type="password" name="password" value={this.props.password} onChange={this.props.handleChange} />
        <input type="submit" value="Login"/>
      </form>
      <p>Don't have an account?</p> 
        <button bsStyle="primary" value="signup" onClick={this.props.handleSignUpClick}>Sign Up</button>
    </div>
    )
  }
}

module.exports = Login;