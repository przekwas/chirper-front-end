import React, { Component } from 'react';
import '../App.css';
import AddChirp from './AddChirp';
import Chirp from './Chirp';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddChirp />
        <Chirp
          author={{ name: `Luke`, avatarSrc: `../headshot.jpg` }}
          text="FIRST"
          time="22/1/2018 3:29PM"
        />
        <Chirp
          author={{ name: `Luke`, avatarSrc: `../yze.jpg` }}
          text="Omg that meme is so old.  Plz die in a fire."
          time="22/1/2018 3:45PM"
        />
        <Chirp
          author={{ name: `Luke`, avatarSrc: `../headshot.jpg` }}
          text="NO U"
          time="22/1/2018 3:52PM"
        />
      </div>
    );
  }
}

export default App;
