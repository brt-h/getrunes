import React, { Component } from 'react';

class SoundButtonContainer extends Component {
  render() {
    let userVol = Math.round(this.props.vol * 10);
    let muteToggle;
    if(!this.props.mute) {
      muteToggle = <div className="sButton" onClick={this.props.handleMute}>Mute</div>
    }
    else {
      muteToggle = <div className="sButton" onClick={this.props.handleMute}>Unmute</div>
    }
    return (
      <div className="SoundContainer">
        <div className="volRow">
          <div>Volume: {userVol}</div>
        </div>
        <div className="ButtonRow">
          <div className="sButton" onClick={this.props.handlePlus}>+</div>
          <div className="sButton" onClick={this.props.handleMinus}>-</div>
          {muteToggle}
        </div>
      </div>
    );
  }
}

export default SoundButtonContainer;
