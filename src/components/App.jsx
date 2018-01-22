import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '../App.css';
import AddChirp from './AddChirp';
import Chirp from './Chirp';
import Header from './Header';
import headshot from '../headshot.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddChirp />
        <Chirp
          author={ { name: `Luke`, avatarSrc: {headshot} } }
          text="FIRST"
          time="22/1/2018 3:41PM"
        />
        {/* <Chirp
          text="Omg that meme is so old.  Plz die in a fire."
          time="22/1/2018 3:45PM"
        />
        <Chirp
          text="NO U"
          time="22/1/2018 3:52PM"
        /> */}
      </div>
    );
  }
}

export default App;
