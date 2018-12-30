import React, { Component } from 'react';
import Note from '../Note/Note';
import { chordAudio } from '../util/utility';

class Chord extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  playChord = (e) => {
    let loadChord = chordAudio[`${e.target.htmlFor}-chord`];
    let chord = new Audio(loadChord);
    console.log(loadChord);
    chord.play();
  }

  render() {
    const { name, label, notes, playNote } = this.props;
    return (
      <div className="chordEntryDiv">
        <label htmlFor={label}
              className="chord-name"
              id={name}
              onClick={this.playChord}>{label}</label>
        <div className="noteInputContainer" >
        {
          notes.map((note, index) => {
            return <Note note={note}
                        key={note + index}
                        id={note}
                        playChord={this.playChord}
                        playNote={playNote} />;
          })
        }
        </div>
      </div>
    )
  }
}

export default Chord;
