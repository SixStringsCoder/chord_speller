import React, { Component } from 'react';
import './App.css';
import ContentBtns from '../ContentBtns/ContentBtns';
import ChordsSection from '../ChordsSection/ChordsSection';
import chords from '../util/utility';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 id="site-title">Chord Speller</h1>
        </header>
        <ContentBtns />
        <ChordsSection chords={chords}/>
      </div>
    );
  }
}

export default App;
