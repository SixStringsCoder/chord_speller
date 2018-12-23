import React from 'react';
import Chord from '../Chord/Chord';

const ChordsSection = (props) => {
  return (
    <main>
      <form action="index.html" method="POST" className="chordEntryArea">
        <Chord />
      </form>
    </main>
  )
}

export default ChordsSection;
