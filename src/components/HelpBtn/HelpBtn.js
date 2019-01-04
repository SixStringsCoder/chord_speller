import React, { Component } from 'react';

class HelpBtn extends Component {

  render() {
    return (
      <div id="help-btn-cont">
        <button id="help-btn"
                className="tab-outline"
                onClick={this.props.handleQuestion}><span>&#63;</span>
        </button>
      </div>
    )
  }
}

export default HelpBtn;
