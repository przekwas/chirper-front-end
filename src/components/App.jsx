import React, { Component } from 'react';
import logo from '../logo.gif';
import '../App.css';
import AddChirp from './AddChirp';
import Chirp from './Chirp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chirper</h1>
        </header>

        <AddChirp />
        <Chirp text="FIRST" />
        <Chirp text="Omg that meme is so old.  Plz die in a fire." />
        <Chirp text="NO U" />

      </div>
    );
  }
}

export default App;
