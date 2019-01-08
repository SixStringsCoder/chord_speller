import React from 'react';
import Chord from '../Chord/Chord';

const ChordsSection = ({ chords, playChord }) => {
  return (
    <main>
      <form action="index.html" method="POST" className="chordEntryArea">
      {
        chords.map((chord, index) => {
          return <Chord
            notes={chord.notes}
            audio={chord.audio}
            chordAudio={chord.chordAudio}
            enharmonic={chord.enharmonic}
            name={chord.name}
            label={chord.label}
            key={chord.name}
            />
        })
      }
      </form>
    </main>
  )
}

export default ChordsSection;
