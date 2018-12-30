import React, { Component } from 'react';
import Note from '../Note/Note';

class Chord extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }

  }


  playChord = (e) => {
    let chord = new Audio(require(`../../audio/${e.target.htmlFor}-chord.mp3`));
    console.log("chord clicked");
    chord.play();
  }

  render() {
    const { name, label, notes, playNote } = this.props;
    return (
      <div className="chordEntryDiv">
        <label htmlFor={notes[0]}
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
