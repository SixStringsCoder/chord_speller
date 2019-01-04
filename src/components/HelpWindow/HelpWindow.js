import React from 'react';

const HelpWindow = ({ showModal, handleQuestion, hasQuestion }) => {

  return (
    <section className={hasQuestion ? "help-window-show" : "help-window-hide"}>
      <p>a major chord consists of:</p>
      <ul>
       <li>a root note (the lowest note in the chord)</li>
       <li>a third (4 half steps higher than the root)</li>
       <li>A fifth (3 half steps higher than the third).</li>
      </ul>
      <span onClick={handleQuestion}
            id="close-modal-icon"
            role="img"
            aria-label="icon">❎</span>
    </section>
  )
}

export default HelpWindow;
