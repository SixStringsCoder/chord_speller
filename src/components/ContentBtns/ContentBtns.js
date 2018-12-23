import React, { Component } from 'react';

class ContentBtns extends Component {
  render() {
    return (
      <section id="content-btn-section">
          <button className="content-btn" type="button" name="major" id="major">Major</button>
          <button className="content-btn" type="button" name="minor" id="minor">Minor</button>
          <button className="content-btn" type="button" name="augmented" id="augmented">Augmented</button>
          <button className="content-btn" type="button" name="diminished" id="diminished">Diminished</button>
      </section>
    )
  }
}

export default ContentBtns;
