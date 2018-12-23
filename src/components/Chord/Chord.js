import React from 'react';

const Chord = (props) => {
  return (
    <div className="chordEntryDiv">
      <label for="C" className="chord-name" id="ceg">C </label>
      <input type="text" name="C" id="C" className="note" tabIndex="0" maxlength="1" pattern="[A-G]"/>
      <input type="text" name="E" id="E" className="note" tabIndex="0" maxlength="1" />
      <input type="text" name="G" id="G" className="note" tabIndex="0" maxlength="1" />
    </div>
  )
}

export default Chord;
