import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { selection, content } = this.props;
    return (
          <button onClick={(e) => content(e.target.id)}
            className="content-btn"
            type="button"
            name={selection}
            id={selection}>
            {selection}
          </button>
    )
  }
}

export default Button;
