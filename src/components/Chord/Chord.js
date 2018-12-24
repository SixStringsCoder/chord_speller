import React from 'react';

const Chord = ({ name, root, third, fifth }) => {
  // console.log(chords);
  return (
    <div className="chordEntryDiv">
      <label htmlFor={name} className="chord-name" id={name}>{root}</label>
      <input type="text" name={root} id={root} className="note" tabIndex="0" maxLength="1" />
      <input type="text" name={third} id={third} className="note" tabIndex="0" maxLength="1" />
      <input type="text" name={fifth} id={fifth} className="note" tabIndex="0" maxLength="1" />
    </div>
  )
}

export default Chord;
