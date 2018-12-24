import React from 'react';

const Note = ({ note, id }) => {
  return (
      <input
        type="text"
        name={note}
        id={id}
        className="note"
        tabIndex="0"
        maxLength={note.length === 2 ? 2 : 1}
      />
  )
}

export default Note;
