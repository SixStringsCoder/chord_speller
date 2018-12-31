import React, { Component } from 'react';
import Note from '../Note/Note';

class Chord extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  playChord = () => {
    let loadChord = require(`../../audio/${this.props.chordAudio}-chord.mp3`);
    let chord = new Audio(loadChord);
    chord.play();
  }

  render() {
    const { name, label, notes, audio } = this.props;
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
                        audio={audio[index]}
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
