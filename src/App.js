import React, { Component } from 'react';
import Timer from './components/Timer.js';
import ButtonContainer from './components/ButtonContainer.js';
import RunesContainer from './components/RunesContainer.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      started: false,
      interval: null,
      seconds: 0,
      minutes: 0,
      alertRunes: false,
      goldGiven: 0,
    }
  }

  tick(){
    if(this.state.started) {
      let updatedTime = this.state.seconds + this.state.minutes * 60;
      if(updatedTime % 300 === 0){
        let goldGiven = 2 * (this.state.minutes + 5);
        this.setState({
          goldGiven: goldGiven
        })
      }
      if((updatedTime - 30) % 300 === 0){
        document.getElementById('beep').play();
      }
      updatedTime += 1;
      let newSeconds = updatedTime % 60;
      let newMinutes = Math.floor(updatedTime / 60);
      this.setState({
        seconds: newSeconds,
        minutes: newMinutes,
      });
    }
  }

  startButtonHandle(){
    if(this.state.interval == null){
      let interval = setInterval(() => this.tick(), 1);
      this.setState({
        started: true,
        interval: interval,
      });
    }
    else {
      this.setState({
        started: true,
      });
    }
  }

  stopButtonHandle(){
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      seconds: 0,
      minutes: 0,
      alertRunes: false,
      goldGiven: 0,
      started: false,
    });
  }

  pauseButtonHandle(){
    this.setState({
      started: false,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <div className="Title">
            GET RUNES!
          </div>

          <Timer minutes={this.state.minutes} seconds={this.state.seconds}></Timer>

          <ButtonContainer started={this.state.started}
                           handleClickStart={() => this.startButtonHandle()}
                           handleClickStop={() =>this.stopButtonHandle()}
                           handleClickPause={() =>this.pauseButtonHandle()}>
                           </ButtonContainer>

          <RunesContainer goldGiven={this.state.goldGiven}></RunesContainer>
        </div>
      </div>
    );
  }
}

export default App;
