import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './listing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Modal with React 16 Portals</h1>
        <Listing />
        <div id="modal-container"></div>
      </div>
    );
  }
}

export default App;
