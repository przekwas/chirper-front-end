import React, { Component } from 'react';
import '../App.css';
import NavBar from './Navbar';
import Header from './Header';
import AddChirpForm from './AddChirp';

//Constructs the order of components to render on the page
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <AddChirpForm />
      </div>
    );
  }
}

export default App;

let d = new Date(Date.now());
console.log(d);
