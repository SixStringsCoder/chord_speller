import React, { Component } from 'react';
import './App.css';
import ContentBtns from '../ContentBtns/ContentBtns';
import ChordsSection from '../ChordsSection/ChordsSection';
import chords from '../util/utility';
import bell from '../../audio/bell.mp3';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      content: "major",
    }

    this.bell = new Audio(bell);
  }

  // Auto update ContentBtns based on chords object in utility file
  componentDidMount() {
    this.setState({
      menu: Object.keys(chords)
    })
  }

  // Loads content based on button clicked
  loadContent = (selection) => {
    this.setState({
      content: selection
    })
  }

  isCorrectAudio = (answer) => {
    if (answer) {
      this.bell.volume = 0.2;
      this.bell.play();
    }
  }



  render() {

    return (
      <div className="App">
        <header>
          <h1 id="site-title">Chord Speller</h1>
        </header>
        <ContentBtns content={this.loadContent} menu={this.state.menu} />
        <ChordsSection chords={chords[this.state.content]}
                        correctAudio={this.isCorrectAudio} />
      </div>
    );
  }
}

export default App;
