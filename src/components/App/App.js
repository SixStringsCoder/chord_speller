import React, { Component } from 'react';
import './App.css';
import ContentBtns from '../ContentBtns/ContentBtns';
import ChordsSection from '../ChordsSection/ChordsSection';
import { chords } from '../util/utility';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnMenu: [],
      content: "major",
    }
  }

  // Auto update ContentBtns based on chords object in utility file
  componentDidMount() {
    this.setState({
      btnMenu: Object.keys(chords)
    })
  }

  // Loads content based on button clicked (i.e. major, minor, etc.)
  loadContent = (selection) => {
    this.setState({
      content: selection
    })
  }


  render() {
    const { content, btnMenu } = this.state;
    return (
      <div className="App">
        <header>
          <h1 id="site-title">&#127932; Chord Speller &#127926;</h1>
        </header>
        <ContentBtns content={this.loadContent}
                     btnMenu={btnMenu}
                     />
        <ChordsSection chords={chords[content]} />
      </div>
    );
  }
}

export default App;
