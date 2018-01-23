import React, { Component } from 'react';
import '../App.css';
import AddChirpForm from './AddChirp';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddChirpForm />
      </div>
    );
  }
}

export default App;
