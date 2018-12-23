import React, { Component } from 'react';
import './App.css';
import ContentBtns from '../ContentBtns/ContentBtns';
import ChordsSection from '../ChordsSection/ChordsSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 id="site-title">Chord Speller</h1>
        </header>
        <ContentBtns />
        <ChordsSection />
      </div>
    );
  }
}

export default App;
