import React, { Component } from 'react';
import Bulldog from './bulldog.jpg';

class Timer extends Component {
  render() {
    let textbubblepop;
    let timer;
    if(this.props.alert) {
      textbubblepop = "Show animated bounceIn";
    }
    else {
      textbubblepop = "Hidden";
    }

    return (
      <div className="TimerContainer">
        <div className="Timer">
          <div className="TimerMins">{this.props.minutes < 10 ? '0'+ this.props.minutes : this.props.minutes}</div>
          <div> : </div>
          <div className="TimerSecs">{this.props.seconds < 10 ? '0'+ this.props.seconds : this.props.seconds}</div>
        </div>
        <div className={textbubblepop}>
          <div className="TextBubble">ROOONS!</div>
          <img className="Bulldog" src={Bulldog}/>
        </div>
      </div>
    );
  }
}

export default Timer;
