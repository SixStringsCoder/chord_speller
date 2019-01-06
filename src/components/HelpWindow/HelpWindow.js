import React from 'react';
import chromaticScale from '../../images/piano-chromatic-scale.jpg';
import HelpNotePositions from '../HelpNotePositions/HelpNotePositions';

const HelpWindow = ({ showModal, handleQuestion, hasQuestion, chords, scale }) => {

  const randomChord = Math.floor(Math.random() * chords[scale].length);

  return (
    <section className={hasQuestion ? "help-window-show" : "help-window-hide"}>
      <p><span className="help-window-text">{scale}</span> chords consists of:</p>

      <ul className="chord-note-list-helpMenu">
        {
          (
            chords[scale][randomChord].notes.map((note, index) => {
              let position = chords["type"].positions[index];
              let numHalfSteps = chords["type"][scale][index];
              let sentence =  `${numHalfSteps} half steps above the ${chords["type"].positions[index - 1]},`
              return  <HelpNotePositions pos={position}
                                         halfSteps={index > 0 ? sentence : ""}
                                         exampleNote={note}
                                         />
            })
          )
        }
      </ul>

      <img id="piano-image" src={chromaticScale} alt="chromatic scale on piano" />

      <span onClick={handleQuestion}
            id="close-modal-icon"
            role="img"
            aria-label="icon">❎</span>

    </section>
  )
}

export default HelpWindow;
