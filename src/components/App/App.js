import React, { Component } from 'react';
import './App.css';
import ContentBtns from '../ContentBtns/ContentBtns';
import ChordsSection from '../ChordsSection/ChordsSection';
import HelpWindow from '../HelpWindow/HelpWindow';
import { chords } from '../util/utility';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnMenu: [],
      content: "major",
      hasQuestion: false,
    }
  }

  // Auto update ContentBtns based on chords object in utility file
  componentDidMount() {
    let chordTypes = Object.keys(chords)
    this.setState({
      btnMenu: chordTypes.slice(1)
    })
  }

  // Loads content based on button clicked (i.e. major, minor, etc.)
  loadContent = (selection) => {
    this.setState({
      content: selection
    })
  }

  handleQuestion = () => this.setState({hasQuestion: !this.state.hasQuestion});

  render() {
    const { content, btnMenu } = this.state;
    return (
      <div className="App">
        <header>
          <h1 id="site-title">
            <span role="img" aria-label="treble clef icon">&#127932;</span>
              Chord Speller 
            <span role="img" aria-label="musical notes icon">&#127926;</span>
          </h1>
        </header>
        <HelpWindow hasQuestion={this.state.hasQuestion}
                    handleQuestion={this.handleQuestion}
                    chords={chords}
                    scale={this.state.content}
                    />
        <ContentBtns content={this.loadContent}
                     btnMenu={btnMenu}
                     handleQuestion={this.handleQuestion}
                     />
        <ChordsSection chords={chords[content]} />
      </div>
    );
  }
}

export default App;
