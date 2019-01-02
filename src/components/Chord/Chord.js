import React, { Component } from 'react';
import Note from '../Note/Note';

class Chord extends Component {


  playChord = (e) => {
    let loadChord = require(`../../audio/chords/${this.props.chordAudio}-chord.mp3`);
    let chord = new Audio(loadChord);
    chord.volume = 0.4;
    chord.play();
  }

  render() {
    const { name, label, notes, audio } = this.props;
    return (
      <div className="chordEntryDiv">
        <label htmlFor={label + "root"}
              className="chord-name"
              id={name}
              tabIndex={0}
              onClick={this.playChord}
              onKeyDown={this.playChord}>{label}</label>
        <div className="noteInputContainer" >
        {
          notes.map((note, index) => {
            const notePos = ["root", "third", "fifth", "seventh"]
            return <Note note={note}
                        audio={audio[index]}
                        key={note + index}
                        id={label + notePos[index]}
                        tabIndex={0}
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
