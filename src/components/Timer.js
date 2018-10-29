import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div className="TimerContainer">
        <div className="Timer">
          <div className="TimerMins">{this.props.minutes < 10 ? '0'+ this.props.minutes : this.props.minutes}</div>
          <div> : </div>
          <div className="TimerSecs">{this.props.seconds < 10 ? '0'+ this.props.seconds : this.props.seconds}</div>
        </div>
      </div>
    );
  }
}

export default Timer;
