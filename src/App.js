import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RolesManagement } from './views/index';
import { AffiliateManagement } from './views/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <RolesManagement /> */}
        <AffiliateManagement />
      </div>
    );
  }
}

export default App;
