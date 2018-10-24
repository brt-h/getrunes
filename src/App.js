import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      interval: null,
      seconds: 0,   // responsible for the seconds
      minutes: 0,  // responsible for the minutes
    }
  }

  tick(){
    let updatedTime = this.state.seconds + this.state.minutes * 60;
    updatedTime += 1;
    //console.log(updatedTime);
    let newSeconds = updatedTime % 60;
    let newMinutes = Math.floor(updatedTime / 60);
    this.setState({
      seconds: newSeconds,
      minutes: newMinutes,
    });
  }

  startButtonHandle(){
    if(this.state.interval == null){
      let interval = setInterval(() => this.tick(), 1000);
      this.setState({
        interval: interval,
      });
    }
  }

  stopButtonHandle(){
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      seconds: 0,
      minutes: 0,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Title">Get Runes!</div>


        <div className="TimerContainer">
          <div className="TimerMins">{this.state.minutes}</div>
          <div className="TimerSecs">{this.state.seconds}</div>
        </div>


        <div className="ButtonContainer">
          <div className="StartButton" onClick={() => this.startButtonHandle()}>START</div>
          <div className="StopButton" onClick={() => this.stopButtonHandle()}>STOP</div>
        </div>


        <div className="RuneTable">
          <div className="RuneTableRow">RUNE 1</div>
          <div className="RuneTableRow">RUNE 2</div>
          <div className="RuneTableRow">RUNE 3</div>
          <div className="RuneTableRow">RUNE 4</div>
        </div>
      </div>

    );
  }
}

export default App;
