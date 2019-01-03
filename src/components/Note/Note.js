import React, {Component} from 'react';

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
  }


  handleNoteAudio = () => {
    if (this.state.note.length === this.state.totalChars && this.state.correctNote) {
      let loadNote = require(`../../audio/${this.props.audio}.mp3`);
      let note = new Audio(loadNote);
      note.volume = 0.5;
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
          // Correct answer sets border color to green or red; no value = no color
          className={ (this.state.note && !this.state.correctNote) ? "note tab-outline red" :
                      (this.state.correctNote) ? "note tab-outline green" :
                      "note tab-outline"
                     }
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
