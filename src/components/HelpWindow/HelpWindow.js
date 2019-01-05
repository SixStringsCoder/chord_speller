import React from 'react';
import chromaticScale from '../../images/piano-chromatic-scale.jpg';

const HelpWindow = ({ showModal, handleQuestion, hasQuestion, chords, scale }) => {

  const randomChord = Math.floor(Math.random() * chords[scale].length);

  return (
    <section className={hasQuestion ? "help-window-show" : "help-window-hide"}>
      <p><span className="help-window-text">{scale}</span> chords consists of:</p>
      <ul className="chord-note-list-helpMenu">
       <li><span className="help-window-text">a root </span>
        note (the lowest note in the chord, e.g.
        <span className="help-window-note-examples"> {chords[scale][randomChord].notes[0]}</span>)
        </li>
       <li><span className="help-window-text">a third </span>
        ({chords["type"][scale][0]} half steps higher than the root, e.g.
        <span className="help-window-note-examples"> {chords[scale][randomChord].notes[1]}</span>)
        </li>
       <li><span className="help-window-text">a fifth </span>
        ({chords["type"][scale][1]} half steps higher than the third, e.g.
        <span className="help-window-note-examples"> {chords[scale][randomChord].notes[2]}</span>)
        </li>
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
