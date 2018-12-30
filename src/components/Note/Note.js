import React, {Component} from 'react';
import { noteAudio } from '../util/utility';

class Note extends Component {
  state = {
    note: '',
    notePosition: '',
    correctNote: false,
    totalChars: 0,
    correctChord: false,
  }

  handleNote = (e) => {
      this.setState({
        note: e.target.value,
        notePosition: e.target.placeholder,
        correctNote: e.target.value === e.target.name ? true : false,
        totalChars: Number(e.target.maxLength), // totalChars allows for double-char notes i.e. Bb and C# to play after 2nd character
      }, this.handleNoteAudio);
      console.log(e.target.placeholder)
    }


  handleNoteAudio = () => {
    if (this.state.note.length === this.state.totalChars && this.state.correctNote) {
      // let loadNote = (this.state.notePosition !== "root") ? noteAudio[`${this.state.note}2`] : noteAudio[`${this.state.note}`];
      let loadNote = noteAudio[`${this.state.note}`];
      let note = new Audio(loadNote);
      console.log(this.state.note + " just played");
      note.play();
    }
  }

  render() {
    const { note, id, placeholder } = this.props;
    return (
        <input
          type="text"
          value={this.state.note}
          onChange={this.handleNote}
          name={note}
          placeholder={placeholder}
          id={id}
          // Correct answer sets border color to green or red
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
