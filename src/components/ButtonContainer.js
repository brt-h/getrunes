import React, { Component } from 'react';

class ButtonContainer extends Component {
  render() {
    return (
      <div className="ButtonContainer">
        <div className="StartButton" onClick={this.props.handleClickStart}>START</div>
        <div className="StopButton" onClick={this.props.handleClickStop}>STOP</div>
      </div>
    );
  }
}

export default ButtonContainer;
