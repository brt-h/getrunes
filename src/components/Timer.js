import React, { Component } from 'react';

class Timer extends Component {
  render() {
    let numberMins;
    if(this.props.alert){
      numberMins = "TimerMins highlight"
    }
    else {
      numberMins = "TimerMins"
    }

    let numberSecs;
    if(this.props.alert){
      numberSecs = "TimerSecs highlight"
    }
    else {
      numberSecs = "TimerSecs"
    }
    return (
      <div className="TimerContainer">
        <div className="Timer">
          <input type="number"
                 onBlur={this.props.handleOffFocusMins}
                 onFocus={this.props.handleOnFocusMins}
                 disabled={this.props.started}
                 className={numberMins}
                 value={this.props.minutes}
                 onChange={this.props.handleMins}/>
          <div> : </div>
          <input type="number"
                 onBlur={this.props.handleOffFocusSecs}
                 onFocus={this.props.handleOnFocusSecs}
                 disabled={this.props.started}
                 className={numberSecs}
                 value={this.props.seconds}
                 onChange={this.props.handleSecs}/>
        </div>
      </div>
    );
  }
}

export default Timer;
