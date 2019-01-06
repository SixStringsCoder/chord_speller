import React from 'react';

const HelpNotePositions = ({ pos, exampleNote, halfSteps }) => {
    return (
      <li>a <span className="help-window-text">{pos}</span>
              ({halfSteps}
              <span className="help-window-note-examples"> example: {exampleNote}</span>)
      </li>
    )
}

export default HelpNotePositions;
