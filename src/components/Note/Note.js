import React, {Component} from 'react';

class Note extends Component {
  state = {
    note: '',
    correct: false,
    border: 'red'
  }

  handleNote = (e) => {
    console.log(e.target.name);
    this.setState({
      note: e.target.value,
      correct: e.target.value === e.target.name ? true : false,
    });
  }

  handleCorrect = (e) => {
    if (this.state.correct) {
      this.setState({ border: 'green' })
    }
  }

  render() {
    const {note, id } = this.props;
    return (
        <input
          type="text"
          value={this.state.note}
          onChange={this.handleNote}
          name={note}
          id={id}
          // Correct answer sets border color to green else red
          className={!this.state.correct ? "note red" : "note green"}
          tabIndex="0"
          maxLength={note.length === 2 ? 2 : 1}
        />
    )
  }
}

export default Note;
