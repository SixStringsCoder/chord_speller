import React from 'react';
import Chord from '../Chord/Chord';

const ChordsSection = ({chords, correctAudio, playNote}) => {
  return (
    <main>
      <form action="index.html" method="POST" className="chordEntryArea">
      {
        chords.map((chord, index) => {
          return <Chord
            notes={chord.notes}
            name={chord.name}
            label={chord.label}
            key={chord.name}
            correctAudio={correctAudio}
            playNote={playNote} />
        })
      }
      </form>
    </main>
  )
}

export default ChordsSection;
