import React, {Component} from 'react';

class Note extends Component {
  state = {
    note: '',
    correctNote: false,
    totalChars: 0,
    correctChord: false,
  }

  handleNote = (e) => {
      this.setState({
        note: e.target.value,
        correctNote: e.target.value === e.target.name ? true : false,
        totalChars: Number(e.target.maxLength), // totalChars allows for double-char note i.e. Bb and C# to play after 2nd character
      }, this.handleNoteAudio);
    }


  handleChord = () => {
    this.props.playChord(this.state.note);
  }

  handleNoteAudio = () => {
    if (this.state.note.length === this.state.totalChars && this.state.correctNote) {
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
          className={!this.state.correctNote ? "note red" : "note green"}
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
