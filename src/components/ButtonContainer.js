import React, { Component } from 'react';

class ButtonContainer extends Component {
  render() {
    return (
      <div className="ButtonContainer">
        <div className="Button StartB" onClick={this.props.handleClickStart}>START</div>
        <div className="Button StopB" onClick={this.props.handleClickStop}>STOP</div>
      </div>
    );
  }
}

export default ButtonContainer;
