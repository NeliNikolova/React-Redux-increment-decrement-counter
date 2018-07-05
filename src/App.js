import React, { Component } from 'react';
import './App.css';
import ItemWrap from "./components/ItemsWrap"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MY APP</h1>
        </header>
        <p className="App-intro">
       <ItemWrap/>
        </p>
      </div>
    );
  }
}

export default App;
