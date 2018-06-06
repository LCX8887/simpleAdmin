import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RolesManagement } from './views/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RolesManagement />
      </div>
    );
  }
}

export default App;
