import React from 'react';
import Chord from '../Chord/Chord';

const ChordsSection = ({chords}) => {
  return (
    <main>
      <form action="index.html" method="POST" className="chordEntryArea">
      {
        chords.major.map((chord, index) => {
          return <Chord
            name={chord.name}
            root={chord.root}
            third={chord.third}
            fifth={chord.fifth}
            key={chord.name} />
        })
      }
      </form>
    </main>
  )
}

export default ChordsSection;
