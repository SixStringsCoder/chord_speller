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

  playNote = (note) => {
    let thisNote = new Audio(require(`../../audio/${note}.mp3`));
    thisNote.play();
  }



  render() {
    const { content, menu } = this.state;
    return (
      <div className="App">
        <header>
          <h1 id="site-title">Chord Speller</h1>
        </header>
        <ContentBtns content={this.loadContent} menu={menu} />
        <ChordsSection chords={chords[content]}
                        correctAudio={this.isCorrectAudio}
                        playNote={this.playNote} />
      </div>
    );
  }
}

export default App;
