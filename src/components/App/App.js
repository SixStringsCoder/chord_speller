import React, { Component } from 'react';
import './App.css';
import ContentBtns from '../ContentBtns/ContentBtns';
import ChordsSection from '../ChordsSection/ChordsSection';
import chords from '../util/utility';


class App extends Component {
  state = {
    menu: [],
    content: "major",
  }

  // Auto update ContentBtns based on chords object in utility file
  componentDidMount() {
    this.setState({
      menu: Object.keys(chords)
    })
  }

  loadContent = (selection) => {
    this.setState({
      content: selection
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 id="site-title">Chord Speller</h1>
        </header>
        <ContentBtns content={this.loadContent} menu={this.state.menu} />
        <ChordsSection chords={chords[this.state.content]} />
      </div>
    );
  }
}

export default App;
