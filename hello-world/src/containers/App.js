import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../style/App.css';
import { Body } from './Body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <Body/>
      </div>
    );
  }
}

export default App;

