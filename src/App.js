import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import data from "./users.json";

import TableContainer from "./component/TableContainer";

class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TableContainer users={this.props.props.users} />
      </div>
    );
  }
}

export default App;
