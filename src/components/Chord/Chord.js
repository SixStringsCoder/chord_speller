import React from 'react';
import Note from '../Note/Note';

const Chord = ({ name, root, third, fifth, notes }) => {
  return (
    <div className="chordEntryDiv">
      <label htmlFor={root} className="chord-name" id={name}>{root}</label>
      <div className="noteInputContainer" >
      {
        notes.map((note, index) => {
          return <Note note={note} key={note + index} id={note + index} />;
        })
      }
      </div>
    </div>
  )
}

export default Chord;
