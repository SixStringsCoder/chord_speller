import React, {Component} from 'react';

class Note extends Component {
  state = {
    note: '',
    correct: false,
    totalChars: 0,
  }

  handleNote = (e) => {
      this.setState({
        note: e.target.value,
        correct: e.target.value === e.target.name ? true : false,
        totalChars: Number(e.target.maxLength), // totalChars allows for double-char note i.e. Bb and C# to play after 2nd character
      }, this.handleNoteAudio);
    }


  appCallBack = () => {
    this.props.correctAudio(this.state.correct);
  }

  handleNoteAudio = () => {
    if (this.state.note.length === this.state.totalChars) {
      let lowerCaseNote = this.state.note;
      this.props.playNote(lowerCaseNote);
    }
  }

  render() {
    const { note, id } = this.props;
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
          maxLength={(note.length === 3) ? 3
                      : (note.length === 2) ? 2
                      : 1
                    }
        />
    )
  }
}

export default Note;
