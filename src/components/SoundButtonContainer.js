import React, { Component } from 'react';

class SoundButtonContainer extends Component {
  render() {
    return (
      <div className="SoundContainer">
        <div className="sButton" onClick={this.props.handlePlus}>+</div>
        <div className="sButton" onClick={this.props.handleMinus}>-</div>
        <div className="sButton" onClick={this.props.handleMute}>Mute</div>
      </div>
    );
  }
}

export default SoundButtonContainer;
