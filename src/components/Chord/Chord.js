import React from 'react';
import Note from '../Note/Note';

const Chord = ({ name, label, notes, correctAudio, playNote }) => {
  return (
    <div className="chordEntryDiv">
      <label htmlFor={notes[0]} className="chord-name" id={name}>{label}</label>
      <div className="noteInputContainer" >
      {
        notes.map((note, index) => {
          return <Note note={note}
                      key={note + index}
                      id={note}
                      correctAudio={correctAudio}
                      playNote={playNote} />;
        })
      }
      </div>
    </div>
  )
}

export default Chord;
