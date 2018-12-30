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
    chord.play();
  }

  render() {
    const { name, label, notes } = this.props;
    return (
      <div className="chordEntryDiv">
        <label htmlFor={label}
              className="chord-name"
              id={name}
              onClick={this.playChord}>{label}</label>
        <div className="noteInputContainer" >
        {
          notes.map((note, index) => {
            const notePos = ["root", "third", "fifth", "seventh"]
            return <Note note={note}
                        key={note + index}
                        id={note}
                        placeholder={notePos[index]}
                        />;
          })
        }
        </div>
      </div>
    )
  }
}

export default Chord;
